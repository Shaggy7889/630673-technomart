var link = document.querySelector(".contacts_button_lost");

var popup = document.querySelector(".modal-write_us");
var close = popup.querySelector(".modal-close");
var loginInput = document.querySelector("#login");
var emailInput = document.querySelector("#email");
var form = document.querySelector(".modal_form");
var textInput = document.querySelector(".input_letter")

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  var login = localStorage.getItem("loginInput")
  var email = localStorage.getItem("emailInput")

  if (login) {
    loginInput.value = login;
    emailInput.value = email;
    textInput.focus()
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function(evt) {
  if (loginInput.value && emailInput.value && textInput.value.length > 10) {
    localStorage.setItem("loginInput", loginInput.value);
    localStorage.setItem("emailInput", emailInput.value);
  } else {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

var mapLink = document.querySelector(".js_button_map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});


var back = document.querySelector(".promo-item_slider-button-back");

var next = document.querySelector(".promo-item_slider-button-next");
var slide1 = document.querySelector(".promo-item_slider1");
var slide2 = document.querySelector(".promo-item_slider2");
var bullet1 = document.querySelector("#paginator-slider1");
var bullet2 = document.querySelector("#paginator-slider2");

next.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(e.target.parentNode);
  if (slide2.classList.contains("show")) {
    slide2.classList.remove("show");
    slide1.classList.add("show");
    slide1.classList.add("show");
    bullet2.getAttribute('checked');
    bullet1.removeAttribute('checked');
  } else {
    slide1.classList.remove("show");
    slide2.classList.add("show");
    bullet1.getAttribute('checked')
    bullet2.removeAttribute('checked')
  }
});
back.addEventListener("click", function(e) {
  console.log(e.target.parentNode);
  if (slide2.classList.contains("show")) {
    slide2.classList.remove("show");
    slide1.classList.add("show");
    slide1.classList.add("show");
    bullet2.getAttribute('checked');
    bullet1.removeAttribute('checked');
  } else {
    slide1.classList.remove("show");
    slide2.classList.add("show");
      bullet1.getAttribute('checked');
      bullet2.removeAttribute('checked');
  }
});
