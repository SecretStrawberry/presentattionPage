"use strict";

//////////////////////////////////////////////////
//Navigation
const header = document.querySelector(".header");
const nav = document.querySelector(".navigation");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//////////////////////////////////////////////////
//navigation links selectors
const homeLink = document.querySelector(".home-link");
const aboutLink = document.querySelectorAll(".about-link");
const porotfolioLink = document.querySelectorAll(".portofolio-link");
const contactLink = document.querySelectorAll(".contact-link");

//sections selectors
const porotfolioSection = document.querySelector(".portofolio");
const aboutSection = document.querySelector(".story");
const contactSection = document.querySelector(".contact");

// function to link the links in the nav and the page to the needed sections
// we need to pass the link first and the section after
const linkTheLinks = function (linkToBeLinked, sectionToMoveTo) {
  linkToBeLinked.forEach(function (link) {
    link.addEventListener("click", function (e) {
      sectionToMoveTo.scrollIntoView({ behavior: "smooth" });
    });
  });
};

homeLink.addEventListener("click", function (e) {
  window.scrollTo(0, top);
});

linkTheLinks(aboutLink, aboutSection);
linkTheLinks(porotfolioLink, porotfolioSection);
linkTheLinks(contactLink, contactSection);

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

///////////////////////////////////////////
// HEADING effect
