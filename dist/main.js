(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");(e=>{let t=e.cloneNode(!0);t.textContent=t.textContent,t.classList.add("timer-days"),document.querySelector(".timer-numbers").prepend(t)})(t),setInterval((e=>{let o=(e=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{day:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60),timeRemaining:t}})(e),l=document.querySelector(".timer-days");o.timeRemaining>0?(l.textContent=o.day+" :",t.textContent=o.hours,n.textContent=o.minutes,r.textContent=o.seconds,document.querySelectorAll(".number").forEach((e=>{e.textContent<10&&(e.textContent="0"+e.textContent)}))):o.timeRemaining<0&&(l.textContent="0 :",t.textContent="00",n.textContent="00",r.textContent="00")}),1e3,"30 october 2021")})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),o=document.querySelectorAll(".popup-btn"),l=document.querySelector(".popup"),c=l.querySelector(".popup-close"),u=l.querySelector(".popup-content"),i=document.querySelector('a[href="#service-block"]'),a=()=>{t.classList.toggle("active-menu")},s=e=>{let t=e.getAttribute("href");return t.slice(1,t.length)},d=(e,t,n)=>{n.preventDefault();let r=t(e);document.getElementById(r).scrollIntoView({behavior:"smooth"})},m=()=>{let e,t=0,n=0,r=0;const o=()=>{e=requestAnimationFrame(o),t+=.02,n+=14.4,r+=.02,u.style.transform=`scale(${t}, ${t}) rotate(${n}deg)`,u.style.opacity=`${r}`,t>1&&cancelAnimationFrame(e)};l.style.display="block",u.style.borderRadius="10px",document.documentElement.clientWidth>768&&(u.style.transform="scale(0.001, 0.001)",o())};e.addEventListener("click",a),n.addEventListener("click",a),r.forEach((e=>{e.addEventListener("click",(t=>{a(),d(e,s,t)}))})),i.addEventListener("click",(e=>{d(i,s,e)})),o.forEach((e=>{e.addEventListener("click",m)})),c.addEventListener("click",(()=>{l.style.display="none"}))})(),(()=>{const e=e=>{const t=(e,t,n)=>{for(let r=0;r<t.length;r++)n.test(t[r])&&e.push(t[r])};e.querySelector("input:first-child").addEventListener("blur",(()=>{let n=e.querySelector("input[placeholder='Ваше имя']").value.replace(/^\s+|^\-+|\s+$|\-+$/gm,"");n=n.replace(/\s+/g," "),n=n.replace(/\-+/g,"-");let r=[];t(r,n,/[а-я\-\s]/i),r[0]=r[0].toUpperCase();for(let e=1;e<r.length;e++)r[e]=r[e].toLowerCase();e.querySelector("input[placeholder='Ваше имя']").value=r.join("")})),e.querySelector("input[type='email']").addEventListener("blur",(()=>{let n=e.querySelector("input[type='email']").value.replace(/(^\s+|^\-+)|(\s+$|\-+$)/gm,"");n=n.replace(/\-+/g,"-");const r=[];t(r,n,/[a-z\@\-\_\.!\~\*]/i),e.querySelector("input[type='email']").value=r.join("")})),e.querySelector("input[type='tel']").addEventListener("blur",(()=>{let n=e.querySelector("input[type='tel']").value.replace(/(^\s+|^\-+)|(\s+$|\-+$)/gm,"");n=n.replace(/\-+/g,"-");const r=[];t(r,n,/[\d\(\)\-]/i),e.querySelector("input[type='tel']").value=r.join("")}))};document.querySelectorAll(".calc-block>input").forEach((e=>{e.setAttribute("type","number"),e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")}))})),e(document.querySelector(".main-form")),e(document.querySelector(".footer-form")),e(document.querySelector(".popup"))})()})();