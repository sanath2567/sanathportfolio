/* ============= filter Active =============== */
let tabfilter = document.querySelectorAll(".filter-portfolio button");

function activefilter() {
  tabfilter.forEach((l) => l.classList.remove("active-portfolio"));
  this.classList.add("active-portfolio");
}

tabfilter.forEach((l) => l.addEventListener("click", activefilter));

// Animation skills progress
let span = $(".progress-bar span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    2000
  );
});

$(".resume").scroll(span);

/* ============ SCROLL SECTIONS ACTIVE LINK ============= */
let sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu li a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu li a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ============ SCROLL SECTIONS RESUME LINK ============= */
const resumeItem = document.querySelectorAll(".resume-item");

function scrollResume() {
  const scrollY = window.pageYOffset;

  resumeItem.forEach((item) => {
    const sectionHeight = item.offsetHeight;
    const sectionTop = item.offsetTop + 2600;

    resumeId = item.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".sidebar a[href*=" + resumeId + "]")
        .classList.add("active-resume");
    } else {
      document
        .querySelector(".sidebar a[href*=" + resumeId + "]")
        .classList.remove("active-resume");
    }
  });
}

window.addEventListener("scroll", scrollResume);

/* ============ Active card testimonial ============= */
let cardsTest = document.querySelectorAll(".testimonial .card");

function activeCard() {
  cardsTest.forEach((card) => card.classList.remove("active-card"));
  this.classList.add("active-card");
}

cardsTest.forEach((card) => card.addEventListener("click", activeCard));

/* ============ Active card testimonial ============= */
let dataId = cardsTest.forEach((card) => card.getAttribute("data-id"));
let texts = document.querySelectorAll(".testimonial .text");
let textId = texts.forEach((text) => text.getAttribute("id"));

function textActive() {
  texts.forEach((text) => text.classList.remove("active-text"));
  let current = this.getAttribute("data-id");
  document
    .querySelector(".testimonial .text[id*=" + current + "]")
    .classList.add("active-text");
}

cardsTest.forEach((card) => card.addEventListener("click", textActive));


// Typed.js ==========
var typed = new Typed("#typed", {
  strings: ["Web Developer", "Designer", "Photographer"],
  typeSpeed: 70,
  backSpeed: 100,
  backDelay: 700,
  loop: true,
});

// menu bar 
let menuBar = document.querySelector(".menu-bar");
let navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener('click', () => {
  navMenu.classList.toggle('menu-active');
})

//


document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.resume-item');
  const sidebarLinks = document.querySelectorAll('.sidebar a');

  function highlightSidebarLink() {
    let currentSectionId = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        currentSectionId = section.id;
      }
    });

    sidebarLinks.forEach(link => {
      link.classList.remove('active-resume');
      if (link.getAttribute('href') === '#' + currentSectionId) {
        link.classList.add('active-resume');
      }
    });
  }

  highlightSidebarLink(); // Highlight initial section

  window.addEventListener('scroll', highlightSidebarLink);
  });

