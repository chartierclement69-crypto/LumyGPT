export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { message } = req.body || {};
    if (!message) return res.status(400).json({ reply: 'Message vide' });

    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: 'Tu es LumyGPT, une IA sympa qui parle en français, style jeune, simple.' },
          { role: 'user', content: message }
        ]
      })
    });

    const data = await r.json();

    // Si GROQ renvoie une erreur, on l'affiche pour de vrai au lieu de "Erreur GROQ"
    if (!r.ok) {
      console.log('GROQ ERROR:', data);
      return res.status(200).json({ reply: 'GROQ dit : ' + (data?.error?.message || 'erreur inconnue') });
    }

    return res.status(200).json({ reply: data.choices[0].message.content });
  } catch (e) {
    console.log('SERVER ERROR:', e);
    return res.status(200).json({ reply: 'Erreur serveur : ' + e.message });
  }
}
