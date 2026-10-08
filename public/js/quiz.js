const nodes = [
  {type:'dialog', board:'', avatar:'', name:'', text:'(Kamu masih memahami materi yang baru saja kamu pelajari.)'},
  {type:'dialog', board:'', avatar:'', name:'', text:'(Beberapa materi cukup sulit dipahami akhirnya kamu memutuskan untuk mencatat supaya kamu dapat mengingatnya)'},
  {type:'dialog', board:'', avatar:'/assets/female.png', name:'???', text:'HAYOOO LAGI NGAPAIN KAMU!!'},
  {type:'dialog', board:'', avatar:'/assets/female.png', name:'???', text:'Serius banget mana coba kuliat. Ooh materi ini mah gampang.'},
  {type:'dialog', board:'', avatar:'/assets/female.png', name:'Renalla', text:'Oiya namaku Renalla. Kamu pasti murid baru itukan?'},
  {type:'dialog', board:'', avatar:'/assets/female.png', name:'Renalla', text:'Daripada kebanyakan nyatet mending kukasih soal aja gimana? itung - itung latihan hihihi.'},
  {type:'dialog', board:'', avatar:'/assets/female.png', name:'Renalla', text:'Tenang aja soal - soalku gampang kok kurang lebih sama dengan materi yang kamu pelajari.'},
  {type:'dialog', board:'', avatar:'/assets/female.png', name:'Renalla', text:'Aku punya 5 soal aja dan kukasih kamu 15 menit buat jawab. '},
  {type:'game',board:'', avatar:'/assets/female.png', name:'Renalla',
    text:'Gimana? kalau iya aku mulai nih..',
    options:[
      {label:'Ayo kita mulai sekarang', correct:true, fb:''},
      {label:'Waduh sebentar aku belum siap', correct:false, fb:'Hahaha gapapa kalau udah siap bilang aja. Aku temenin kok.'},
    ]},
  {type:'quiz', board:'', avatar:'/assets/female.png', name:'Renalla', q:'Dalam sistem pembukuan DoubleEntry, jika suatu akun aset bertambah, pencatatannya dilakukan di sisi mana?',explain:'Aset memiliki saldo normal debit, sehingga pertambahan aset dicatat di sisi debit.',
    options:[
      {label:'Debit', correct:true},
      {label:'Kredit', correct:false},
      {label:'Ekuitas', correct:false},
      {label:'Pendapatan', correct:false}
    ]},
  {type:'quiz', board:'', avatar:'/assets/female.png', name:'Renalla', q:'Pemerintah daerah menerbitkan SKP pajak hotel sebesar 17.500.000, tetapi wajib pajak belum membayar. Jurnal finansial yang tepat adalah ...',explain:'Penerbitan SKP menimbulkan hak pemerintah berupa piutang dan mengakui pendapatan-LO.',
    options:[
      {label:'Debit Kas 17.500.000; Kredit Pendapatan-LO Rp17.500.000', correct:false},
      {label:'Debit Belanja 17.000.000; Kredit Piutang Pajak Hotel 17.500.000', correct:false},
      {label:'Debit Pendapatan-LO 17.000.000; Kredit Piutang Pajak Hotel 17.500.000', correct:false},
      {label:'Debit Piutang Pajak Hotel Rp17.500.000; Kredit Pendapatan-LO Rp17.500.000', correct:true}
    ]},
  {type:'quiz', board:'', avatar:'/assets/female.png', name:'Renalla', q:'Pendapatan-LO memiliki saldo normal kredit karena pendapatan menambah ekuitas.',explain:'Pendapatan-LO menambah ekuitas melalui surplus atau defisit, sehingga saldo normalnya berada di sisi kredit.',
    options:[
      {label:'Benar', correct:true},
      {label:'Salah', correct:false},
    ]},
  {type:'quiz', board:'', avatar:'/assets/female.png', name:'Renalla', q:'Bendahara pengeluaran menerima SP2D-UP sebesar Rp1.200.000. Apa perlakuan yang paling tepat terhadap penerimaan UP tersebut?',explain:'UP menambah kas yang dikelola bendahara; belanja baru diakui ketika uang digunakan untuk pengeluaran yang memenuhi kriteria.',
    options:[
      {label:'Langsung dicatat sebagai belanja Rp1.200.000', correct:false},
      {label:'Dicatat sebagai kas di bendahara pengeluaran Rp1.200.000', correct:true},
      {label:'Dicatat sebagai pendapatan-LRA Rp1.200.000', correct:false},
      {label:'Dicatat sebagai piutang pajak Rp1.200.000', correct:false}
    ]},
  {type:'quiz', board:'', avatar:'/assets/female.png', name:'Renalla', q:'Pemerintah membeli ATK menggunakan UP sebesar Rp240.000. Akun belanja bertambah di sisi...',explain:'Belanja memiliki saldo normal debit sehingga pertambahannya dicatat di sisi debit.',
    options:[
      {label:'Ekuitas', correct:false},
      {label:'Kredit', correct:false},
      {label:'Debit', correct:true},
      {label:'Pendapatan', correct:false}
    ]},
  {type:'end'}
];

