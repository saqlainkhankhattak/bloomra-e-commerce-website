const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Navbar logic 
let menuLinks = document.querySelector(".navLinks");
let menuButton = document.querySelector("#menuBtn");
menuButton.addEventListener("click", function () {
  menuLinks.classList.toggle("active");
  console.log("clicked");
});



//  image slider
let current = 0;

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("slide-active");
  });
  slides[index].classList.add("slide-active");
}

nextBtn.addEventListener("click", function () {
  if (current === 2) {
    current = 2;
  } else {
    current++
    showSlide(current);
  }
});

prevBtn.addEventListener("click", function () {
  if (current === 0) {
    current = 0;
  } else {
    current--;
    showSlide(current);
  }
});
