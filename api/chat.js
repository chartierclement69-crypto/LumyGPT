export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ reply: 'Méthode non autorisée' });
  const { message, image } = req.body;

  let messages = [{ role: 'system', content: 'Tu es LumyGPT, un assistant cool qui parle comme les jeunes. Tu comprends et tu utilises le langage des jeunes. Si on t\'envoie une image, décris-la en détail, dis ce que tu vois, donne ton avis comme un pote.' }];

  // Si y'a une image, on utilise le modèle qui VOIT
  if (image) {
    messages.push({
      role: 'user',
      content: [
        { type: 'text', text: message || 'Décris cette image et dis-moi ce que t\'en penses' },
        { type: 'image_url', image_url: { url: image } }
      ]
    });
  } else {
    messages.push({ role: 'user', content: message });
  }

  const model = image ? 'meta-llama/llama-4-scout-17b-16e-instruct' : 'openai/gpt-oss-20b';

  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ model, messages, temperature: 0.8, max_tokens: 1000 })
  });
  const data = await r.json();
  console.log(data);
  return res.json({ reply: data.choices?.[0]?.message?.content || 'bug, réessaie' });
}
