"use strict";window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".menu"),t=document.querySelectorAll(".menu_item"),c=document.querySelector(".hamburger");c.addEventListener("click",(function(){c.classList.toggle("hamburger_active"),e.classList.toggle("menu_active")})),t.forEach((function(t){t.addEventListener("click",(function(){c.classList.toggle("hamburger_active"),e.classList.toggle("menu_active")}))}))}));