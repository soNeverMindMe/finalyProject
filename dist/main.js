(()=>{"use strict";(t=>{const e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");(t=>{let e=t.cloneNode(!0);e.textContent=e.textContent,e.classList.add("timer-days"),document.querySelector(".timer-numbers").prepend(e)})(e),setInterval((t=>{let m=(t=>{let e=(new Date(t).getTime()-(new Date).getTime())/1e3;return{day:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60),timeRemaining:e}})(t),r=document.querySelector(".timer-days");m.timeRemaining>0?(r.textContent=m.day+" :",e.textContent=m.hours,n.textContent=m.minutes,o.textContent=m.seconds,document.querySelectorAll(".number").forEach((t=>{t.textContent<10&&(t.textContent="0"+t.textContent)}))):m.timeRemaining<0&&(r.textContent="0 :",e.textContent="00",n.textContent="00",o.textContent="00")}),1e3,"30 october 2021")})(),console.log("Я второй модуль")})();