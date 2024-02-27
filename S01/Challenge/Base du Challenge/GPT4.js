window.onload = () => {
  // Sélection des éléments du DOM
  const stars = document.querySelectorAll(".fa-star");
  const noteInput = document.getElementById("note");
  const resetBtn = document.getElementById("resetButton");
  const messageError = document.getElementById("messageError");
  const ratingForm = document.getElementById("ratingForm");

  // Fonction pour réinitialiser les étoiles et le message d'erreur
  const resetStars = (selectedNote = 0) => {
    stars.forEach((star) => {
      star.classList.toggle("fa-solid", star.dataset.value <= selectedNote);
      star.classList.toggle("fa-regular", star.dataset.value > selectedNote);
    });
    noteInput.value = selectedNote;
    messageError.textContent = "";
  };

  // Écouteur d'événements pour le bouton de réinitialisation
  resetBtn.addEventListener("click", () => {
    ratingForm.reset(); // Réinitialise les inputs du formulaire
    resetStars(); // Réinitialise les étoiles et le message d'erreur
  });

  // Fonction pour gérer le survol des étoiles
  const handleStarMouseover = (e) => {
    const hoveredNote = e.target.dataset.value;
    resetStars(hoveredNote);
  };

  // Fonction pour gérer le clic sur une étoile
  const handleStarClick = (e) => {
    const selectedNote = e.target.dataset.value;
    noteInput.value = selectedNote;
  };

  // Fonction pour gérer le départ du survol des étoiles
  const handleStarMouseout = () => {
    resetStars(noteInput.value);
  };

  // Attachement des écouteurs d'événements aux étoiles
  stars.forEach((star) => {
    star.addEventListener("mouseover", handleStarMouseover);
    star.addEventListener("click", handleStarClick);
    star.addEventListener("mouseout", handleStarMouseout);
  });

  // Écouteur d'événements pour la soumission du formulaire
  ratingForm.addEventListener("submit", (event) => {
    const emailInput = document.getElementById("userEmailInput").value;
    if (!emailInput) {
      messageError.textContent = "Vous devez saisir une adresse mail !";
      messageError.style.color = "red";
      event.preventDefault(); // Empêche la soumission du formulaire
    }
  });
};
