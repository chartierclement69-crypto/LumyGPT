// api/leaderboard.js - VRAI CLASSEMENT, ZÉRO BOTTE
// Sur Vercel -> Settings -> Environment Variables, tu ajoutes :
// UPSTASH_REDIS_REST_URL
// UPSTASH_REDIS_REST_TOKEN
// Gratuit sur upstash.com -> Create Database -> Redis

export default async function handler(req, res) {
  const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
  const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!UPSTASH_URL || !TOKEN) {
    return res.json({ players: [] });
  }

  const season = req.query.season || req.body?.season || '2026-S4';
  const key = `leaderboard:${season}`;

  if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch(e){ body = {}; } }
    const { pseudo, score } = body || {};
    if (!pseudo) return res.status(400).json({ error: 'no pseudo' });
    // On garde seulement le meilleur score du pseudo
    await fetch(`${UPSTASH_URL}/zadd/${key}/${score}/${encodeURIComponent(pseudo)}`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    return res.json({ ok: true });
  }

  // GET : Top 10 réel
  const r = await fetch(`${UPSTASH_URL}/zrevrange/${key}/0/9/withscores`, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  const data = await r.json();
  const arr = data.result || [];
  let players = [];
  for (let i = 0; i < arr.length; i += 2) {
    players.push({ name: decodeURIComponent(arr[i]), score: parseInt(arr[i+1]) });
  }
  return res.json({ players });
}
