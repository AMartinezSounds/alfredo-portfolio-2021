"strict mode";

const navbarSquare = document.querySelector(".navbar__lines");
const lineMenu1 = document.querySelector(".lines__line-1");
const lineMenu2 = document.querySelector(".lines__line-2");
const lineMenu3 = document.querySelector(".lines__line-3");
const navBar = document.querySelector(".navbar__links");
const navBarLinks = document.querySelectorAll(".navbar__links--link");

// Event Listeners for menu animations

navbarSquare.addEventListener("click", () => {
  //   navbarSquare.classList.toggle("moveToLeft");
  lineMenu1.classList.toggle("change1");
  lineMenu2.classList.toggle("change2");
  lineMenu3.classList.toggle("change3");
  navBar.classList.toggle("showNavbar");
});

navbarSquare.addEventListener("click", () => {
  navbarSquare.classList.toggle("border-white");
  lineMenu1.classList.toggle("line-black");
  lineMenu3.classList.toggle("line-black");
});

// function for smooth scrolling

function smoothScroll(target, duration) {
  let targetToGo = document.querySelector(target);
  let targetPosition = targetToGo.offsetTop;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}

// Implementing the smooth scrolling in each element

const navbarContact = document.querySelector("#navbar-contact");

navbarContact.addEventListener("click", function (e) {
  e.preventDefault();
  smoothScroll("#contact-section", 1000);
});

const contactButton = document.querySelector(".contact-button");

contactButton.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll("#contact-section", 1000);
});

const contactButton2 = document.querySelector(".contact-button2");

contactButton2.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll("#contact-section", 1000);
});

const navbarHome = document.querySelector("#navbar-home");

navbarHome.addEventListener("click", () => {
  smoothScroll("#section-main", 1000);
});

const navbarAbout = document.querySelector("#navbar-about");

navbarAbout.addEventListener("click", () => {
  smoothScroll("#section-about", 1000);
});

const navbarPortfolio = document.querySelector("#navbar-portfolio");

navbarPortfolio.addEventListener("click", () => {
  smoothScroll("#portfolio-section", 1000);
});
