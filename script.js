"use strict";
//////////////////////////////////////////////////
//navigation links selectors
const homeLink = document.querySelectorAll(".home-link");
const aboutLink = document.querySelectorAll(".about-link");
const porotfolioLink = document.querySelectorAll(".portofolio-link");
const contactLink = document.querySelectorAll(".contact-link");
const nav = document.querySelector(".navigation");

//sections selectors
const headerSection = document.querySelector(".header");
const porotfolioSection = document.querySelector(".portofolio");
const portofolioText = document.querySelector(".portofolio__text-content");
const aboutSection = document.querySelector(".story");
const contactSection = document.querySelector(".contact");

//////////////////////////////////////////////////
// NAVIGATON
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

headerObserver.observe(headerSection);

// function to link the links in the nav and the page to the needed sections
// we need to pass the link first and the section after
const linkTheLinks = function (linkToBeLinked, sectionToMoveTo) {
  linkToBeLinked.forEach(function (link) {
    link.addEventListener("click", function (e) {
      sectionToMoveTo.scrollIntoView({ behavior: "smooth" });
    });
  });
};

linkTheLinks(homeLink, headerSection);
linkTheLinks(aboutLink, aboutSection);
linkTheLinks(porotfolioLink, porotfolioSection);
linkTheLinks(contactLink, contactSection);

/////////////////////////////////////////////////
// REVEAL SECTIONS
// we just need to call the function giving arguments as strings:
// 1. the section (css class) that we need to reveal
// 2. and the the element (css class) that performs the animation
// 3. add the threshold percent that you need
// THIS ONLY WORKS FOR ONE ELEMENT AT A TIME!!!!!!!
const revealSections = function (
  sectionToHide,
  elementToApply,
  thresholdPercent
) {
  const section = document.querySelector(sectionToHide);

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove(elementToApply);
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: thresholdPercent,
  });

  sectionObserver.observe(section);
  section.classList.add(elementToApply);
};

////////////////////////////////////////////////
// reveal portofolio
// section--hidden is found in _sections.scss
revealSections(".section", "section--hidden", 0.15);

///////////////////////////////////////////////////

////////////////////////////////////////////////
// reveal story
// story--hidden is found in _sections.scss
revealSections(".story", "story--hidden", 0.15);

////////////////////////////////////////////////
// reveal footer
// footer--hidden is found in _sections.scss
revealSections(".contact", "footer--hidden", 0.15);

///////////////////////////////////////////
// HEADING effect
const textWrap = document.querySelector(".heading");
textWrap.innerHTML = textWrap.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
const letters = document.querySelectorAll(".letter");

let char = 0;
let timer = setInterval(myAnimation, 100);

function myAnimation() {
  const letter = document.querySelectorAll(".letter")[char];
  letter.classList.add("fade");
  char++;
  if (char === letters.length) complete();
  return;
}

function complete() {
  clearInterval(timer);
  timer = null;
}

//////////////////////////////////////
// HEADING randomly disperse on hover

const heading = document.querySelector(".heading");

heading.addEventListener("mouseover", function () {
  const letter = document.querySelectorAll(".letter");
  letter.forEach(function (elem) {
    elem.style.transform = `translateY(${
      Math.floor(Math.random() * 40) - 20
    }rem) translateX(${
      Math.floor(Math.random() * 40) - 20
    }rem) rotateY(540deg)`;
  });
});

heading.addEventListener("mouseout", function () {
  const letter = document.querySelectorAll(".letter");
  letter.forEach(function (elem) {
    elem.style.transform = "translateY(0) translateX(0) rotateY(-360deg) ";
  });
});

/////////////////////////////////////////////
// PORTOFOLIO text anmimation
// text-hidden & text-animated can be found in _sections.scss

const revealText = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    entry.target.classList.remove("text-hidden");
    entry.target.classList.add("text-animated");
  }
  observer.unobserve(entry.target);
};

const portofolioTextObserver = new IntersectionObserver(revealText, {
  root: null,
  threshold: 0.7,
});

portofolioTextObserver.observe(portofolioText);
portofolioText.classList.add("text-hidden");
