var noteSelected = false;

function changeStarImage(star) {
  if (!noteSelected) {
    star.src = "./assets/star_hover.png";
    var stars = document.querySelectorAll(".stars-container img");
    var starIndex = Array.from(stars).indexOf(star);
    for (var i = 0; i <= starIndex; i++) {
      stars[i].src = "./assets/star_full.png";
    }
    stars[starIndex].src = "./assets/star_hover.png";
    stars[starIndex].classList.add("star-hover");
  }
}

function resetStarImage(star) {
  if (!noteSelected) {
    star.src = "./assets/star.png";
    var stars = document.querySelectorAll(".stars-container img");
    var starIndex = Array.from(stars).indexOf(star);
    for (var i = 0; i < stars.length; i++) {
      stars[i].src = "./assets/star.png";
    }
    stars[starIndex].classList.remove("star-hover");
  }
}

function selectNote(star) {
  if (!noteSelected) {
    noteSelected = true;
    var stars = document.querySelectorAll(".stars-container img");
    var starIndex = Array.from(stars).indexOf(star);
    for (var i = 0; i <= starIndex; i++) {
      stars[i].src = "./assets/star_selected.png";
      stars[starIndex].classList.remove("star-hover");
    }
    for (var i = starIndex + 1; i <= stars.length; i++) {
      stars[i].src = "./assets/star_not_selected.png";
    }
  }
}

var stars = document.querySelectorAll(".stars-container img");
stars.forEach(function (star) {
  star.addEventListener("click", function () {
    selectNote(star);
  });
});

const cross = document.querySelector(".cross");
cross.addEventListener("click", function () {
  noteSelected = false;
  var stars = document.querySelectorAll(".stars-container img");
  for (var i = 0; i < stars.length; i++) {
    stars[i].src = "./assets/star.png";
  }
});

