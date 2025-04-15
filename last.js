const text = "Never 2 without 3 ! But this time we don't have anything better...";
let index = 0;
const speed = 50; // Vitesse de frappe en millisecondes

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    // Afficher le bouton magique après la fin du texte
    const magicButton = document.getElementById("magic-button");
    magicButton.classList.remove("hidden");
    magicButton.classList.add("fade-in");
  }
}
document.getElementById('magic-button').addEventListener('click', function () {
  const video = document.getElementById('fullscreen-video');
  video.style.display = 'block'; // Affiche la vidéo
  video.play(); // Lance la lecture

  // Demande le mode plein écran
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE11 */
    video.msRequestFullscreen();
  }
});

// Écoute l'événement de changement de mode plein écran
document.addEventListener('fullscreenchange', function () {
  const video = document.getElementById('fullscreen-video');
  if (!document.fullscreenElement) {
    // Si le mode plein écran est désactivé, masque la vidéo
    video.style.display = 'none';
    video.pause(); // Met la lecture en pause
    video.currentTime = 0; // Réinitialise la lecture au début
  }
});



window.onload = typeWriter;