// key dipisah dari game.js ('logkyv-novel-state'), kalau sama progres game & quiz saling menimpa
const STORAGE_KEY = 'logkyv-quiz-state';
const QUIZ_DURATION = 15 * 60 * 1000;   // 15 menit
function save(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify({ i, quizAnswers, startedAt, finished })); }
  catch(e){}
}

let finished = false;   // true setelah quiz diakhiri, jawaban terkunci
const quizIdx = nodes.map((n, idx) => n.type === 'quiz' ? idx : -1).filter(idx => idx >= 0);

const OPT_SEL   = "border-[#c77f0f] text-[#c77f0f] font-bold dark:border-[#f5b942] dark:text-[#f5b942]";
const MENU_DONE = "bg-[#f5b942] text-[#241a04]";
let i = 0;
let typingTimer = null;
let optionTimer = null;
let isTyping = false;
const quizAnswers = {};  
const firstQuiz = nodes.findIndex(x => x.type === 'quiz');  
let startedAt = null;   
let tickTimer = null;
const el = id => document.getElementById(id);
const OPT_BASE = "w-full text-left border rounded-[10px] px-3 py-2.5 text-[13.5px] flex justify-between gap-2 border-black/20 dark:border-white/25 bg-transparent";
const OPT_GOOD = "border-[#12a15a] text-[#12a15a] dark:border-[#5fd383] dark:text-[#5fd383]";
const OPT_BAD  = "border-[#d5333c] text-[#d5333c] dark:border-[#e8636b] dark:text-[#e8636b]";
const MENU_BASE = "w-7 h-7 rounded-full text-[12px] font-bold flex items-center justify-center shadow";
const MENU_IDLE = "bg-white text-[#241a04]";
const MENU_GOOD = "bg-[#12a15a] text-white";
const MENU_BAD  = "bg-[#d5333c] text-white";
const MENU_NOW  = "ring-2 ring-[#c77f0f]";
const TIMER_BASE = "absolute left-1/2 -translate-x-1/2 h-7 px-3 rounded-full bg-white flex items-center text-[13px] font-bold tabular-nums";


function renderProgress(){
  const wrap = el('progress'); wrap.innerHTML='';
  nodes.forEach((_,idx)=>{
    const s=document.createElement('span'); s.className='h-[3px] flex-1 bg-black/10 dark:bg-white/15 rounded overflow-hidden';
    const b=document.createElement('i'); b.className='block h-full bg-[#c77f0f] dark:bg-[#f5b942] transition-all';
    b.style.width = idx<=i ? '100%':'0%'; s.appendChild(b); wrap.appendChild(s);
  });
}

function renderQuizMenu(){
  const wrap = el('quizMenu'); wrap.innerHTML='';
  let no = 0;
  nodes.forEach((n, idx)=>{
    if(n.type !== 'quiz') return;
    no++;
    const a = quizAnswers[idx];
    let st = MENU_IDLE;
    if(finished) st = (a && a.correct) ? MENU_GOOD : MENU_BAD;
    else if(a)   st = MENU_DONE;
    const b = document.createElement('button');
    b.textContent = no;
    b.setAttribute('aria-label', 'Soal ' + no);
    b.className = MENU_BASE + ' ' + st + (idx === i ? ' ' + MENU_NOW : '');
    b.onclick = ()=>{ i = idx; render(); };
    wrap.appendChild(b);
  });
}

const timeLeft = () => startedAt === null ? QUIZ_DURATION : Math.max(0, startedAt + QUIZ_DURATION - Date.now());
const isTimeUp = () => startedAt !== null && timeLeft() === 0;

