window.onload = () => {
  // On récupère toutes les étoiles
  const stars = document.querySelectorAll(".fa-star");
  // On récupère l'input
  const note = document.getElementById("note");
  // On récupère le bouton reset
  const resetBtn = document.getElementById("resetButton");
  // On récupère les message d'erreur
  const starsMessageError = document.getElementById("starsMessageError");
  const mailMessageError = document.getElementById("mailMessageError");

  // On écoute le click sur le bouton reset
  resetBtn.addEventListener("click", function () {
    // Cette ligne réinitialise les inputs de mon form
    document.getElementById("ratingForm").reset();
  });

  // Je veux réinitialiser mes étoiles avec le bouton reset
  function resetStar() {
    // Je séléctionne les étoiles
    const filledStars = document.querySelectorAll(".fa-star");
    // Et les remplace par les vides ".fa-regular"
    // Il faut boucler sur chacune des étoiles pleine pr changer sa classe
    filledStars.forEach(function (star) {
      star.classList.remove("fa-solid");
      star.classList.add("fa-regular");
    });
    note.value = "";
    starsMessageError.textContent = "";
    note.value = "0";
    mailMessageError.textContent = "";
  }
  // On écoute le click sur le bouton reset et on appelle la fonction resetStar
  resetBtn.addEventListener("click", resetStar);

  // On boucle sur les étoiles pour leur ajouter des écouteurs d'évènements
  for (star of stars) {
    // On écoute le survol
    star.addEventListener("mouseover", function () {
      resetStars();
      this.classList.add("fa-solid");
      this.classList.remove("fa-regular");
      // L'élément précédent ds le DOM (de mm niveau, balise soeur)
      let previousStar = this.previousElementSibling;

      while (previousStar) {
        // On passe l'étoile qui précède en en vide"
        previousStar.classList.add("fa-solid");
        previousStar.classList.remove("fa-regular");
        // On récupère l'étoile qui la précède
        previousStar = previousStar.previousElementSibling;
      }
    });

    // On écoute le clic
    star.addEventListener("click", function () {
      note.value = this.dataset.value;
    });
    // On écoute la fin du survol de la souris
    star.addEventListener("mouseout", function () {
      resetStars(note.value);
    });
  }

  function resetStars(note = 0) {
    for (star of stars) {
      if (star.dataset.value > note) {
        star.classList.add("fa-regular");
        star.classList.remove("fa-solid");
      } else {
        star.classList.add("fa-solid");
        star.classList.remove("fa-regular");
      }
    }
  }

  document
    .getElementById("ratingForm")
    .addEventListener("submit", function (event) {
      const starsEmpty = document.getElementById("note").value;
      const mail = document.getElementById("userEmailInput").value;

      if (starsEmpty === "" || starsEmpty === "0") {
        starsMessageError.textContent = "You have to rate us";
        starsMessageError.style.color = "red";
        event.preventDefault();
      }

      if (mail === "") {
        mailMessageError.textContent = "Oops, your mail !";
        mailMessageError.style.color = "red";
        event.preventDefault();
      }
    });
};

/*
la classe pour les étoiles pleines :
<i class="fa-solid fa-star" style="color: #FFD43B;"></i>
*/

/*
SRC => 
https://www.youtube.com/watch?v=Djg-Fm-Pkgc&ab_channel=NouvelleTechno

https://github.com/NouvelleTechno/Stars-Rating/blob/main/index.html


window.onload = function () {
  // Affiche le pop-up quand la page charge
  document.getElementById("#popupNote");
};
*/
