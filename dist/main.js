(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");(e=>{let t=e.cloneNode(!0);t.textContent=t.textContent,t.classList.add("timer-days"),document.querySelector(".timer-numbers").prepend(t)})(t),setInterval((e=>{let r=(e=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{day:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60),timeRemaining:t}})(e),c=document.querySelector(".timer-days");r.timeRemaining>0?(c.textContent=r.day+" :",t.textContent=r.hours,n.textContent=r.minutes,o.textContent=r.seconds,document.querySelectorAll(".number").forEach((e=>{e.textContent<10&&(e.textContent="0"+e.textContent)}))):r.timeRemaining<0&&(c.textContent="0 :",t.textContent="00",n.textContent="00",o.textContent="00")}),1e3,"30 october 2021")})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),r=document.querySelectorAll(".popup-btn"),c=document.querySelector(".popup"),l=c.querySelector(".popup-close"),s=c.querySelector(".popup-content"),i=()=>{t.classList.toggle("active-menu")},d=()=>{let e,t=0,n=0,o=0;const r=()=>{e=requestAnimationFrame(r),t+=.02,n+=14.4,o+=.02,s.style.transform=`scale(${t}, ${t}) rotate(${n}deg)`,s.style.opacity=`${o}`,t>1&&cancelAnimationFrame(e)};s.style.transform="scale(0.001, 0.001)",c.style.display="block",s.style.borderRadius="10px",r()};e.addEventListener("click",i),n.addEventListener("click",i),o.forEach((e=>{e.addEventListener("click",i)})),r.forEach((e=>{document.documentElement.clientWidth<=768?e.addEventListener("click",(()=>c.style.display="block")):e.addEventListener("click",d)})),l.addEventListener("click",(()=>{c.style.display="none"}))})()})();