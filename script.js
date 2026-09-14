let menuLinks = document.querySelector(".navLinks");
let menuButton = document.querySelector("#menuBtn");
menuButton.addEventListener("click", function () {
  menuLinks.classList.toggle("active");
  console.log("clicked");
});
