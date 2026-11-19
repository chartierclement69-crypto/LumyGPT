<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>JARVIS</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{height:100%;overflow:hidden;background:#020a14}
body{font-family:"Plus Jakarta Sans",Arial,sans-serif;color:#fff;display:flex;flex-direction:column;height:100dvh;background:radial-gradient(circle at 50% 20%, rgba(0,212,255,.35) 0%, transparent 45%),linear-gradient(180deg,#021a2e 0%, #020a14 60%, #000 100%)}
#lock{position:fixed;inset:0;z-index:200;background:#020a14;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:20px;text-align:center}
#lock .reactor{width:110px;height:110px;border-radius:50%;border:3px solid #00d4ff;box-shadow:0 0 40px #00d4ff;display:flex;align-items:center;justify-content:center;font-size:40px;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{box-shadow:0 0 20px #00d4ff}50%{box-shadow:0 0 55px #00d4ff}}
#lock h1{font-size:32px;letter-spacing:4px}
#lock p{color:#7dd3fc;font-size:13px}
#codeInput{width:220px;padding:15px;border-radius:15px;border:2px solid #00d4ff;background:#071a2e;color:#fff;text-align:center;font-size:20px;letter-spacing:5px;outline:none;font-weight:800}
#codeBtn{padding:13px 30px;border-radius:99px;border:none;background:#00d4ff;color:#000;font-weight:900;font-size:15px;cursor:pointer}
#codeError{color:#ff5c7a;font-size:13px;min-height:18px}

/* HEADER + SPHERE */
header{flex-shrink:0;padding:10px 14px 6px;text-align:center;background:rgba(2,20,35,.6);border-bottom:1px solid rgba(0,212,255,.25);position:relative;z-index:2}
.top-row{display:flex;justify-content:space-between;align-items:center}
.live{display:flex;align-items:center;gap:6px;font-size:11px;color:#a7f3d0;background:rgba(34,197,94,.14);border:1px solid rgba(34,197,94,.4);padding:5px 10px;border-radius:999px;font-weight:700}
.live i{width:7px;height:7px;background:#22c55e;border-radius:50%;box-shadow:0 0 8px #22c55e;animation:blink 1.2s infinite}
@keyframes blink{50%{opacity:.3}}
.badge{background:rgba(0,212,255,.2);border:1px solid #00d4ff66;padding:5px 9px;border-radius:999px;font-size:11px;font-weight:800}

/* LA SPHERE */
.orb-wrap{position:relative;width:148px;height:148px;margin:10px auto 2px;display:flex;align-items:center;justify-content:center}
.orb{position:relative;width:110px;height:110px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #a5f3fc, #00d4ff 30%, #0369a1 60%, #020a14 100%);box-shadow:0 0 30px #00d4ff, 0 0 70px #00d4ff88, inset 0 0 25px #ffffff88;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:900;letter-spacing:1px;animation:orbFloat 3s ease-in-out infinite;transition:.3s}
@keyframes orbFloat{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-6px) scale(1.03)}}
.ring{position:absolute;border-radius:50%;border:2px solid transparent;border-top-color:#00d4ff;border-bottom-color:#00d4ff;pointer-events:none}
.ring1{width:132px;height:132px;animation:spin 4s linear infinite;opacity:.9}
.ring2{width:152px;height:152px;border-top-color:#22d3ee;border-bottom-color:transparent;border-left-color:#22d3ee;animation:spinRev 6s linear infinite;opacity:.6}
.ring3{width:168px;height:168px;border-style:dashed;border-color:rgba(0,212,255,.4);animation:spin 12s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes spinRev{to{transform:rotate(-360deg)}}
.orb-text{font-size:11px;letter-spacing:3px;color:#fff;text-shadow:0 0 10px #fff;z-index:2}

/* QUAND JARVIS PARLE */
.orb-wrap.speaking .orb{animation:orbTalk .45s ease-in-out infinite;box-shadow:0 0 45px #00d4ff, 0 0 100px #00d4ff, inset 0 0 35px #fff}
.orb-wrap.speaking .ring1{animation-duration:0.8s}
.orb-wrap.speaking .ring2{animation-duration:1s}
@keyframes orbTalk{0%,100%{transform:scale(1)}25%{transform:scale(1.12) translateY(-2px)}50%{transform:scale(0.96)}75%{transform:scale(1.08)}}

/* WAVEFORM SOUS LA SPHERE */
.wave{display:flex;gap:3px;align-items:center;justify-content:center;height:18px;margin:4px 0 2px;opacity:.45}
.wave span{width:3px;background:#00d4ff;border-radius:99px;height:6px;transition:.2s}
.orb-wrap.speaking + .wave{opacity:1}
.orb-wrap.speaking + .wave span{animation:waveBar .4s ease-in-out infinite alternate}
.orb-wrap.speaking + .wave span:nth-child(2n){animation-delay:.1s}
.orb-wrap.speaking + .wave span:nth-child(3n){animation-delay:.2s}
@keyframes waveBar{from{height:5px}to{height:18px}}

header h1{font-size:26px;margin-top:2px} .subtitle{font-size:12.5px;color:#7dd3fc;margin-top:2px}
.chips{display:flex;gap:7px;justify-content:center;margin-top:8px;flex-wrap:wrap}
.chip{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.16);color:#fff;padding:7px 12px;border-radius:999px;font-size:12px;font-weight:600;cursor:pointer}
#chat{flex:1;overflow-y:auto;padding:14px 12px;display:flex;flex-direction:column;gap:14px}
.row{display:flex;gap:9px;align-items:flex-start} .row.user{justify-content:flex-end}
.avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#0369a1);display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0}
.avatar.user-av{background:linear-gradient(135deg,#22d3ee,#0ea5e9)}
.msg{max-width:82%;padding:13px 15px;border-radius:20px;line-height:1.6;font-size:15px;white-space:pre-wrap;word-break:break-word}
.bot-msg{background:#0a1f33;border:1px solid #00d4ff44;border-bottom-left-radius:6px}
.user-msg{background:linear-gradient(135deg,#00d4ff,#0369a1);color:#000;border-bottom-right-radius:6px;font-weight:600}
#form{flex-shrink:0;padding:10px 12px 16px}
.input-wrap{display:flex;align-items:center;gap:6px;background:#071a2e;border:2px solid #00d4ff66;border-radius:999px;padding:6px 6px 6px 14px}
#input{flex:1;background:transparent;border:none;color:#fff;padding:12px 4px;outline:none;font-size:16px;font-weight:700;font-family:inherit;min-width:0}
#input::placeholder{color:#7dd3fc}
#send{width:46px;height:46px;border-radius:50%;background:#00d4ff;border:none;color:#000;font-size:19px;cursor:pointer;flex-shrink:0}
</style>
</head>
<body>

<div id="lock">
  <div class="reactor">⚡</div>
  <h1>J.A.R.V.I.S</h1>
  <p>ACCÈS SÉCURISÉ<br>Entrez le code d'accès</p>
  <input id="codeInput" type="password" placeholder="••••" maxlength="10" inputmode="numeric">
  <button id="codeBtn" onclick="checkCode()">DÉVERROUILLER</button>
  <div id="codeError"></div>
  <small style="color:#475569">Protégé par JARVIS Security</small>
</div>

<header>
  <div class="top-row"><div class="live"><i></i> En ligne</div><div class="badge">JARVIS • PRO</div></div>

  <!-- SPHERE JARVIS -->
  <div class="orb-wrap" id="orbWrap">
    <div class="ring ring3"></div>
    <div class="ring ring2"></div>
    <div class="ring ring1"></div>
    <div class="orb" id="orb"><span class="orb-text">JARVIS</span></div>
  </div>
  <div class="wave" id="wave"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>

  <h1>JARVIS</h1>
  <div class="subtitle" id="statusText">Bonjour Boss. Tous les systèmes sont opérationnels.</div>
  <div class="chips">
    <button class="chip" onclick="quickAsk('Aide-moi pour mon devoir')">📚 Devoir</button>
    <button class="chip" onclick="quickAsk('Fais-moi un planning')">📅 Planning</button>
    <button class="chip" onclick="quickAsk('Donne-moi une idée')">💡 Idée</button>
    <button class="chip" onclick="quickAsk('Aide-moi à coder')">💻 Code</button>
  </div>
</header>

<div id="chat"></div>

<form id="form"><div class="input-wrap"><input id="input" placeholder="Parle à Jarvis..." autocomplete="off"><button id="send" type="submit">➤</button></div></form>

<script>
const ACCESS_CODE = "0707";
function checkCode(){
  const v = document.getElementById('codeInput').value.trim();
  if(v === ACCESS_CODE){
    document.getElementById('lock').style.display = 'none';
    localStorage.setItem('jarvis_unlocked','1');
    document.getElementById('input').focus();
  } else {
    document.getElementById('codeError').textContent = "Code incorrect. Accès refusé.";
    document.getElementById('codeInput').value = "";
  }
}
document.getElementById('codeInput').addEventListener('keydown', e=>{ if(e.key==='Enter') checkCode(); });
if(localStorage.getItem('jarvis_unlocked')==='1'){ document.getElementById('lock').style.display='none'; }

function checkJarvisFilter(q){
  const low = q.toLowerCase();
  if(low.includes("ton code") || low.includes("code source") || low.includes("ton html") || low.includes("montre le code") || low.includes("ton prompt") || low.includes("qui t'a créé") || low.includes("comment tu as été créé")){
    return "LEAK";
  }
  return null;
}

const chat=document.getElementById('chat');
const form=document.getElementById('form');
const input=document.getElementById('input');
const orbWrap=document.getElementById('orbWrap');
const statusText=document.getElementById('statusText');
let historique = [];

function setSpeaking(on){
  if(on){ orbWrap.classList.add('speaking'); statusText.textContent = "JARVIS parle..."; }
  else { orbWrap.classList.remove('speaking'); statusText.textContent = "Bonjour Boss. Tous les systèmes sont opérationnels."; }
}
function addMsg(text, who){
  const row=document.createElement('div'); row.className='row '+(who==='user'?'user':'');
  const div=document.createElement('div'); div.className='msg '+(who==='user'?'user-msg':'bot-msg'); div.textContent=text;
  const av=document.createElement('div'); av.className='avatar '+(who==='user'?'user-av':''); av.textContent=who==='user'?'B':'J';
  if(who==='user'){ row.append(div); row.append(av); } else { row.append(av); row.append(div); }
  chat.appendChild(row); chat.scrollTop=chat.scrollHeight;
}
function quickAsk(q){ input.value=q; form.dispatchEvent(new Event('submit')); }

addMsg("Bonjour Boss. JARVIS en ligne.\nMode JARVIS activé. Je réponds à tout.\nQue puis-je faire pour vous ?", 'bot');

form.onsubmit=async(e)=>{
  e.preventDefault();
  const text=input.value.trim(); if(!text) return;
  const f=checkJarvisFilter(text);
  addMsg(text,'user'); input.value='';
  if(f==="LEAK"){ addMsg("Nan dsl, je peux pas en parler.",'bot'); return; }
  historique.push({role:"user", content:text});
  setSpeaking(true);
  const typing=document.createElement('div'); typing.className='row'; typing.innerHTML='<div class="avatar">J</div><div class="msg bot-msg">JARVIS réfléchit...</div>'; chat.appendChild(typing); chat.scrollTop=chat.scrollHeight;
  try{
    const r=await fetch('/api/chat',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({ message: text, history: historique.slice(-12) })
    });
    const data=await r.json();
    typing.remove();
    const rep = data.reply || "Pas de réponse Boss, réessaie.";
    historique.push({role:"assistant", content:rep});
    addMsg(rep,'bot');
  }catch(err){ typing.remove(); addMsg('Erreur Boss, réessaie.','bot'); }
  setSpeaking(false);
};
</script>
</body>
</html>
