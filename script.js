async function loadData(){
  try{
    const res = await fetch('data/profile.json?_=' + Date.now());
    const data = await res.json();
    const y = document.getElementById('year'); if(y){ y.textContent = new Date().getFullYear(); }
    const skillsEl = document.getElementById('skills-list'); skillsEl.innerHTML = '';
    data.skills.forEach(s => { const span = document.createElement('span'); span.className='chip'; span.textContent=s; skillsEl.appendChild(span); });
    const grid = document.getElementById('projects-grid'); grid.innerHTML='';
    data.projects.forEach(p => {
      const el=document.createElement('article'); el.className='card-project';
      el.innerHTML=`<h3>${p.title}</h3><p>${p.description}</p>
        <div class="badges">${p.stack.map(t=>`<span class='badge'>${t}</span>`).join('')}</div>
        <div class="links">
          ${p.demo?`<a class='btn' href='${p.demo}' target='_blank' rel='noopener'>Demo</a>`:''}
          ${p.repo?`<a class='btn' href='${p.repo}' target='_blank' rel='noopener'>Código</a>`:''}
        </div>`;
      grid.appendChild(el);
    });
    const tl=document.getElementById('timeline'); tl.innerHTML='';
    data.experience.forEach(e=>{
      const it=document.createElement('div'); it.className='item';
      it.innerHTML=`<div class="meta"><strong>${e.role} · ${e.company}</strong><span>${e.period}</span></div><p>${e.summary}</p>`;
      tl.appendChild(it);
    });
  }catch(err){ console.error(err); }
}
document.addEventListener('DOMContentLoaded', loadData);