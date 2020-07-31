/*!
 * Start Bootstrap - Agency v6.0.0 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ?
        target :
        $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {

    $(".navbar-collapse").collapse("hide");

  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });

  // Wine slider

  var slidePosition = 0,
    numOfSlide = $(".slide").length,
    currentSlide = Math.floor(numOfSlide / 2),
    slideWidth = $(".slide").outerWidth(true);

moveSlide(currentSlide);
$(".slide-" + currentSlide).addClass("active");

$(".slide-container").css("width", numOfSlide * slideWidth);

$(".previous").click(function(){

  $(".slide-" + currentSlide).removeClass("active");
  if ((currentSlide - 1) >= 0) {
    currentSlide--;
  } else {
    currentSlide = (numOfSlide - 1);
  }
  $(".slide-" + currentSlide).addClass("active");

  moveSlide(currentSlide);

});

$(".next").click(function(){

  $(".slide-" + currentSlide).removeClass("active");
  if ((currentSlide + 1) < numOfSlide) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  $(".slide-" + currentSlide).addClass("active");

  moveSlide(currentSlide);

});

function moveSlide(slideNumber) {
  var slidePosition = -1 * (slideNumber * slideWidth);
  $(".slide-container").css({"transform":"translateX("+ slidePosition +"px)"});
}

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
