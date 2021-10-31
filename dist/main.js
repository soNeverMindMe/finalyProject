(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds");(e=>{let t=e.cloneNode(!0);t.textContent=t.textContent,t.classList.add("timer-days"),document.querySelector(".timer-numbers").prepend(t)})(t),setInterval((e=>{let n=(e=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{day:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60),timeRemaining:t}})(e),o=document.querySelector(".timer-days");n.timeRemaining>0?(o.textContent=n.day+" :",t.textContent=n.hours,r.textContent=n.minutes,l.textContent=n.seconds,document.querySelectorAll(".number").forEach((e=>{e.textContent<10&&(e.textContent="0"+e.textContent)}))):n.timeRemaining<0&&(o.textContent="0 :",t.textContent="00",r.textContent="00",l.textContent="00")}),1e3,"1 december 2021")})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),r=t.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),n=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),c=o.querySelector(".popup-close"),u=o.querySelector(".popup-content"),i=document.querySelector('a[href="#service-block"]'),a=()=>{t.classList.toggle("active-menu")},s=e=>{let t=e.getAttribute("href");return t.slice(1,t.length)},d=(e,t,r)=>{r.preventDefault();let l=t(e);document.getElementById(l).scrollIntoView({behavior:"smooth"})},m=()=>{let e,t=0,r=0,l=0;const n=()=>{e=requestAnimationFrame(n),t+=.02,r+=14.4,l+=.02,u.style.transform=`scale(${t}, ${t}) rotate(${r}deg)`,u.style.opacity=`${l}`,t>1&&cancelAnimationFrame(e)};o.style.display="block",u.style.borderRadius="10px",document.documentElement.clientWidth>768&&(u.style.transform="scale(0.001, 0.001)",n())};e.addEventListener("click",a),r.addEventListener("click",a),l.forEach((e=>{e.addEventListener("click",(t=>{a(),d(e,s,t)}))})),i.addEventListener("click",(e=>{d(i,s,e)})),n.forEach((e=>{e.addEventListener("click",m)})),c.addEventListener("click",(()=>{o.style.display="none"}))})(),(()=>{const e=e=>{const t=(e,t,r)=>{for(let l=0;l<t.length;l++)r.test(t[l])&&e.push(t[l])};e.querySelector("input:first-child").addEventListener("blur",(()=>{let r=e.querySelector("input[placeholder='Ваше имя']").value.replace(/^\s+|^\-+|\s+$|\-+$/gm,"");r=r.replace(/\s+/g," "),r=r.replace(/\-+/g,"-");let l=[];t(l,r,/[а-я\-\s]/i);let n=0;for(void 0!==l[n]&&(l[n]=l[n].toUpperCase()),n+=1;n<l.length;n++)l[n]=l[n].toLowerCase();e.querySelector("input[placeholder='Ваше имя']").value=l.join("")})),e.querySelector("input[type='email']").addEventListener("blur",(()=>{let r=e.querySelector("input[type='email']").value.replace(/(^\s+|^\-+)|(\s+$|\-+$)/gm,"");r=r.replace(/\-+/g,"-");const l=[];t(l,r,/[a-z\@\-\_\.!\~\*]/i),e.querySelector("input[type='email']").value=l.join(""),/[a-z\-\_\.\~\*]+@[a-z]+\.[a-z]+/gi.test(e.querySelector("input[type='email']").value)||(e.querySelector("input[type='email']").value="",e.querySelector("input[type='email']").style.background="red",e.querySelector("input[type='email']").setAttribute("placeholder","Введите email в форме ex@ex.ex"))})),e.querySelector("input[type='email']").addEventListener("focus",(()=>{e.querySelector("input[type='email']").style.background="white",e.querySelector("input[type='email']").setAttribute("placeholder","E-mail")})),e.querySelector("input[type='tel']").addEventListener("blur",(()=>{let r=e.querySelector("input[type='tel']").value.replace(/(^\s+|^\-+)|(\s+$|\-+$)/gm,"");r=r.replace(/\-+/g,"-");const l=[];t(l,r,/[\d\(\)\-]/i),e.querySelector("input[type='tel']").value=l.join("")}))};document.querySelectorAll(".calc-block>input").forEach((e=>{e.setAttribute("type","number"),e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")}))})),e(document.querySelector(".main-form")),e(document.querySelector(".footer-form")),e(document.querySelector(".popup"))})()})();