const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Script pour le menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});
