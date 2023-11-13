const header = document.querySelector(".nav__container");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");
const body = document.querySelector("body");
const CTA = document.querySelector(".nav__container--heading__button");

CTA.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  window.location.href = "#contact";
})

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("open");
  overlay.classList.toggle("open");
});

body.addEventListener("scroll", function () {

});
