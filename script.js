// Script pour le menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
})
