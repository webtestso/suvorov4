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

  // Slick Slider
  $(function() {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      centerMode: false,
      centerPadding: '0',
      prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
      nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });

  // Slick Single
  $(document).ready(function(){
  $('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    speed: 500,
    cssEase: 'linear',
    fade: true,
  });
});

  // Animation
  const animItems = document.querySelectorAll('._anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      }
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
  }

  // Languages
  var arrLang = {
    'en': {
      'home': 'Home',
      'about': 'About',
      'wines': 'Wines',
      'team': 'Team',
      'blog': 'Blog',
      'contact': 'Contact us',
      'achievments': 'Achievements',
      'achievments2': 'We are proud of what we have achieved through our joint efforts',
      'products': 'Products',
      'products2': 'As a source of our inspiration',
      'contact2': 'Contact us',
      'message': 'Send',
      'address': 'Address',
      'winery': 'Winery',
      'phone': 'Phone number',
      'name': 'Your name *',
      'email': 'Your email *',
      'message2': 'Your message'
    },
    'ru': {
      'home': 'Главная',
      'about': 'О нас',
      'wines': 'Вина',
      'team': 'Команда',
      'blog': 'Блог',
      'contact': 'Контакты',
      'achievments': 'Достижения',
      'achievments2': 'Мы гордимся тем, чего достигли, нашими совместными усилиями',
      'products': 'Продукция',
      'products2': 'Как источник нашего вдохновления',
      'contact2': 'Связаться с нами',
      'message': 'Отправить',
      'address': 'Адрес',
      'winery': 'Винзавод',
      'phone': 'Номер телефона',
      'name': 'Ваше имя *',
      'email': 'Ваш email *',
      'message2': 'Ваше сообщение *'
    },
    'ro': {
      'home': 'Acasă',
      'about': 'Despre noi',
      'wines': 'Vinuri',
      'team': 'Echipă',
      'blog': 'Blog',
      'contact': 'Contacte',
      'achievments': 'Premii și realizări',
      'achievments2': 'Suntem mândri de ceea ce am obținut, datorită eforturilor noastre commune',
      'products': 'Produse',
      'products2': 'Ca sursă a inspirației noastre',
      'contact2': 'Contactează-ne',
      'message': 'Trimiteți un mesaj',
      'address': 'Adresa',
      'winery': 'Vinăria',
      'phone': 'Telefon',
      'name': 'Nume *',
      'email': 'Email *',
      'message2': 'Mesaj *'
    }
  }

  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });

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
