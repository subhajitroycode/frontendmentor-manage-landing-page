const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const image = document.getElementById("menu-icon");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit-button");
let expanded = false;

btn.addEventListener("click", () => {
  if (!expanded) {
    menu.classList.remove("hidden");
    image.src = "../images/icon-close.svg";
    expanded = !expanded;
  } else {
    menu.classList.add("hidden");
    image.src = "../images/icon-hamburger.svg";
    expanded = !expanded;
  }
});

const swiper = new Swiper(".mySwiper", {
  cssMode: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    976: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const regex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

  if (emailInput.value.match(regex)) {
    document.querySelector(".error-text").classList.add("hidden");
    alert("Thank you for submitting your email.");
  } else {
    document.querySelector(".error-text").classList.remove("hidden");
  }
});
