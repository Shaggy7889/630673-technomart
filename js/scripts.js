var link = document.querySelector(".contacts_button_lost");

var popup = document.querySelector(".modal-write_us");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
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

next.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(e.target.parentNode);
  if (slide2.classList.contains("show")) {
    slide2.classList.remove("show");
    slide1.classList.add("show");
    slide1.classList.add("show");
  } else {
    slide1.classList.remove("show");
    slide2.classList.add("show");
  }
});
back.addEventListener("click", function(e) {
  console.log(e.target.parentNode);
  if (slide2.classList.contains("show")) {
    slide2.classList.remove("show");
    slide1.classList.add("show");
    slide1.classList.add("show");
  } else {
    slide1.classList.remove("show");
    slide2.classList.add("show");
  }
});
