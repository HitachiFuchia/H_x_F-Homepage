"use strict"

const inputVorname = document.querySelector("#vorname");
const vornameIcon = document.querySelector("#vornameIcon");

const inputNachname = document.querySelector("#nachname");
const nachnameIcon = document.querySelector("#nachnameIcon");

const inputEmail = document.querySelector("#email");
const emailIcon = document.querySelector(".fa-envelope");

const inputTelefon = document.querySelector("#phone");
const phoneIcon = document.querySelector(".fa-mobile");

inputVorname.addEventListener("keydown", () => {
  let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  if (!inputVorname.value.match(pattern)) {
    vornameIcon.classList.add("effect")
    vornameIcon.style.color = "tomato";
  }

  if (inputVorname.value.match(pattern)) {
    vornameIcon.classList.remove("effect")
    vornameIcon.style.color = "springgreen";
  }
})

inputNachname.addEventListener("keydown", () => {
  let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  if (!inputNachname.value.match(pattern)) {
    nachnameIcon.classList.add("effect")
    nachnameIcon.style.color = "tomato";
  }

  if (inputNachname.value.match(pattern)) {
    nachnameIcon.classList.remove("effect")
    nachnameIcon.style.color = "springgreen";
  }
})


inputEmail.addEventListener("keydown", () => {
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!inputEmail.value.match(pattern)) {
    emailIcon.classList.add("effect")
    emailIcon.style.color = "tomato";
  }

  if (inputEmail.value.match(pattern)) {
    emailIcon.classList.remove("effect")
    emailIcon.style.color = "springgreen";
  }
})

inputTelefon.addEventListener("keydown", () => {
  let patternMobileEurope = /^\+?[0-9]{10,14}$/;
  let patternMobileUSA = /^\+?[1][0-9]{9}$/;
  let patternTelefonEurope = /^\+?[0-9]{3}-[0-9]{7,8}$/;
  let patternTelefonUSA = /^\+?[1][0-9]{3}-[0-9]{7,8}$/;

  if (!inputTelefon.value.match(patternMobileEurope || patternMobileUSA || patternTelefonEurope || patternTelefonUSA)) {
    phoneIcon.classList.add("effect")
    phoneIcon.style.color = "tomato";
  }

  if (inputTelefon.value.match(patternMobileEurope || patternMobileUSA || patternTelefonEurope || patternTelefonUSA)) {
    phoneIcon.classList.remove("effect")
    phoneIcon.style.color = "springgreen";
  }
})
