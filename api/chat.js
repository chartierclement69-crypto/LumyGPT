export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ reply: 'Méthode non autorisée' });
  const { message } = req.body;
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: 'system', content: 'Tu es LumyGPT, un assistant cool qui parle comme les jeunes. Tu comprends et tu utilises le langage des jeunes.' },
        { role: 'user', content: message }
      ],
      temperature: 0.8
    })
  });
  const data = await r.json();
  return res.json({ reply: data.choices?.[0]?.message?.content || 'bug, réessaie' });
}
