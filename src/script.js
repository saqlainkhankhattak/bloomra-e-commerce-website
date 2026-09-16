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
 current++;
  if (current >= slides.length) {
    current=0;
  }
  showSlide(current);
});

prevBtn.addEventListener("click", function () {
  --current;
  if (current < 0) {
    current = slides.length - 1;
  }
  showSlide(current);
});
