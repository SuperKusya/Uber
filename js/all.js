window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".menu"),t=document.querySelectorAll(".menu_item"),c=document.querySelector(".hamburger");c.addEventListener("click",()=>{c.classList.toggle("hamburger_active"),e.classList.toggle("menu_active")}),t.forEach(t=>{t.addEventListener("click",()=>{c.classList.toggle("hamburger_active"),e.classList.toggle("menu_active")})})});