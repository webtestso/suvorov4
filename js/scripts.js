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
          2000,
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

  // Counter

  $('.counter').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  // Swiper

  const Swiper = new Swiper('.image-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 4,
    watchOverflow: true,
    slidesPerGroup: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      979: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      }
    },
    observer: true,
    observeParents: true
  });

  new Swiper('.header-slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 2000,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  const Swiper = new Swiper('.home-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 2,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      979: {
        slidesPerView: 2,
      },
      1300: {
        slidesPerView: 2,
      }
    },
    observer: true,
    observeParents: true,
    watchOverflow: true
  });

  $('.btn-tab ul li button').on('click', function() {
    var dataid = $(this).data('tag');

    $('.btn-tab ul li button').removeClass('current');
    $(this).addClass('current');

    $('.swiper-tab-con').removeClass('current');
    $('#' + dataid).addClass('current');

  });

  // Collapse Navbar

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.nav-link').css("color", "#FEFBF3");
    } else {
      $('.nav-link').css("color", "#1B1717");
    }
  });

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
