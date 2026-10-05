const nodes = [
  {type:'dialog', badge:'MISI 1',board:'', name:'Narator', text:'(Hari ini adalah hari pertamamu masuk kek kelas AKL sebagai siswa pindahan)'},
  {type:'dialog', badge:'MISI 1',board:'', name:'Narator', text:'(Materi Praktik Akuntansi Lembaga Pemerintah hari ini terasa sulit bagimu untuk dipahami, tetapi kamu takut untuk bertanya dengan guru)'},
  {type:'dialog', badge:'MISI 1',board:'', name:'Narator', text:'. . . . .'},
  {type:'dialog', badge:'MISI 1',board:'', name:'Narator', text:'(Kamu melihat teman didepan mejamu saat ini sedang mencatat sesuatu. Sepertinya dia bisa sedikit membantu)'},
  {type:'dialog', badge:'MISI 1',board:'', name:'Narator', text:'(Tidak ada salahnya mencoba bukan?)'},
  {type:'dialog', badge:'MISI 1',board:'', avatar:'/assets/male.png', name:'???', text:'Hmmm?'},
  {type:'dialog', badge:'MISI 1',board:'', avatar:'/assets/male.png', name:'???', text:'Oh hai ada yang bisa kubantu?'},
  {type:'dialog', badge:'MISI 1',board:'', avatar:'/assets/male.png', name:'Raka', text:'Oh ya sebelumnya namaku Raka, kamu pasti murid pindahan baru kan?'},
  {type:'dialog', badge:'MISI 1',board:'', avatar:'/assets/male.png', name:'Raka', text:'Biar kutebak kamu pasti mau bertanya tentang materi tadi? Yah tidak masalah'},
  {type:'dialog', badge:'MISI 1',board:'', avatar:'/assets/male.png', name:'Raka', text:'Materi ini sebenarnya mudah dipahami jadi aku coba membantumu memahami materinya'},
  {type:'dialog', badge:'MISI 1',board:'', avatar:'/assets/male.png', name:'Raka', text:'Nah jadi ayo kita masuk ke konsep awalnya terlebih dahulu!'},
  {type:'game', badge:'RINTANGAN 1', avatar:'/assets/male.png', name:'Raka',
    text:'Aku mau tanya nih, tahukah kamu pencatatan yang digunakan oleh jurnal menggunakan sistem apa?',
    options:[
      {label:'Double entry', correct:true},
      {label:'Single Entry', correct:false, fb:'Hmm sepertinya jawabanmu masih kurang tepat, tapi tidak apa apa mari kita coba lagi.'},
      {label:'Triple Entry', correct:false, fb:'Hmm sepertinya jawabanmu masih kurang tepat, tapi tidak apa apa mari kita coba lagi.'},
      {label:'Level Entry', correct:false, fb:'Hmm sepertinya jawabanmu masih kurang tepat, tapi tidak apa apa mari kita coba lagi.'}
    ]},
  {type:'dialog', badge:'MISI 1',board:'', avatar:'/assets/male.png', name:'Raka', text:'Ya benar sekali, pencatatan jurnal menggunakan sistem double entry dimana terdapat debit disisi kiri dan kredit disisi kanannya'},
  {type:'dialog', badge:'MISI 1',board:'', avatar:'/assets/male.png', name:'Raka', text:'Sistem double entry ini nantinya sangat diperlukan dalam mencatat perubahan nominal akun yang akan kita bahas setelah ini'},
  {type:'dialog', badge:'MISI 1',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Nah, mari kita lihat tabel ini'},
  {type:'dialog', badge:'MISI 1',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Aku yakin kamu pasti bingung ini buat apasih?'},
  {type:'dialog', badge:'MISI 1',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Hehe santai saja biar aku jelasin'},
  {type:'dialog', badge:'MISI 1',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Pertama - tama jangan hafalkan semuanya karena sudah jelas itu bukan solusi yang tepat'},
  {type:'dialog', badge:'MISI 1',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Kita perlu tau kenapa mereka diletakkan di Debit atau Kredit'},
  {type:'dialog', badge:'MISI 1',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Aset memiliki saldo normal Debit, '},
  {type:'game', badge:'RINTANGAN 2',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka',
    text:'Browser blokir CSS-nya karena dianggap tidak aman (http di halaman https). Apa penyebabnya?',
    options:[
      {label:'File CSS-nya hilang', correct:false, fb:'Bukan — filenya ada, cuma alamatnya salah protokol.'},
      {label:'Laravel belum percaya proxy Railway', correct:true, fb:'Benar! Set $proxies = \'*\' di TrustProxies biar Laravel tahu koneksi aslinya https.'},
      {label:'Tailwind belum ke-install', correct:false, fb:'Sudah ter-install, masalahnya bukan di situ.'}
    ]},
  {type:'dialog', badge:'MISI 1',board:'/assets/male.png', avatar:'/assets/male.png', name:'Raka', text:'Sip, tampilan udah cantik! Tapi tunggu... kenapa aplikasinya crash pas start ya?'},
  {type:'dialog', badge:'RINTANGAN 3',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Ternyata "Start Command" salah diisi `npm run dev` — itu cuma buat development, bukan buat jalanin server sungguhan.'},
  {type:'dialog', badge:'RINTANGAN 3',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Ganti jadi `php artisan serve --host 0.0.0.0 --port $PORT`. Sekarang LogKyv resmi online. Misi selesai!'}
  // {type:'maze', badge:'MISI BONUS',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Rakat Data',
  //   text:'Sinyal sempat putus pas server restart! Bantu paket data ini cari jalur ke tujuan 🏁 pakai tombol panah.'}
  ,{type:'dialog', badge:'MISI BONUS',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Sinyal kembali normal, paketnya sampai tujuan. Sekarang saatnya uji pemahamanmu!'},
  {type:'quiz', badge:'UJI PEMAHAMAN',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', q:'1) Kenapa error "No version available for php 8.1" muncul di Railway?',
    options:[
      {label:'Karena Railpack cuma dukung PHP 8.2+', correct:true},
      {label:'Karena internet lagi lambat', correct:false},
      {label:'Karena database belum ada', correct:false}
    ]},
  {type:'quiz', badge:'UJI PEMAHAMAN',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', q:'2) Apa fungsi "Start Command" dibanding "Build Command"?',
    options:[
      {label:'Sama saja, boleh ditukar', correct:false},
      {label:'Start Command menjalankan server terus-menerus, Build Command cuma jalan sekali saat build', correct:true},
      {label:'Start Command cuma untuk database', correct:false}
    ]},
  {type:'end'}
];

const STORAGE_KEY = 'logkyv-novel-state';
function save(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify({ i, quizAnswers })); }
  catch(e){ /* storage penuh/diblokir browser, aman diabaikan */ }
}
let i = 0;
let typingTimer = null;
let optionTimer = null;
let isTyping = false;
const quizAnswers = {};
const el = id => document.getElementById(id);
const OPT_BASE = "w-full text-left border rounded-[10px] px-3 py-2.5 text-[13.5px] flex justify-between gap-2 border-black/20 dark:border-white/25 bg-transparent";
const OPT_GOOD = "border-[#12a15a] text-[#12a15a] dark:border-[#5fd383] dark:text-[#5fd383]";
const OPT_BAD  = "border-[#d5333c] text-[#d5333c] dark:border-[#e8636b] dark:text-[#e8636b]";


function renderProgress(){
  const wrap = el('progress'); wrap.innerHTML='';
  nodes.forEach((_,idx)=>{
    const s=document.createElement('span'); s.className='h-[3px] flex-1 bg-black/10 dark:bg-white/15 rounded overflow-hidden';
    const b=document.createElement('i'); b.className='block h-full bg-[#c77f0f] dark:bg-[#f5b942] transition-all';
    b.style.width = idx<=i ? '100%':'0%'; s.appendChild(b); wrap.appendChild(s);
  });
}

function typeText(element, text, speed = 25, callback) {
    // Hentikan ketikan sebelumnya
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
  el('options').innerHTML = '';
  el('feedback').textContent = '';
  el('name').textContent = n.name;
  el('text').textContent = opt.fb;              
  el('nextBtn').style.display = 'inline-block';
  el('nextBtn').textContent = 'Coba lagi';
  el('nextBtn').onclick = () => render();      
}

el('restart').onclick = () => {
  i = 0;
  for (const k in quizAnswers) delete quizAnswers[k];
  document.onkeydown = null;   
  render();                    
};

function render(){
  const n = nodes[i];
  save();
  renderProgress();
  el('feedback').textContent=''; el('feedback').className='text-[13px] mt-2 min-h-[18px]';
  el('options').innerHTML=''; el('nextBtn').style.display='inline-block';
  el('avatar').style.display='';
  el('stage').style.backgroundImage = n.bg;
  // el('badge').textContent = n.badge || '';
  // el('avatar').src = n.avatar || '/assets/male.png';
  if (n.board) {
      el('board').style.display = 'block';
      el('board').src = n.board;
      el('board').className = 'w-[90%] h-auto max-h-[80%] lg:w-[55%] lg:max-h-[90%] object-contain mx-auto';
  } else {
      el('board').style.display = 'none';
      el('board').removeAttribute('src');
  }
  if (n.avatar) {
      el('avatar').style.display = 'block';
      el('avatar').src = n.avatar;
      el('avatar').className = 'w-40 h-40 float-left object-contain drop-shadow-lg';
  } else {
      el('avatar').style.display = 'none';
      el('avatar').removeAttribute('src');
  }
  el('prevBtn').disabled = (i === 0);
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
    el('name').textContent = n.name; typeText(el('text'), n.text, 25);
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

  // if(n.type==='maze'){
  //   el('name').textContent = n.name; el('text').textContent = n.text;
  //   el('nextBtn').style.display='none';
  //   const grid = [".......","#####.#",".......",".#####.",".#.....",".#.###.","......."];
  //   let px=0, py=0; const gx=6, gy=6;
  //   el('avatar').style.display='none';
  //   const maze = document.createElement('div'); maze.className='grid grid-cols-7 gap-[3px] w-full max-w-[266px] mx-auto';
  //   el('stage').appendChild(maze);
  //   const pad = document.createElement('div'); pad.className='grid gap-1 justify-center mt-2.5'; pad.style.gridTemplateColumns='repeat(3,44px)'; pad.style.gridTemplateRows='repeat(3,40px)';
  //   el('options').appendChild(pad);

  //   function drawMaze(){
  //     maze.innerHTML='';
  //     for(let y=0;y<7;y++) for(let x=0;x<7;x++){
  //       const c=document.createElement('div');
  //       const wall = grid[y][x]==='#';
  //       c.className = 'aspect-square rounded flex items-center justify-center text-[15px] ' +
  //         (wall?'bg-black/25 dark:bg-white/20':(x===gx&&y===gy?'bg-[#12a15a]/20 dark:bg-[#5fd383]/20':'bg-black/5 dark:bg-white/5'));
  //       if(x===px&&y===py) c.textContent='📦';
  //       else if(x===gx&&y===gy) c.textContent='🏁';
  //       maze.appendChild(c);
  //     }
  //   }
  //   function move(dx,dy){
  //     const nx=px+dx, ny=py+dy;
  //     if(nx<0||ny<0||nx>6||ny>6) return;
  //     if(grid[ny][nx]==='#') return;
  //     px=nx; py=ny; drawMaze();
  //     if(px===gx&&py===gy){
  //       el('feedback').textContent='Sampai tujuan!'; el('feedback').className='text-[13px] mt-2 min-h-[18px] text-[#12a15a] dark:text-[#5fd383]';
  //       el('nextBtn').style.display='inline-block';
  //       el('nextBtn').onclick=()=>{ document.onkeydown=null; i++; render(); };
  //     }
  //   }
  //   const btn=(label,dx,dy,area)=>{ const b=document.createElement('button'); b.textContent=label;
  //     b.className='bg-white dark:bg-[#141d33] border border-black/20 dark:border-white/25 rounded-lg flex items-center justify-center text-[15px] active:bg-[#f5b942] active:text-[#241a04]';
  //     b.style.gridArea=area; b.onclick=()=>move(dx,dy); return b; };
  //   pad.appendChild(btn('↑',0,-1,'1/2/2/3'));
  //   pad.appendChild(btn('←',-1,0,'2/1/3/2'));
  //   pad.appendChild(btn('↓',0,1,'2/2/3/3'));
  //   pad.appendChild(btn('→',1,0,'2/3/3/4'));
  //   drawMaze();
  //   document.onkeydown=(e)=>{
  //     if(nodes[i]!==n){ document.onkeydown=null; return; }
  //     if(e.key==='ArrowUp') move(0,-1);
  //     if(e.key==='ArrowDown') move(0,1);
  //     if(e.key==='ArrowLeft') move(-1,0);
  //     if(e.key==='ArrowRight') move(1,0);
  //   };
  // }
  
  if(n.type==='quiz'){
    el('name').textContent = n.name; el('text').textContent = n.q;
    el('nextBtn').style.display='none';
    n.options.forEach(opt=>{
      const b=document.createElement('button'); b.className=OPT_BASE; b.textContent=opt.label;
      b.onclick=()=>{
        document.querySelectorAll('#options button').forEach(x=>x.disabled=true);
        b.className = OPT_BASE + ' ' + (opt.correct?OPT_GOOD:OPT_BAD);
        quizAnswers[i] = opt.correct;;
        el('feedback').textContent = opt.correct ? 'Benar!' : 'Kurang tepat.';
        el('feedback').className = 'text-[13px] mt-2 min-h-[18px] ' + (opt.correct?'text-[#12a15a] dark:text-[#5fd383]':'text-[#d5333c] dark:text-[#e8636b]');
        el('nextBtn').style.display='inline-block';
        el('nextBtn').onclick=()=>{ i++; render(); };
      };
      el('options').appendChild(b);
    });
  }
  if(n.type==='end'){
    el('name').textContent='Selesai';
    const total = nodes.filter(x => x.type === 'quiz').length;
    const score = Object.values(quizAnswers).filter(Boolean).length;
    el('text').innerHTML = `LogKyv berhasil online! Skor kuis kamu: <b>${score}/${total}</b>.`;
    el('nextBtn').textContent = 'Main lagi ↺';
    el('nextBtn').onclick = () => { i = 0; for (const k in quizAnswers) delete quizAnswers[k]; render(); };
  }
}

try{
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if(saved && typeof saved.i === 'number' && saved.i < nodes.length){
    i = saved.i;
    Object.assign(quizAnswers, saved.quizAnswers || {});
  }
}catch(e){}
render();