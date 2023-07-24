const header = document.querySelector(".nav__container");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("open");
  overlay.classList.toggle("open");
});

body.addEventListener("scroll", function () {

});
