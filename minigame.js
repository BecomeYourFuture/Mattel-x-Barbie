document.addEventListener('DOMContentLoaded', function () {
  const text = "Oops, you did it again! Falling for the same trick twice? Classic move.";
  let index = 0;
  const speed = 50; // Vitesse d'écriture en millisecondes

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typed-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    } else {
      // Afficher le bouton magique après la fin du premier texte
      const magicButton = document.getElementById("magic-button");
      magicButton.classList.remove("hidden");
      magicButton.classList.add("fade-in");
    }
  }

  typeWriter();

  document.getElementById('magic-button').addEventListener('click', function () {
    // Mettre à jour le texte affiché
	this.disabled = true;
    const newText = "Really........ No we have better !!!";
    typeWriterNewText(newText, 'typed-text');
    setTimeout(() => {
      // Changer le texte du bouton après le premier clic
      this.innerHTML = "✨ Surprise ✨";
      this.disabled = false; // Réactiver le bouton pour permettre un second clic
    }, 4200);
  });

  // Fonction pour afficher le second texte avec un effet de machine à écrire
  function typeWriterNewText(text, elementId, speed = 100) {
    let index = 0;
    const element = document.getElementById(elementId);
    element.textContent = ''; // Effacer le contenu existant

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        // Une fois le texte affiché, réactiver le bouton
        const magicButton = document.getElementById("magic-button");
        magicButton.disabled = false;
      }
    }

    type();
  }

  // Fonction pour lancer la vidéo en plein écran
  function playVideoInFullscreen() {
    const video = document.getElementById('fullscreen-video');
    video.style.display = 'block'; // Afficher la vidéo
    video.play(); // Démarrer la lecture de la vidéo

    // Passer la vidéo en mode plein écran
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
      video.msRequestFullscreen();
    }
  }

  // Ajouter un écouteur d'événement pour le second clic sur le bouton
  document.getElementById('magic-button').addEventListener('click', function () {
    // Vérifier si le texte du bouton est "✨ Surprise ✨"
    if (this.innerHTML === "✨ Surprise ✨") {
      playVideoInFullscreen();
    }
  });
});

// Écouter les changements de mode plein écran
  document.addEventListener('fullscreenchange', function () {
    const video = document.getElementById('fullscreen-video');
    if (!document.fullscreenElement) {
      // Si le mode plein écran est quitté, masquer la vidéo
      video.style.display = 'none';
      video.pause(); // Mettre la vidéo en pause
      video.currentTime = 0; // Réinitialiser la vidéo au début
    }
  });