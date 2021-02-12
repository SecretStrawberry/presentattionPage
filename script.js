"use strict";
/////////////////////////////////////////////////
//reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

////////////////////////////////////////////////
// reveal story
const story = document.querySelector(".story");

const revealStory = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("story--hidden");
  observer.unobserve(entry.target);
};

const storyObserver = new IntersectionObserver(revealStory, {
  root: null,
  threshold: 0.3,
});

storyObserver.observe(story);
story.classList.add("story--hidden");

/////////////////////////////////////////////////
// slider
// const slider = function () {
//   const slides = document.querySelectorAll(".slide");
//   const btnLeft = document.querySelector(".slider__btn--left");
//   const btnRight = document.querySelector(".slider__btn--right");
//   const dotContainer = document.querySelector(".dots");

//   let curSlide = 0;
//   const maxSlide = slides.length;

//   /// FUNCTIONS

//   // creating the dots
//   const createDots = function () {
//     slides.forEach(function (_, i) {
//       dotContainer.insertAdjacentHTML(
//         "beforeend",
//         `<button class='dots__dot' data-slide='${i}'></button>`
//       );
//     });
//   };

//   // making the dots active
//   const activateDot = function (slide) {
//     // removing the active class from all the dots
//     document
//       .querySelectorAll(".dots__dot")
//       .forEach((dot) => dot.classList.remove("dots__dot--active"));

//     // adding the active class only to the active dot
//     document
//       .querySelector(`.dots__dot[data-slide='${slide}']`)
//       .classList.add("dots__dot--active");
//   };

//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   };

//   // NEXT SLIDE the arrows on the images
//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   // PREVOISus SLIDE the arrows on the images
//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   // initialising the start points of sldier
//   const init = function () {
//     createDots();
//     activateDot(0);
//     goToSlide(0);
//   };
//   init();
//   // EVENT handlers
//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);

//   // PREVOUS SLIDE & NEXT SLIDE  the arrow keys on the keyboard
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") prevSlide();
//     e.key === "ArrowRight" && nextSlide(); // short circuiting
//   });

//   // DOTS
//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots__dot")) {
//       const { slide } = e.target.dataset; // destructuring an object and taking the slide number from the data-slide class
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };

// slider();
