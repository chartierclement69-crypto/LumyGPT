export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ reply: 'Méthode non autorisée' });
  const { message, image } = req.body;

  let messages = [{ role: 'system', content: 'Tu es LumyGPT, un assistant cool qui parle comme les jeunes. Tu comprends et tu utilises le langage des jeunes. Si on t\'envoie une image, décris-la en détail, dis ce que tu vois, donne ton avis comme un pote.' }];

  if (image) {
    messages.push({
      role: 'user',
      content: [
        { type: 'text', text: message || 'Décris cette image' },
        { type: 'image_url', image_url: { url: image } }
      ]
    });
  } else {
    messages.push({ role: 'user', content: message });
  }

  const model = image ? 'qwen/qwen3.8-27b' : 'openai/gpt-oss-20b';

  try {
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.GROQ_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, messages, temperature: 0.8, max_tokens: 1000 })
    });
    const data = await r.json();
    if (data.error) return res.json({ reply: 'Erreur Groq : ' + data.error.message });
    return res.json({ reply: data.choices?.[0]?.message?.content || 'bug, réessaie' });
  } catch (e) {
    return res.json({ reply: 'bug serveur : ' + e.message });
  }
}
