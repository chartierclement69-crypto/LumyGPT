export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { message } = req.body || {};
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [
          { role: 'system', content: 'Tu es LumyGPT, une IA sympa qui parle en français, style jeune, simple.' },
          { role: 'user', content: message }
        ]
      })
    });
    const data = await r.json();
    if (!r.ok) {
      return res.status(200).json({ reply: 'GROQ dit : ' + (data?.error?.message || 'erreur inconnue') });
    }
    return res.status(200).json({ reply: data.choices[0].message.content });
  } catch (e) {
    return res.status(200).json({ reply: 'Erreur serveur : ' + e.message });
  }
}
