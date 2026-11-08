<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LumyGPT</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#0f0f0f;color:#fff;font-family:Arial,sans-serif;height:100dvh;display:flex;flex-direction:column}
  header{padding:14px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #222;background:#111}
  header h1{font-size:20px} header h1 span{color:#a855f7}
  #clearBtn{background:#222;border:1px solid #333;color:#fff;padding:8px 12px;border-radius:999px;cursor:pointer;font-size:13px}
  #clearBtn:active{transform:scale(.96)}
  #chat{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px}
  .msg{max-width:85%;padding:12px 14px;border-radius:18px;line-height:1.5;font-size:15px;white-space:pre-wrap;word-break:break-word}
  .user{background:#a855f7;align-self:flex-end;border-bottom-right-radius:4px}
  .bot{background:#1e1e1e;border:1px solid #2a2a2a;align-self:flex-start;border-bottom-left-radius:4px}
  .bot b{color:#fff}
  .bot code{background:#000;padding:2px 6px;border-radius:6px;font-size:13px}
  .bot pre{background:#000;padding:10px;border-radius:10px;overflow-x:auto;margin:8px 0;font-size:13px}
  #form{display:flex;gap:10px;padding:12px;background:#111;border-top:1px solid #222}
  #input{flex:1;background:#1e1e1e;border:1px solid #333;color:#fff;padding:13px 16px;border-radius:999px;outline:none;font-size:15px}
  #send{background:#a855f7;border:none;color:#fff;width:48px;height:48px;border-radius:50%;font-size:20px;cursor:pointer;flex-shrink:0}
  #send:disabled{opacity:.5}
  .typing{opacity:.6;font-style:italic}
</style>
</head>
<body>
<header>
  <h1>Lumy<span>GPT</span></h1>
  <button id="clearBtn">🗑️ Effacer</button>
</header>

<div id="chat"></div>

<form id="form">
  <input id="input" placeholder="Écris quelque chose..." autocomplete="off" />
  <button id="send" type="submit">➤</button>
</form>

<script>
const chat = document.getElementById('chat');
const form = document.getElementById('form');
const input = document.getElementById('input');
const send = document.getElementById('send');
const clearBtn = document.getElementById('clearBtn');

// --- HISTORIQUE : ça reste même si tu recharges ---
let history = JSON.parse(localStorage.getItem('lumy_history') || '[]');

function saveHistory(){
  localStorage.setItem('lumy_history', JSON.stringify(history.slice(-50)));
}

function escapeHtml(t){
  return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function formatText(t){
  let s = escapeHtml(t);
  // **gras** -> <b>
  s = s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  // `code` -> <code>
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Si y'a un bloc ``` on l'enlève, on affiche propre
  s = s.replace(/```[\s\S]*?```/g, (m)=>{
    const clean = m.replace(/```\w*/,'').replace(/```/,'').trim();
    return '<pre>' + clean + '</pre>';
  });
  return s;
}

function addMsg(text, who){
  const div = document.createElement('div');
  div.className = 'msg ' + who;
  div.innerHTML = formatText(text);
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
  return div;
}

// On ré-affiche l'historique au chargement
if(history.length === 0){
  addMsg('Salut bg ! Je suis LumyGPT, créé par l\'équipe LumyGPT. Pose-moi une question, je suis là.', 'bot');
} else {
  history.forEach(h => addMsg(h.text, h.who));
}

// --- EFFACER ---
clearBtn.onclick = ()=>{
  if(!confirm('Tu veux vraiment effacer toute la conv ?')) return;
  history = [];
  localStorage.removeItem('lumy_history');
  chat.innerHTML = '';
  addMsg('Salut bg ! Je suis LumyGPT, créé par l\'équipe LumyGPT. Pose-moi une question, je suis là.', 'bot');
};

// --- ENVOYER ---
form.onsubmit = async (e)=>{
  e.preventDefault();
  const text = input.value.trim();
  if(!text) return;
  addMsg(text, 'user');
  history.push({text, who:'user'});
  saveHistory();
  input.value = '';
  send.disabled = true;

  const typing = addMsg('LumyGPT écrit...', 'bot');
  typing.classList.add('typing');

  try{
    const r = await fetch('/api/chat', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({message:text})
    });
    const data = await r.json();
    typing.remove();
    const reply = data.reply || 'Pas de réponse bg, réessaie.';
    addMsg(reply, 'bot');
    history.push({text:reply, who:'bot'});
    saveHistory();
  }catch(err){
    typing.remove();
    addMsg('Erreur bg, réessaie.', 'bot');
  }
  send.disabled = false;
  input.focus();
};
</script>
</body>
</html>
