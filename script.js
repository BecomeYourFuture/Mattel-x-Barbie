// Script pour le menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
})

function isMobileDevice() {
  return window.innerWidth <= 768; // seuil à ajuster selon vos besoins
}

if (!isMobileDevice()) {
  // L'utilisateur est sur un ordinateur
  document.querySelector('.rotate-message').style.display = 'none';
  document.querySelector('.main-content').style.display = 'block';
}
