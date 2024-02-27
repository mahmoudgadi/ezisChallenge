function displayRating(rating) {
  const ratingContainer = document.querySelector(".article__rating-stars");
  ratingContainer.innerHTML = ""; // Nettoyer le contenu précédent
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 > 0 ? 1 : 0;
  const emptyStars = totalStars - fullStars - halfStar;

  // Ajouter les étoiles pleines
  for (let i = 0; i < fullStars; i++) {
    ratingContainer.innerHTML += '<span class="star">★</span>';
  }

  // Ajouter la demi-étoile si nécessaire
  if (halfStar) {
    ratingContainer.innerHTML += '<span class="star half">★</span>';
  }

  // Ajouter les étoiles vides
  for (let i = 0; i < emptyStars; i++) {
    ratingContainer.innerHTML += '<span class="star gray">★</span>';
  }
}

displayRating(4.6);

const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

// Tableau d'image : [0, 1, 2]

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    slides[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
});
