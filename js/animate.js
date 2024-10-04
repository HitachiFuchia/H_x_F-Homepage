"use strict";

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("show");
  } else {
   // entries[0].target.classList.remove("show");
  }
});

const observer2 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("show2")
  } else {
    // entries[0].target.classList.remove("show2");
  }
});

const observer_secSkills = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("skills-animate-show")
    } else {
     // entry.target.classList.remove("skills-animate-show");
    }
  });
})

const observer_qualifikationen = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("qualifikationen-show");
    } else {
     // entry.target.classList.remove("qualifikationen-show");
    }
  });
})

const aboutMe = document.querySelector(".about__me--introduction__card--imgbox");
observer.observe(aboutMe);

const aboutMe2 = document.querySelector(".about__me--introduction__text");
observer2.observe(aboutMe2);

const webSkills = document.querySelector(".web-skills");
observer2.observe(webSkills);

const skillsAnimate = document.querySelectorAll(".skills-animate-hidden");

skillsAnimate.forEach((el) => observer_secSkills.observe(el));

const personalitySkills = document.querySelector(".personality-skills--main-box");
observer2.observe(personalitySkills);

const personalitySkillsHeading = document.querySelector(".personality-skills--heading-container__main-heading");
observer.observe(personalitySkillsHeading);

const qualifikationen = document.querySelector(".qualifikationen");
observer2.observe(qualifikationen);

const qualifikationenCards = document.querySelectorAll(".qualifikationen-hidden");

qualifikationenCards.forEach((el) => observer_qualifikationen.observe(el));

const portfolio = document.querySelector(".portfolio");
observer2.observe(portfolio);

const portfolioContainer = document.querySelectorAll(".portfolio__main-container");

portfolioContainer.forEach((el) => observer_secSkills.observe(el));

const kontaktHeading = document.querySelector(".contact--heading-container");
observer2.observe(kontaktHeading);


const kontaktImg = document.querySelector(".contact--main-container");
observer2.observe(kontaktImg);

const kontaktForm = document.querySelector(".form");
observer2.observe(kontaktForm);

const footer = document.querySelector(".footer");
observer.observe(footer)
