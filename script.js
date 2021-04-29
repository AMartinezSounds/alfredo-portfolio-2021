"strict mode";

const navbarSquare = document.querySelector(".navbar__lines");
const lineMenu1 = document.querySelector(".lines__line-1");
const lineMenu2 = document.querySelector(".lines__line-2");
const lineMenu3 = document.querySelector(".lines__line-3");
const navBar = document.querySelector(".navbar__links");
const navBarLinks = document.querySelectorAll(".navbar__links--link");

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
