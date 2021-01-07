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
      'message': 'Send message',
      'address': 'Address',
      'winery': 'Winery',
      'phone': 'Phone number',
      'name2': 'Your name',
      'email2': 'Your email',
      'message2': 'Your message',
      'team1': 'Alexandr Neruh',
      'position1': 'Chief director',
      'experience1': 'Work experience 50 years',
      'team2': 'Adrian Cojocaru',
      'position2': 'Head of sales department',
      'experience2': 'Work experience 16 years',
      'team3': 'Victor Florica',
      'position3': 'Executive director Kazayak Vin',
      'experience3': 'Work experience 24 years',
      'teaminfo': 'More than 300 employees work in the factories to create first-class wines. Every day, each of us makes an invaluable contribution to the development of the company. It is our unity of thought, ideas and boundless love for wine production that helps us achieve our goals and be one big family',
      'service1': 'High product quality',
      'service2': 'Fair pricing policy',
      'service3': 'Efficiency of order fulfillment',
      'serviceinfo1': 'The most modern technological complex for the processing of grapes and grape must, allows to preserve and transfer wine all the useful substances, vitamins in grapes, as well as the special organic power laid by nature in the soil',
      'serviceinfo2': 'Our company closely monitors changes in market conditions. Each product has an honest firm price, confirmed by quality and high technology',
      'serviceinfo3': 'Most of the wines are bottled in exclusive bottles of excellent design, and the trade policy is focused on any clients requests, up to the possibility of issuing an authors assortment with the execution of an order within 25 days',
      'about1': 'The holding includes two wine companies "Suvorov - Vin" (2003) and "Kazayak - Vin" (1985). The first association with the "Suvorov - Vin" holding is a wide range of wines and modern technologies. We own 500 hectares of vineyards, located in the southern part of Moldova, where the climate is perfect for quality grape growing. The companies strategy is to reveal to the whole world the exceptional quality of Moldovan wines, through skillful marketing and various cultural aspects of Moldova',
      'about2': 'The holding produces a wide range of dry, semi-dry, semi-sweet, dessert wines, as well as natural fruit wines, mulled wine (natural infusion of 16 medicinal herbs and red currants), punch (natural wine with added fruit juices), wines with low alcohol content, sparkling wines , vermouths and liqueurs. Our portfolio is revealed in impressive collections such as: Green Lee, Storks, Kazayak, Nicole, Bon Voyage, Sang de Terre, Monteco, etc.',
      'about3': 'Marked the rise of the company to a new level, becoming a leader in the production and export of bottled wines from the Republic of Moldova, with an annual volume of about 10 million bottles and 20% of the total export volume. Our wines have found vocation in countries such as Poland, Germany, Czech Republic, Slovakia, Lithuania, Latvia, Romania, Croatia, Bosnia, Belarus, Ukraine, Russia, Kazakhstan, Israel, Greece, Ghana, Nigeria, China, Japan, USA, and of course same in Moldova',
      'about3.1': '2008 for „Suvorov – Vin”',
      'about4': 'Our wines are produced in strict accordance with European winemaking requirements. Since 2015, red wines have been granted the IGP category (Protected Geographical Indications). The company applies modern methods and technologies for processing grapes using membrane filtration, cold processing and sterile bottling processes. The production process is subject to constant monitoring in combination with the secular traditions of Moldovan winemaking, practical experience and innovative technologies',
      'about4.1': 'Category „IGP"',
      'barza1': 'Dry white wine with a floral, balanced aroma, with a pleasant taste, well-defined, full of finesse, with high freshness',
      'barza1.1': 'Vintage: 2018',
      'barza1.2': 'Wine type: White dry',
      'barza1.3': 'Grapes: 100% Chardonnay'

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
      'name2': 'Ваше имя',
      'email2': 'Ваш email',
      'message2': 'Ваше сообщение',
      'team1': 'Александр Нерух',
      'position1': 'Главный директор',
      'experience1': 'Опыт работы 50 лет',
      'team2': 'Адриан Кожокару',
      'position2': 'Начальник отдела продаж',
      'experience2': 'Опыт работы 16 лет',
      'team3': 'Виктор Флорика',
      'position3': 'Исполнительный директор Kazayak Vin',
      'experience3': 'Опыт работы 24 года',
      'teaminfo': 'Более 300 сотрудников трудится на предприятиях для создания первоклассных вин. Изо дня в день каждый из нас вносит неоценимый вклад в развитие компании. Именно наше единство мысли, идей и безграничной любви к производству вина помогает нам достигать поставленных целей и быть единным целым',
      'service1': 'Высокое качество продукции',
      'service2': 'Честная ценовая политика',
      'service3': 'Оперативность выполнения заказов',
      'serviceinfo1': 'Самый современный технологический комплекс по переработке винограда и виноградного сусла, позволяет сохранить и передать вину все имеющиеся в винограде полезные вещества, витамины, а также особую органическую силу заложенную природой в почву',
      'serviceinfo2': 'Наша компания внимательно следит за изменениями условий рынка. За каждым продуктом стоит честная твердая цена, подтверждающаяся качеством и высшими технологиями',
      'serviceinfo3': 'Большая часть вин разливается в эксклюзивные бутылки, отменного дизайна, а торговая политика ориентирована на любые запросы клиента, вплоть до возможности выпуска авторского ассортимента с выполнением заказа в течение 25 дней',
      'about1': 'Холдинг включает в себя две винные компании „Suvorov – Vin” (2003г) и „Kazayak – Vin” (1985г). Первая ассоциация с холдингом  „Suvorov – Vin” – это обширная линейка вин и современные технологии. Под нашим владением 500 гектаров виноградников, располагающихся в южной части Молдовы, где климат совершенен для качественного выращивания винограда. Стратегия компании заключается в раскрытии всему миру исключительного качества молдавских вин, через умелый маркетинг и различные культурные аспекты Молдовы',
      'about2': 'Холдинг производит широкий ассортимент сухих, полусухих, полусладких, десертных вин, а так же натуральные фруктовые вина, глинтвейн (натуральное вливание 16 целебных трав и красной смородины), крюшон (натуральное вино с добавлением фруктовых соков), вина с низким содержанием алкоголя, игристые вина, вермуты и ликеры. Наше портфолио раскрывается во внушительных коллекциях, таких как: Green Lee, Storks, Kazayak, Nicole, Bon Voyage, Sang de Terre, Monteco и др.',
      'about3': 'знаменовал подъем компании на новый уровень, став лидером в производстве и экспорте бутылочных вин из Республики Молдова, с годовым объёмом около 10 000 000 бутылок и 20% от общего объёма экспорта. Наши вина нашли призвание в таких странах как Польша, Германия, Чехия, Словакия, Литва, Латвия, Румыния, Хорватия, Босния, Беларусь, Украина, Росиия, Казахстан, Израиль, Греция, Гана, Нигерия, Китай, Япония, США, и конечно же в Молдове',
      'about3.1': '2008 год для „Suvorov – Vin”',
      'about4': 'Наши вина производятся в строгом соответствии с европейскими требованиями виноделия. С 2015 года красным винам предоставили категорию IGP ( защищенные географические обозначения ). Компания применяет современые методы и технологии переработки винограда, используя мембранную фильтрацию, холодную обработку и стерильные процессы розлива. Производственный процесс подлежит постоянному контролю в сочетании со светскими традициями молдавского виноделия, практического опыта и инновационных технологий',
      'about4.1': 'Категория „IGP"',
      'barza1': 'Белое сухое вино с цветочным, сбалансированным ароматом, приятным вкусом, четко очерченным, полным утонченности и свежим послевкусием',
      'barza1.1': 'Год урожая: 2018',
      'barza1.2': 'Тип вина: Белое сухое',
      'barza1.3': 'Виноград: 100% Шардоннэ'
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
      'message': 'Trimiteți mesaj',
      'address': 'Adresa',
      'winery': 'Vinăria',
      'phone': 'Telefon',
      'name2': 'Nume',
      'email2': 'Email',
      'message2': 'Mesaj',
      'team1': 'Alexandr Neruh',
      'position1': 'Director',
      'experience1': 'Experiență profesională de 50 de ani',
      'team2': 'Adrian Cojocaru',
      'position2': 'Sef departament vanzari',
      'experience2': 'Experiență profesională de 16 ani',
      'team3': 'Victor Florica',
      'position3': 'Director executiv Kazayak Vin',
      'experience3': 'Experiență profesională 24 de ani',
      'teaminfo': 'Compania noastra are mai mult de 300 de angajati orientați la crearea produselor de vin de primă clasă. În fiecare zi, fiecare dintre noi contribuie integral la dezvoltarea întreprinderii. Suntem un întreg, care este ținut împreună, datorită unității de gândire, unitatea de idei și de iubire fără margini pentru producerea vinului',
      'service1': 'Calitate ridicată a produsului',
      'service2': 'Politica corectă de prețuri',
      'service3': 'Eficiența îndeplinirii comenzii',
      'serviceinfo1': 'Cel mai modern complex tehnologic pentru prelucrarea strugurilor și mustului de struguri, vă permite să păstrați și să transferați vinului toate substanțele utile, vitaminele din struguri, precum și puterea organică specială depusă de natură în sol',
      'serviceinfo2': 'Compania noastră monitorizează îndeaproape schimbările în condițiile pieței. Fiecare produs are un preț ferm onest, confirmat de calitate și tehnologie înaltă',
      'serviceinfo3': 'Majoritatea vinurilor sunt îmbuteliate în sticle exclusive de design excelent, iar politica comercială se concentrează pe cererile oricărui client, până la posibilitatea emiterii unui sortiment de autor cu executarea comenzii în termen de 25 de zile',
      'about1': 'Exploatația include două companii de vinuri "Suvorov - Vin" (2003) și "Kazayak - Vin" (1985). Prima asociere cu exploatația „Suvorov - Vin” este o gamă largă de vinuri și tehnologii moderne. Deținem 500 de hectare de podgorii, situate în partea de sud a Moldovei, unde clima este perfectă pentru cultivarea strugurilor de calitate. Strategia companiei este de a dezvălui lumii întregi calitatea excepțională a vinurilor moldovenești, prin marketing priceput și diverse aspecte culturale ale Moldovei',
      'about2': 'Exploatația produce o gamă largă de vinuri de desert uscate, demiseci, demi-dulci, precum și vinuri naturale din fructe, vin fiert (infuzie naturală de 16 ierburi medicinale și coacăze roșii), punch (vin natural cu sucuri de fructe adăugate), vinuri cu conținut scăzut de alcool, vinuri spumante , vermuturi și lichioruri. Portofoliul nostru este dezvăluit în colecții impresionante precum: Green Lee, Storks, Kazayak, Nicole, Bon Voyage, Sang de Terre, Monteco etc.',
      'about3': 'A marcat creșterea companiei la un nou nivel, devenind lider în producția și exportul de vinuri îmbuteliate din Republica Moldova, cu un volum anual de aproximativ 10 milioane de sticle și 20% din volumul total al exporturilor. Vinurile noastre și-au găsit vocația în țări precum Polonia, Germania, Republica Cehă, Slovacia, Lituania, Letonia, România, Croația, Bosnia, Belarus, Ucraina, Rusia, Kazahstan, Israel, Grecia, Ghana, Nigeria, China, Japonia, SUA și bineînțeles la fel și în Moldova',
      'about3.1': '2008 pentru „Suvorov – Vin”',
      'about4': 'Vinurile noastre sunt produse în strictă conformitate cu cerințele europene de vinificare. Din 2015, vinurilor roșii li se acordă categoria IGP (Indicații geografice protejate). Compania aplică metode și tehnologii moderne pentru prelucrarea strugurilor folosind filtrarea prin membrană, procesarea la rece și procesele de îmbuteliere sterile. Procesul de producție este supus unei monitorizări constante în combinație cu tradițiile seculare ale vinificației moldovenești, experiența practică și tehnologiile inovatoare',
      'about4.1': 'Categoria „IGP"',
      'barza1': 'Vin sec alb cu o aromă de tip floral, echilibrat, cu un gust plăcut, bine conturat, plin de fineţe, cu prospeţimea ridicată',
      'barza1.1': 'Anul recoltei: 2018',
      'barza1.2': 'Tipul de vin: Alb sec',
      'barza1.3': 'Soi: 100% Chardonnay'
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
