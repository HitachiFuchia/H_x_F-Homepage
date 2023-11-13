const header = document.querySelector(".nav__container");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");
const body = document.querySelector("body");
const CTA = document.querySelector(".nav__container--heading__button");

CTA.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  window.location.href = "#contact";


  const observer2 = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("show2")
    } else {
      entries[0].target.classList.remove("show2");
    }
  });

  const kontaktImg = document.querySelector(".contact--main-container");
  observer2.observe(kontaktImg);

  setTimeout(function () {
    const kontaktForm = document.querySelector(".form");
    observer2.observe(kontaktForm);
  }, 1000);
})

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  header.classList.toggle("open");
  overlay.classList.toggle("open");
});

body.addEventListener("scroll", function () {

});