function renderTimer(){
  const sec = Math.ceil(timeLeft() / 1000);
  const mm = String(Math.floor(sec / 60)).padStart(2,'0');
  const ss = String(sec % 60).padStart(2,'0');
  el('timer').textContent = mm + ':' + ss;
  el('timer').className = TIMER_BASE + (startedAt !== null && sec <= 60 ? ' text-[#d5333c]' : '');
}

function tick(){
  renderTimer();
  if(!isTimeUp()) return;
  clearInterval(tickTimer); tickTimer = null;
  if(nodes[i].type !== 'end') i = nodes.findIndex(x => x.type === 'end');   // waktu habis -> hasil
  render();
}

function startTimer(){   // dipanggil saat pertama kali masuk soal quiz
  if(startedAt === null){ startedAt = Date.now(); save(); }
  if(!tickTimer && !isTimeUp()) tickTimer = setInterval(tick, 1000);
  renderTimer();
}

function resetTimer(){
  clearInterval(tickTimer); tickTimer = null;
  startedAt = null;
  renderTimer();
}

function typeText(element, text, speed = 25, callback) {
    clearInterval(typingTimer);

    element.textContent = '';
    isTyping = true;

    let i = 0;

    typingTimer = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typingTimer);
            typingTimer = null;
            isTyping = false;

            if (callback) {
                callback();
            }
        }
    }, speed);
}

function showExplain(n, opt){

    clearInterval(typingTimer);
    clearTimeout(optionTimer);

    typingTimer = null;
    optionTimer = null;
    isTyping = false;

    el('options').innerHTML = '';

    el('name').textContent = n.name;
    el('text').textContent = opt.fb;

    el('nextBtn').style.display = 'inline-block';
    el('nextBtn').textContent = 'Coba lagi';

    el('nextBtn').onclick = () => {
        render();
    };
}

function setWarn(msg){
  let w = el('warn');
  if(!w){
    w = document.createElement('div');
    w.id = 'warn';
    w.className = 'text-[13px] text-[#d5333c] mt-2';
    el('options').after(w);
  }
  w.textContent = msg;
}

function trySubmit(){
  const missing = quizIdx.filter(idx => !quizAnswers[idx]);
  if(missing.length){
    setWarn('Belum bisa selesai. Soal yang belum dijawab: ' + missing.map(idx => quizIdx.indexOf(idx) + 1).join(', ') + '. Pilih nomornya di menu kanan atas.');
    return;
  }
  i = nodes.findIndex(x => x.type === 'end');
  render();
}

function restartQuiz(){
  i = 0; finished = false;
  for (const k in quizAnswers) delete quizAnswers[k];
  resetTimer();
  render();
}
el('restart').onclick = restartQuiz;  

