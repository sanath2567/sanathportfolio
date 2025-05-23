
// Start typing the first value
$(document).ready(function() {
    let options = {
      startAngle: -1.55,
      size: 150,
      value: 0.85,
      fill: {gradient: ['#a445b2', '#fa4299']}
    }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue){
      $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
    $(".js .bar").circleProgress({
      value: 0.50
    });
    $(".react .bar").circleProgress({
      value: 0.60
    });
    $(".c .bar").circleProgress({
      value: 0.10
    });
    $(".python .bar").circleProgress({
      value: 0.30
    });
    $(".java .bar").circleProgress({
      value: 0.60
    });
    $(".node .bar").circleProgress({
      value: 0.20
    });
  });
//   

// 
function myFunction(x) {
  x.classList.toggle("change");
}

// 

document.addEventListener("DOMContentLoaded", function() {
  // Typed.js initialization
  var typed = new Typed('.auto-type', {
      strings: ['A Computer Science Student', 'popularly Known as A Nothing_8'], // Add your desired strings here
      typeSpeed: 80, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true // Set to true to loop through the strings infinitely
  });
});

// 

document.querySelectorAll('.portfolio-box').forEach(box => {
  box.addEventListener('click', () => {
    const h4 = box.querySelector('h4');
    h4.style.display = 'block'; // Show the h4 content
    window.location.href = box.querySelector('a').href; // Redirect to the link
  });
});

// dummy

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// 


  window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');

    sections.forEach(function(section) {
      let rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        let id = section.getAttribute('id');
        navLinks.forEach(function(link) {
          link.classList.remove('highlight');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('highlight');
          }
        });
      }
    });
  });


  // 

 
  // Disable right-click
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Disable specific key combinations
  document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.shiftKey && event.key === 'J') || 
        (event.ctrlKey && event.key === 'U')) {
      event.preventDefault();
    }
  });



  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const boxes = document.querySelectorAll(".box");
      if (entry.isIntersecting) {
        boxes.forEach(box => box.classList.add("visible"));
      } else {
        boxes.forEach(box => box.classList.remove("visible"));
      }
    });
  }, {
    threshold: 0.2 
  });

  observer.observe(document.querySelector("#animate-section"));
