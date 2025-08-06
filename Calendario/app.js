const days=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
const c=document.getElementById('calendar'), wd=document.getElementById('weekDisplay');
const monthBtn=document.getElementById('monthBtn'), yearBtn=document.getElementById('yearBtn');
const monthPop=document.getElementById('monthPopover'), yearPop=document.getElementById('yearPopover');
const taskMenu=document.getElementById('taskMenu'), catGlobal=document.getElementById('categoryGlobal');
const multiForm=document.getElementById('multiForm'), multiTitle=document.getElementById('multiTitle'), multiDays=document.getElementById('multiDays'), multiConfirm=document.getElementById('multiConfirm');
let cm=7, cy=2025, cw=`${cy}_${cm}_1`, sel=null;

function getWeekKey(y,m,d){
  const dt=new Date(y,m-1,d), w=Math.ceil((dt.getDate()+ (dt.getDay()?dt.getDay()-1:6))/7);
  return `${y}_${m}_${w}`;
}
function updateWeek(){const [y,m,w]=cw.split('_'); wd.textContent=`📆 Semana ${w} de ${['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'][m-1]} ${y}`;}
function genCols(){c.innerHTML='';days.forEach(d=>{const col=document.createElement('div');col.className='day-column';col.innerHTML=`<div class="day-header">${d}</div><div class="task-list" id="${d}"></div><button class="add-task-btn" data-day="${d}">+ Crear</button>`;c.appendChild(col);new Sortable(document.getElementById(d),{group:'all',animation:150,ghostClass:'dragging',onEnd:()=>sel=null});});updateWeek();}
function makeTask(cat,txt='Nueva tarea'){
  const t=document.createElement('div');t.className=`task ${cat}`;t.textContent=txt;
  t.ondblclick=()=>{t.contentEditable=true;t.focus();}
  t.onblur=()=>t.contentEditable=false;
  const btn = document.createElement('button');
btn.className = 'task-menu-btn';
btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`;

  btn.onclick=e=>{e.stopPropagation();toggle(taskMenu,btn);taskMenu.task=t;};
  t.appendChild(btn);
  t.onclick=e=>{if(e.target!==btn){if(sel)sel.classList.remove('selected');sel=t; t.classList.add('selected');}};
  return t;
}
function genMini(){
  const mc=document.getElementById('mini-calendar');mc.innerHTML='';['L','M','Mi','J','V','S','D'].forEach(h=>{const hh=document.createElement('div');hh.className='day-header';hh.textContent=h;mc.appendChild(hh);});
  const di=new Date(cy,cm,0).getDate(), sd=new Date(cy,cm-1,1).getDay(), bl=sd?sd-1:6;
  for(let i=0;i<bl;i++)mc.appendChild(document.createElement('div'));
  for(let d=1;d<=di;d++){
    const dc=document.createElement('div');dc.className='day-cell';dc.textContent=d;
    const wk=getWeekKey(cy,cm,d);
    if(wk===cw)dc.classList.add('active');
    dc.onclick=()=>{cw=getWeekKey(cy,cm,d);loadWeek();genMini();};
    mc.appendChild(dc);
  }
}
function loadWeek(){genCols();}
function toggle(p,b){if(!p.classList.contains('hidden'))return p.classList.add('hidden');document.querySelectorAll('.popover').forEach(x=>x.classList.add('hidden'));const r=b.getBoundingClientRect();p.style.top=window.scrollY+r.bottom+4+'px';p.style.left=window.scrollX+r.left+'px';p.classList.remove('hidden');}
monthBtn.onclick=e=>toggle(monthPop,monthBtn);yearBtn.onclick=e=>toggle(yearPop,yearBtn);
document.querySelectorAll('#monthPopover button').forEach(b=>b.onclick=e=>{cm=parseInt(b.dataset.month);monthBtn.textContent=b.textContent;genMini();loadWeek();monthPop.classList.add('hidden');});
document.getElementById('confirmYearBtn').onclick=()=>{cy=parseInt(document.getElementById('yearInput').value);yearBtn.textContent=cy;genMini();loadWeek();yearPop.classList.add('hidden');};
document.addEventListener('click',e=>{if(!monthPop.contains(e.target)&&e.target!==monthBtn)monthPop.classList.add('hidden');if(!yearPop.contains(e.target)&&e.target!==yearBtn)yearPop.classList.add('hidden');if(!taskMenu.contains(e.target)&&!e.target.classList.contains('task-menu-btn'))taskMenu.classList.add('hidden');if(!multiForm.contains(e.target)&&e.target!==document.getElementById('createMultipleBtn'))multiForm.classList.add('hidden');});
document.getElementById('duplicateTaskOption').onclick=()=>{const t=taskMenu.task;if(t){const cat=[...t.classList].find(x=>x!=='task');document.getElementById(t.parentElement.id).appendChild(makeTask(cat,t.textContent));}taskMenu.classList.add('hidden');};
document.getElementById('deleteTaskOption').onclick=()=>{const t=taskMenu.task;if(t)t.remove();taskMenu.classList.add('hidden');};
c.addEventListener('click',e=>{if(e.target.classList.contains('add-task-btn')){const cat=catGlobal.value;document.getElementById(e.target.dataset.day).appendChild(makeTask(cat));}});
document.getElementById('createMultipleBtn').onclick=e=>{genForm();toggle(multiForm,e.target);};
function genForm(){multiTitle.value='';multiDays.innerHTML='';days.forEach((d,i)=>{const cb=document.createElement('div');cb.className='day-checkbox';cb.textContent=d.slice(0,2);cb.dataset.day=d;cb.onclick=()=>cb.classList.toggle('active');multiDays.appendChild(cb);});}
multiConfirm.onclick=()=>{const title=multiTitle.value||'Nueva tarea';const cat=catGlobal.value;multiDays.querySelectorAll('.active').forEach(cb=>{document.getElementById(cb.dataset.day).appendChild(makeTask(cat,title));});multiForm.classList.add('hidden');};
document.getElementById('exportPdfBtn').onclick=()=>{
  const doc=new jsPDF();doc.setFontSize(12);doc.text(`Semana ${cw}`,10,10);let y=20;
  days.forEach(d=>{doc.setFont(undefined,'bold');doc.text(d,10,y);y+=6;doc.setFont(undefined,'normal');
    document.getElementById(d).querySelectorAll('.task').forEach(t=>{doc.text(`- ${t.textContent}`,12,y);y+=6;});y+=4;});
  doc.save(`Semana_${cw}.pdf`);
};
document.getElementById('toggleDarkMode').onclick=()=>document.body.classList.toggle('dark-mode');

genCols();genMini();loadWeek();
