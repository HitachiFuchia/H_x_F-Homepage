"use strict";

function createObserver(className, animationClass, options = {}) {
  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        // Optional: Nach Animation entfernen
        entry.target.addEventListener('animationend', () => {
          observer.unobserve(entry.target);
        }, { once: true });
      }
    });
  }, options);
}

const observer = createObserver("show", "show", {
  root: null,
  rootMargin: "0px 0px -20% 0px",
  threshold: 0
});
const observer2 = createObserver("show2", "show2", {
  root: null,
  rootMargin: "0px 0px -20% 0px",
  threshold: 0
});
const observer_secSkills = createObserver("skills-animate-hidden", "skills-animate-show", {
  root: null,
  rootMargin: "0px 0px -20% 0px",
  threshold: 0
});
const observer_qualifikationen = createObserver("qualifikationen-hidden", "qualifikationen-show", {
  root: null,
  rootMargin: "0px 0px -20% 0px",
  threshold: 0
});

// Dann überall forEach statt .observe() auf einzelne querySelector-Ergebnisse
document.querySelectorAll(".about__me--introduction__card--imgbox").forEach(el => observer.observe(el));
document.querySelectorAll(".about__me--introduction__text").forEach(el => observer2.observe(el));
document.querySelectorAll(".web-skills").forEach(el => observer2.observe(el));
document.querySelectorAll(".skills-animate-hidden").forEach(el => observer_secSkills.observe(el));
document.querySelectorAll(".personality-skills--main-box").forEach(el => observer2.observe(el));
document.querySelectorAll(".personality-skills--heading-container__main-heading").forEach(el => observer.observe(el));
document.querySelectorAll(".qualifikationen").forEach(el => observer2.observe(el));
document.querySelectorAll(".qualifikationen-hidden").forEach(el => observer_qualifikationen.observe(el));
document.querySelectorAll(".portfolio").forEach(el => observer2.observe(el));
document.querySelectorAll(".portfolio__main-container").forEach(el => observer_secSkills.observe(el));
document.querySelectorAll(".contact--heading-container").forEach(el => observer2.observe(el));
document.querySelectorAll(".contact--main-container").forEach(el => observer2.observe(el));
document.querySelectorAll(".form").forEach(el => observer2.observe(el));
document.querySelectorAll(".footer").forEach(el => observer.observe(el));

// Optional: Debounced scroll fallback für super-schnelles Scrollen:
let scrollTimer;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    document.querySelectorAll('.skills-animate-hidden, .qualifikationen-hidden, .about__me--introduction__card--imgbox, .about__me--introduction__text, .web-skills, .personality-skills--main-box, .personality-skills--heading-container__main-heading, .qualifikationen, .portfolio, .portfolio__main-container, .contact--heading-container, .contact--main-container, .form, .footer')
      .forEach(el => {
        // Prüfe, ob schon animiert
        const animClasses = ['show', 'show2', 'skills-animate-show', 'qualifikationen-show'];
        if (!animClasses.some(cls => el.classList.contains(cls))) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Je nach Klasse das richtige Animation-Class setzen:
            if (el.classList.contains('skills-animate-hidden')) el.classList.add('skills-animate-show');
            if (el.classList.contains('qualifikationen-hidden')) el.classList.add('qualifikationen-show');
            if (el.classList.contains('about__me--introduction__card--imgbox') || el.classList.contains('personality-skills--heading-container__main-heading') || el.classList.contains('footer')) el.classList.add('show');
            if (el.classList.contains('about__me--introduction__text') || el.classList.contains('web-skills') || el.classList.contains('personality-skills--main-box') || el.classList.contains('qualifikationen') || el.classList.contains('portfolio') || el.classList.contains('contact--heading-container') || el.classList.contains('contact--main-container') || el.classList.contains('form')) el.classList.add('show2');
            if (el.classList.contains('portfolio__main-container')) el.classList.add('skills-animate-show');
          }
        }
      });
  }, 100);
});
