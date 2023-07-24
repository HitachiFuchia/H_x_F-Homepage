"use strict"

function sendEmail() {
  Email.sendEmail({
    secureToken: "548c5122-1c99-4cfc-9200-956e59454d98",
    To: 'henryfrank98@hotmail.com',
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "Vorname: " + document.getElementById("vorname").value
      + "<br> Nachname: " + document.getElementById("nachname").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Phone: " + document.getElementById("phone").value
      + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Kontaktformular erfolgreich versendet")
  );
}