function render(){
  const n = nodes[i];  
  if(n.type==='end'){ finished = true; clearInterval(tickTimer); tickTimer = null; }
  if(el('warn')) el('warn').textContent = '';
  save();
  renderProgress();
  el('options').innerHTML=''; el('nextBtn').style.display='inline-block';
  el('timer').style.display='none'; 
  el('avatar').style.display='';
  el('stage').style.backgroundImage = n.bg;

  if (n.board) {
      el('board').style.display = 'block';
      el('board').src = n.board;
      el('board').className = 'w-[60%] h-auto max-h-[80%] lg:w-[55%] lg:max-h-[90%] object-contain mx-auto';
  } else {
      el('board').style.display = 'none';
      el('board').removeAttribute('src');
  }
  if (n.avatar) {
      el('avatar').style.display = 'block';
      el('avatar').src = n.avatar;
      el('avatar').className = 'w-40 h-35 lg:w-60 lg:h-60 float-left object-contain drop-shadow-lg';
  } else {
      el('avatar').style.display = 'none';
      el('avatar').removeAttribute('src');
  }
  el('prevBtn').disabled = (i === 0) || (i === firstQuiz);  
  el('nextBtn').textContent = 'Lanjut';

  clearInterval(typingTimer);
  clearTimeout(optionTimer);

  typingTimer = null;
  optionTimer = null;
  isTyping = false;

  if(n.type==='dialog'){
    el('name').textContent = n.name; typeText(el('text'), n.text, 25);
    el('nextBtn').onclick = ()=>{ i++; render(); };
    el('prevBtn').onclick = ()=>{ i--; render(); };
  }

  if(n.type==='game'){
    el('name').textContent = n.name; el('text').textContent = n.text;
    el('nextBtn').style.display='none';
    el('prevBtn').onclick = ()=>{ i--; render(); };
    n.options.forEach(opt=>{
      const b=document.createElement('button'); b.className=OPT_BASE; b.textContent=opt.label;
      b.onclick=()=>{
        if(opt.correct){
          i++; render();            
        } else {
          showExplain(n, opt);     
        }
      };
      el('options').appendChild(b);
    });
  }

  
  if(n.type==='quiz'){
    renderQuizMenu();
    el('timer').style.display='';
    el('name').textContent = n.name; el('text').textContent = n.q;
    el('prevBtn').onclick = ()=>{ i--; render(); };
    if(!finished) startTimer(); else renderTimer();

    const done   = quizAnswers[i];
    const locked = finished || isTimeUp();
    n.options.forEach((opt, idx)=>{
      const b = document.createElement('button');
      b.textContent = opt.label;
      b.className = OPT_BASE;
      if(finished){
        if(opt.correct) b.className = OPT_BASE + ' ' + OPT_GOOD;
        else if(done && done.choice === idx) b.className = OPT_BASE + ' ' + OPT_BAD;
      } else if(done && done.choice === idx){
        b.className = OPT_BASE + ' ' + OPT_SEL;
      }
      if(locked) b.disabled = true;
      b.onclick = ()=>{
        quizAnswers[i] = { choice: idx, correct: opt.correct };
        render();
      };
      el('options').appendChild(b);
    });

    const isLast = i === quizIdx[quizIdx.length - 1];
    el('nextBtn').style.display = 'block';
    el('nextBtn').className = 'mb-3 bottom-0 ml-auto sticky  bg-[#c77f0f] dark:bg-[#f5b942] text-[#241a04] font-bold px-4 py-2 rounded-[10px] text-[13px]';
    el('nextBtn').textContent = (isLast && !finished) ? 'Selesai' : 'Lanjut';
    el('nextBtn').onclick = ()=>{
      if(isLast && !finished) return trySubmit();
      i++; render();
    };
  }
  if(n.type==='end'){
    const total    = quizIdx.length;
    const answered = quizIdx.filter(idx => quizAnswers[idx]).length;
    const benar    = quizIdx.filter(idx => quizAnswers[idx] && quizAnswers[idx].correct).length;
    const note     = answered < total ? '<b>Waktu habis!</b> ' : '';

    const review = quizIdx.map(idx => {
      const q = nodes[idx], a = quizAnswers[idx];
      const isRight = !!(a && a.correct);
      const kunci = q.options.find(o => o.correct);
      const jawab = a ? q.options[a.choice].label : 'Tidak dijawab';
      const border = isRight ? 'border-[#12a15a]/40' : 'border-[#d5333c]/40';

      return `<div class="mt-3 p-3 rounded-[10px] border ${border} text-[13px]">
        <div class="font-bold">${q.q}</div>
        <div class="mt-1 ${isRight ? 'text-[#12a15a]' : 'text-[#d5333c]'}">
          ${isRight ? '✓ Benar' : '✗ Salah'}. Jawabanmu: ${jawab}
        </div>
        ${isRight ? '' : `<div class="text-[#12a15a]">Jawaban benar: ${kunci.label}</div>`}
        ${q.explain ? `<div class="mt-1 relative -z-999 opacity-80">${q.explain}</div>` : ''}
      </div>`;
    }).join('');

    el('text').innerHTML = `<div class="w-full">${note}Kuis selesai! Skor kamu: <b>${benar}/${total}</b>.
    <div class="mt-2 font-bold">Pembahasan:</div>${review}
    <button id="again" class="sticky bottom-3 ml-auto mt-4 block bg-[#c77f0f] dark:bg-[#f5b942] text-[#241a04] font-bold px-4 py-2 rounded-[10px] text-[13px] shadow-lg">Main lagi ↺</button></div>`;
    el('again').onclick = restartQuiz;
    el('nextBtn').style.display = 'none';
    el('prevBtn').onclick = ()=>{ i--; render(); };
  }
}

try{
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if(saved){
    if(typeof saved.i === 'number' && saved.i < nodes.length) i = saved.i;
    Object.assign(quizAnswers, saved.quizAnswers || {});
    if(typeof saved.startedAt === 'number') startedAt = saved.startedAt;
    finished = !!saved.finished;
  }
}catch(e){}
if(startedAt !== null && !finished){
  if(isTimeUp()) i = nodes.findIndex(x => x.type === 'end');
  else tickTimer = setInterval(tick, 1000);
}
renderTimer();
render();