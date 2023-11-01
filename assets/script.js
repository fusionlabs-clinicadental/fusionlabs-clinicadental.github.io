// FusionLabs | JavaScript - Dental Clinic Landing Page

'use strict';

/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// Send Email

var csbtn = document.getElementById("btncs");

csbtn.addEventListener('click', function(e){
  e.preventDefault();

  var nombre = document.getElementById('name');
  var email = document.getElementById('email');
  var msg = document.getElementById('msg');
  var date = document.getElementById('date');
  var time = document.getElementById('time');
  var service = document.getElementById('services');

  var senderInfo = '<br/> name: ' + nombre.value + '<br/> email: ' + email.value + '<br/> message: ' + msg.value;
  var appointmentInfo = '</br> Fecha: ' + date.value + '<br/> Horario: ' + time.value + '<br/> Servicio: ' + service.value;

  var body = '<br/> INFORMACION PERSONAL: ' + senderInfo + '<br/> APPOINTMENT: ' + appointmentInfo;
  Email.send({
      SecureToken : "18d4d222-e7e4-402d-bd12-2690105575d4",
      To : 'clinicadental.fusionlabs@gmail.com',
      From : 'emailserver.fusionlabs@gmail.com',
      Subject : "Dentelo | Contact Message - FusionLabs",
      Body : body
  }).then(
      message => alert("Tu mensaje fue enviado, pronto te llegara una respuesta!")
  );
})