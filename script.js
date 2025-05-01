const firstSlide = document.querySelector(".main-section-slide1");
const secondSlide = document.querySelector(".main-section-slide2");
const thirdSlide = document.querySelector(".main-section-slide3");
const previousBtn = document.querySelectorAll(
  ".main-section__main__buttons__previous-button"
);
const nextBtn = document.querySelectorAll(
  ".main-section__main__buttons__next-button"
);

/*For Mobile versions*/
const firstSlideMob = document.querySelector(".main-section-slide1-mob");
const secondSlideMob = document.querySelector(".main-section-slide2-mob");
const thirdSlideMob = document.querySelector(".main-section-slide3-mob");
const previousMobBtn = document.querySelectorAll(
  ".main-section__main-mob__buttons__previous-button"
);
const nextMobBtn = document.querySelectorAll(
  ".main-section__main-mob__buttons__next-button"
);
const openMenu = document.querySelectorAll(".main-section__header-mob__button");
const closeMenu = document.querySelector(
  ".main-section-slide1-mob__nav__button"
);
const mobileMenu = document.querySelector(".main-section-slide1-mob__nav");

/*First Slide*/
nextBtn[0].addEventListener("click", (e) => {
  e.preventDefault();

  firstSlide.classList.remove("--block-active");
  firstSlide.classList.add("--block-inactive");
  secondSlide.classList.remove("--block-inactive");
  secondSlide.classList.add("--block-active");
});

previousBtn[0].addEventListener("click", (e) => {
  e.preventDefault();

  firstSlide.classList.remove("--block-active");
  firstSlide.classList.add("--block-inactive");
  thirdSlide.classList.remove("--block-inactive");
  thirdSlide.classList.add("--block-active");
});

nextMobBtn[0].addEventListener("click", (e) => {
  e.preventDefault();

  firstSlideMob.style.display = "none";
  secondSlideMob.style.display = "flex";
});

previousMobBtn[0].addEventListener("click", (e) => {
  e.preventDefault();

  firstSlideMob.style.display = "none";
  thirdSlideMob.style.display = "flex";
});

/*Second slide*/
nextBtn[1].addEventListener("click", (e) => {
  e.preventDefault();

  secondSlide.classList.remove("--block-active");
  secondSlide.classList.add("--block-inactive");
  thirdSlide.classList.remove("--block-inactive");
  thirdSlide.classList.add("--block-active");
});

previousBtn[1].addEventListener("click", (e) => {
  e.preventDefault();

  secondSlide.classList.remove("--block-active");
  secondSlide.classList.add("--block-inactive");
  firstSlide.classList.remove("--block-inactive");
  firstSlide.classList.add("--block-active");
});

nextMobBtn[1].addEventListener("click", (e) => {
  e.preventDefault();

  secondSlideMob.style.display = "none";
  thirdSlideMob.style.display = "flex";
});

previousMobBtn[1].addEventListener("click", (e) => {
  e.preventDefault();

  secondSlideMob.style.display = "none";
  firstSlideMob.style.display = "flex";
});

/*Third Slide*/
nextBtn[2].addEventListener("click", (e) => {
  e.preventDefault();

  thirdSlide.classList.remove("--block-active");
  thirdSlide.classList.add("--block-inactive");
  firstSlide.classList.remove("--block-inactive");
  firstSlide.classList.add("--block-active");
});

previousBtn[2].addEventListener("click", (e) => {
  e.preventDefault();

  thirdSlide.classList.remove("--block-active");
  thirdSlide.classList.add("--block-inactive");
  secondSlide.classList.remove("--block-inactive");
  secondSlide.classList.add("--block-active");
});

nextMobBtn[2].addEventListener("click", (e) => {
  e.preventDefault();

  thirdSlideMob.style.display = "none";
  firstSlideMob.style.display = "flex";
});

previousMobBtn[2].addEventListener("click", (e) => {
  e.preventDefault();

  thirdSlideMob.style.display = "none";
  secondSlideMob.style.display = "flex";
});

/*Open or close the menu navigation*/
openMenu[0].addEventListener("click", (e) => {
  e.preventDefault();

  mobileMenu.style.display = "flex";
});

openMenu[1].addEventListener("click", (e) => {
  e.preventDefault();

  mobileMenu.style.display = "flex";
});

openMenu[2].addEventListener("click", (e) => {
  e.preventDefault();

  mobileMenu.style.display = "flex";
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();

  mobileMenu.style.display = "none";
});
