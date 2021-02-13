"use strict";
/////////////////////////////////////////////////
//reveal sections
// we just need to call the function giving arguments as strings:
// 1. the section (css class) that we need to reveal
// 2. and the the element (css class) that performs the animation
// THIS ONLY WORKS FOR ONE ELEMENT AT A TIME!!!!!!!

const revealSections = function (sectionToHide, elementToApply) {
  const section = document.querySelector(sectionToHide);

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove(elementToApply);
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  sectionObserver.observe(section);
  section.classList.add(elementToApply);
};

////////////////////////////////////////////////
// reveal portofolio
// section--hidden is found in _sections.scss
revealSections(".section", "section--hidden");

////////////////////////////////////////////////
// reveal story
// story--hidden is found in _sections.scss
revealSections(".story", "story--hidden");

////////////////////////////////////////////////
// reveal footer
// footer--hidden is found in _sections.scss
revealSections(".contact", "footer--hidden");

////////////////////////////////////////////////
//smooth scrolling
const buttonScroll = document.querySelector(".btn--scroll-to");
const footerS = document.querySelector("#cnt");

buttonScroll.addEventListener("click", function (e) {
  footerS.scrollIntoView({ behavior: "smooth" });
});
