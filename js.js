"use strict";

let closeBtn = document.querySelector('.closebtn').addEventListener('click', closeNav);
let openBtn = document.querySelector('.open-menu').addEventListener('click', openNav);


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



AOS.init();









