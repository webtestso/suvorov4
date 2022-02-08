<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Leading Moldavian wine producer. Holding owns vineyards of over 500 hectares, 2 factories and more than 300 employees.">
    <meta name="author" content="Alexandr Neruh">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
    <title>Kazayak and Suvorov Vin</title>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet" type="text/css">
    <!-- Font Awesome icons-->
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script>
        $(document).ready(function() {
            $('.content_toggle').click(function() {
                $('.content_block').slideToggle(300);
                return false;
            });
        });
    </script>
    <script type="text/javascript">
          function sendEmail() {
              var name = $("#name");
              var email = $("#email");
              var subject = $("#subject");
              var body = $("#form_message");
              var phone = $("#phone");

              if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(form_message) && isNotEmpty(phone)) {
                  $.ajax({
                     url: 'sendEmail.php',
                     method: 'POST',
                     dataType: 'json',
                     data: {
                         name: name.val(),
                         email: email.val(),
                         subject: subject.val(),
                         form_message: form_message.val(),
                         phone: phone.val()
                     }, success: function (response) {
                          $('#contact_form')[0].reset();
                          $('.sent-notification').text("Message Sent Successfully");
                     }
                  });
              }
          }

          function isNotEmpty(caller) {
              if (caller.val() == "") {
                  caller.css('border', '1px solid red');
                  return false;
              } else
                  caller.css('border', '');

              return true;
          }
      </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    <!-- Core theme JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/classie/1.0.1/classie.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <script src="ajax_contact.js"></script>
    <!-- Preloader -->
    <script src="js/queryloader2.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        window.addEventListener('DOMContentLoaded', function() {
            new QueryLoader2(document.querySelector("body"), {
                barColor: "#FEFBF3",
                backgroundColor: "#1B1717",
                percentage: true,
                barHeight: 1,
                minimumTime: 200,
                fadeOutTime: 1000
            });
        });
    </script>
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
    <link href="css/demo.css" rel="stylesheet">
    <link href="css/component.css" rel="stylesheet">
    <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">

</head>

<body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top"></a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">Menu<img class="icons_contact" src="assets/img/icons/noun-menu.svg" alt="hamburger"></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav" style="margin-left: 5rem;">
                    <li class="active nav-item cl-effect-4"><a class="nav-link js-scroll-trigger lang" key="home" href="index.html">Главная</a></li>
                    <li class="nav-item cl-effect-4"><a class="nav-link js-scroll-trigger lang" key="about" href="#about">О нас</a></li>
                    <li class="nav-item cl-effect-4"><a class="nav-link js-scroll-trigger lang" key="wines" href="wines.html">Вина</a></li>
                    <li class="nav-item cl-effect-4"><a class="nav-link js-scroll-trigger lang" key="team" href="#team">Команда</a></li>
                    <li class="nav-item cl-effect-4"><a class="nav-link js-scroll-trigger lang" key="blog" href="blog/index.html">Новости</a></li>
                    <li class="nav-item cl-effect-4"><a class="nav-link js-scroll-trigger lang" key="contact" href="#contact">Контакты</a></li>
                    <li class="header-item-lang-en"><button id="en" class="translate"><img class="flags_icons" src="assets/img/english_flag.png" alt="english_flag"></button></li>
                    <li class="header-item-lang-en"><button id="ru" class="translate"><img class="flags_icons" src="assets/img/russian.svg" alt="russian_flag"></button></li>
                    <li class="header-item-lang-en"><button id="ro" class="translate"><img class="flags_icons" src="assets/img/romanian.png" alt="romanian_flag"></button></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Masthead-->
    <div class="logo_gussy_centred">
      <div class="img-with-text">
          <img class="blends-calendar-fluid" src="assets/img/logo_gussy.png" alt="Kazayak-Vin">
          <p class="blends-calendar-txt lang" key="blends_calendar">Произведено в Молдове – Признано во всем мире</p>
        </div>
    </div>
                <img class="header-images" src="assets/img/merlot_barik.webp" alt="merlot_barik">
    <!-- About-->
    <section class="page-section" id="about">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading lang" style="margin-bottom: 3rem;" key="about">О нас</h2>
            </div>
            <div class="row wrap-service-26">
                <div class="col-md-6 align-self-center wow animate__animated animate__slideInLeft">
                    <div class="max-box">
                        <p class="mt-3 lang" key="about1">Холдинг включает в себя две винные компании „Suvorov – Vin” (2003г) и „Kazayak – Vin” (1958г). Первая ассоциация с холдингом „Suvorov – Vin” – это обширная линейка вин и современные технологии. Под нашим владением 500 гектаров
                            виноградников, располагающихся в южной части Молдовы, где климат совершенен для качественного выращивания винограда. Стратегия компании заключается в раскрытии всему миру исключительного качества молдавских вин, через умелый
                            маркетинг и различные культурные аспекты Молдовы</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src="assets/img/about/about_1.webp" alt="about_1">
                </div>
            </div>
            <div class="row wrap-service-26 mb-4 pt-3">
                <div class="col-md-6">
                    <img class="img-fluid card-1" src="assets/img/about/about_2.webp" alt="about_2">
                </div>
                <div class="col-md-6 align-self-center wow animate__animated animate__slideInRight">
                    <p class="mt-3 lang" key="about2">„Kazayak–Vin” „Suvorov–Vin” производит широкий ассортимент сухих, полусухих, полусладких, десертных вин, а так же натуральные фруктовые вина, глинтвейн (натуральное вливание 16 целебных трав и красной смородины), крюшон (натуральное
                        вино с добавлением фруктовых соков), вина с низким содержанием алкоголя, игристые вина, вермуты и ликеры. Наше портфолио раскрывается во внушительных коллекциях, таких как: Green Lee, Storks, Kazayak, Nicole, Bon Voyage, Sang de
                        Terre, Monteco и др.</p>
                </div>
            </div>
            <div class="row wrap-service-26">
                <div class="col-md-6 align-self-center wow animate__animated animate__slideInLeft">
                    <div class="max-box">
                        <h3 class="mt-3 align-self-center lang" style="display: flex; justify-content: center;" key="about3.1">2008 год для „Suvorov – Vin”</h3>
                        <p class="mt-3 lang" key="about3">Ознаменовал подъем компании на новый уровень, став лидером в производстве и экспорте бутылочных вин из Республики Молдова, с годовым объёмом около 10 000 000 бутылок и 20% от общего объёма экспорта. Наши вина нашли призвание в
                            таких странах как Польша, Германия, Чехия, Словакия, Литва, Латвия, Румыния, Хорватия, Босния, Беларусь, Украина, Росиия, Казахстан, Израиль, Греция, Гана, Нигерия, Китай, Япония, США, и конечно же в Молдове
                        </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid card-1" src="assets/img/about/about_3.webp" alt="about_3">
                </div>
            </div>
            <div class="row wrap-service-26 mt-4 pt-3">
                <div class="col-md-6">
                    <img class="img-fluid card-1" src="assets/img/about/about_4.webp" alt="about_4">
                </div>
                <div class="col-md-6 align-self-center wow animate__animated animate__slideInRight">
                    <h3 class="mt-3 lang" key="about4.1" style="display: flex; justify-content: center;">Категория „IGP"</h3>
                    <p class="mt-3 lang" key="about4">Наши вина производятся в строгом соответствии с европейскими требованиями виноделия. С 2015 года красным винам предоставили категорию IGP (защищенные географические обозначения). Компания применяет современые методы и технологии переработки
                        винограда, используя мембранную фильтрацию, холодную обработку и стерильные процессы розлива. Процесс производства подлежит постоянному контролю в сочетании с национальными традициями молдавского виноделия, практического опыта
                        и инновационных технологий</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Services-->
    <section class="page-section" id="services">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading lang" key="achievments">Достижения</h2>
                <h3 class="section-subheading lang" key="achievments2">Мы гордимся тем, чего достигли, нашими совместными усилиями</h3>
            </div>
            <div class="row text-center">
                <div class="col-md-4">
                    <span class="wow animate__animated animate__zoomIn"><img class="icons_suvorov" src="assets/img/icons/noun-product-quality-ring.svg" alt="product-quality"></span>
                    <h4 class="my-3 lang" key="service1">Высокое качество продукции</h4>
                    <p class="lang" key="serviceinfo1">Самый современный технологический комплекс по переработке винограда и виноградного сусла, позволяет сохранить и передать вину все имеющиеся в винограде полезные вещества, витамины, а также особую органическую силу заложенную природой
                        в почву</p>
                </div>
                <div class="col-md-4">
                    <span class="wow animate__animated animate__zoomIn"><img class="icons_suvorov" src="assets/img/icons/noun-price.svg" alt="fair-pricing"></span>
                    <h4 class="my-3 lang" key="service2">Честная ценовая политика</h4>
                    <p class="lang" key="serviceinfo2">Наша компания внимательно следит за изменениями условий рынка. За каждым продуктом стоит честная твердая цена, подтверждающаяся качеством и иновациооными технологиями</p>
                </div>
                <div class="col-md-4">
                    <span class="wow animate__animated animate__zoomIn"><img class="icons_suvorov" src="assets/img/icons/noun-efficiency.svg" alt="efficiency"></span>
                    <h4 class="my-3 services-min-width lang" key="service3">Оперативность выполнения заказов</h4>
                    <p class="lang" key="serviceinfo3">Большая часть вин разливается в эксклюзивные бутылки, отменного дизайна, а торговая политика ориентирована на любые запросы клиента, вплоть до возможности выпуска авторского ассортимента с выполнением заказа в течение 25 дней</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Portfolio Grid-->
    <section class="page-section" style="background-image: url('assets/img/background_wine.webp'); background-size: cover;" id="portfolio">
        <div class="container-fluid">
            <div class="text-center">
                <h2 class="section-heading lang" key="products">Продукция</h2>
                <h3 class="section-subheading lang" key="products2">Как источник нашего вдохновления</h3>
            </div>
            <div class="image-slider swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="col-lg-12 mb-4">
                            <div class="portfolio-item">
                                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="image-slider-bottles" src="assets/img/wines/alb_de_kazayak.png" alt="alb_de_kazayak">
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading" style="margin-left: 75px; white-space: nowrap;">Alb de Kazayak</div>
                                    <div class="portfolio-caption-subheading"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="col-lg-12 mb-4">
                            <div class="portfolio-item">
                                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="image-slider-bottles" src="assets/img/wines/negru_de_kazayak.png" alt="negru_de_kazayak">
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading" style="margin-left: 75px; white-space: nowrap;">Negru de Kazayak</div>
                                    <div class="portfolio-caption-subheading"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="col-lg-12 mb-4">
                            <div class="portfolio-item">
                                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="image-slider-bottles" src="assets/img/wines/rose_de_kazayak.png" alt="rose_de_kazayak">
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading" style="margin-left: 75px; white-space: nowrap;">Rose de Kazayak</div>
                                    <div class="portfolio-caption-subheading"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="col-lg-12 mb-4">
                            <div class="portfolio-item">
                                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="image-slider-bottles" src="assets/img/wines/rosu_de_kazayak.png" alt="rosu_de_kazayak">
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading" style="margin-left: 75px; white-space: nowrap;">Rosu de Kazayak</div>
                                    <div class="portfolio-caption-subheading"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </section>
    <!-- Team-->
    <section class="page-section" id="team">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading lang" style="margin-bottom: 5rem;" key="team">Команда</h2>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle wow animate__animated animate__zoomIn" src="assets/img/team/alexandr_neruh.webp" alt="alexandr_neruh">
                        <h4 class="lang" key="team1">Александр Нерух</h4>
                        <p class="lang" key="position1" style="font-style: italic; color: #B00000;">Основатель холдинга</p>
                        <p class="lang" key="experience1">Опыт работы 50 лет</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle wow animate__animated animate__zoomIn" src="assets/img/team/nikolai_popov.webp" alt="nikolai_popov">
                        <h4 class="lang" key="team5">Николай Попов</h4>
                        <p class="lang" key="position5" style="font-style: italic; color: #B00000;">Исполнительный директор Suvorov-Vin</p>
                        <p class="lang" key="experience5">Опыт работы 12 лет</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle wow animate__animated animate__zoomIn" src="assets/img/team/viktor_florika.webp" alt="viktor_florika">
                        <h4 class="lang" key="team3">Виктор Флорика</h4>
                        <p class="lang" key="position3" style="font-style: italic; color: #B00000;">Исполнительный директор Kazayak-Vin</p>
                        <p class="lang" key="experience3">Опыт работы 24 года</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle wow animate__animated animate__zoomIn" src="assets/img/team/andrian_cojovaru.webp" alt="andrian_cojovaru">
                        <h4 class="lang" key="team2">Адриан Кожокару</h4>
                        <p class="lang" key="position2" style="font-style: italic; color: #B00000;">Начальник отдела продаж</p>
                        <p class="lang" key="experience2">Опыт работы 16 лет</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle wow animate__animated animate__zoomIn" src="assets/img/team/inga.webp" alt="inga">
                        <h4>Inga Manuilenco</h4>
                        <p class="lang" key="position4" style="font-style: italic; color: #B00000;">Инженер-технолог</p>
                        <p class="lang" key="experience4">Опыт работы 25 лет</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <p class="large lang" key="teaminfo">Более 300 сотрудников трудится на предприятиях для создания первоклассных вин. Изо дня в день каждый из нас вносит неоценимый вклад в развитие компании. Именно наше единство мысли, идей и безграничной любви к производству вина помогает
                        нам достигать поставленных целей и быть единным целым</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Winemakers -->
    <section class="page-section">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading lang" style="margin-bottom: 5rem;" key="winemaker">Виноделы</h2>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="team-member_wine">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img class="mx-auto wow animate__animated animate__zoomIn" src="assets/img/winemakers/viktor_chira.webp" alt="viktor_chira">
                                </div>
                                <div class="flip-card-back">
                                    <img class="mx-auto" src="assets/img/winemakers/certificate_chira.webp" alt="certificate_chira">
                                </div>
                            </div>
                        </div>
                        <h4 class="lang" key="team7">Виктор Кира</h4>
                        <p class="lang" key="position7" style="font-style: italic; color: #B00000;">Винодел Suvorov-Vin</p>
                        <p class="lang" key="experience7">Опыт работы 46 лет</p>
                        <p class="lang" key="winemaker2">Лучший винодел Республики Молдова 2019 года</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="team-member_wine">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img class="mx-auto wow animate__animated animate__zoomIn" src="assets/img/winemakers/anatolie_codjebash.webp" alt="anatolie_codjebash">
                                </div>
                                <div class="flip-card-back">
                                    <img class="mx-auto" src="assets/img/winemakers/certificate_codjebash.webp" alt="certificate_codjebash">
                                </div>
                            </div>
                        </div>
                        <h4 class="lang" key="team8">Анатолий Коджебаш</h4>
                        <p class="lang" key="position8" style="font-style: italic; color: #B00000;">Винодел Kazayak-Vin</p>
                        <p class="lang" key="experience8">Опыт работы 26 лет</p>
                        <p class="lang" key="winemaker3">Лучший винодел Республики Молдова 2020 года</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <p class="large lang" key="winemaker_info">«Хорошее вино — как хороший фильм: быстро заканчивается, оставляя великолепное послевкусие; с каждым глотком в нем открывается что-то новое, и как это часто бывает с фильмами — оно рождается и возрождается в каждом новом ценителе»
                        Так и наши виноделы, как наиболее искусные и опытные режиссёры, из года в год, трудятся над созданием своего лучшего творения. А мы смакуем кадры и наслаждаемся нотками великого произведения и жаждем, чтобы в следующий раз, наш
                        Творец получил очередной трофей - Золотую медаль!</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact-->
    <section class="page-section" id="contact">
      <div class="text-center">
        <h2 class="section-heading lang" style="margin-bottom: 5rem;" key="contact">Контакты</h2>
      </div>
      <figure class="full-width">
        <iframe src="https://snazzymaps.com/embed/243085" width="100%" height="600px" style="border:none;"></iframe>
      </figure>
      <figure class="full-width">
        <div class="wrapper animated bounceInLeft">
          <div class="company-info">
            <ul>
              <li class="margin_for_li"><img class="icons_contact" src="assets/img/icons/noun-location-map.svg" alt="address"> Главный офис: str. Columna 108, Chișinău, MD</li>
              <li class="margin_for_li_more"> Винзавод Suvorov-Vin: str. Tighina 8a, Căuşeni, MD</li>
              <li class="margin_for_li_more"> Винзавод Kazayak-Vin: str. Lenin 2, s. Cazaclia, r. Gagauza, MD</li>
              <li class="margin_for_li"><img class="icons_contact" src="assets/img/icons/noun-answer.svg" alt="telephone"> Номер телефона: +373 (22) 22-91-98 / 22-91-39</li>
              <li class="margin_for_li"><img class="icons_contact" src="assets/img/icons/noun-email.svg" alt="email"> Email: suvorovvin@driada-wine.com</li>
              <li class="margin_for_li"><img class="icons_contact" src="assets/img/icons/noun-pdf.svg" alt="download">Презентация компании и полный ассортимент продукции: <br>
              <a class="download_pdf" href="assets/img/Prezent_Suvorov-Vin_2020_Plus_New_Product.pdf" target="_blank">Скачать PDF</a></li>

            </ul>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <button class="icon-btn facebook">
            <a class="link" href="https://www.facebook.com/KazayakWinery/" target="_blank">
              <img class="icons_contact" src="assets/img/icons/noun-facebook.svg" alt="facebook">
            </a>
            <button class="icon-btn instagram">
              <a class="link" href="https://www.instagram.com/kazayakvin/" target="_blank">
                <img class="icons_contact" src="assets/img/icons/noun-instagram.svg" alt="instagram">
              </a>
        </div>
      </div>
          </div>
          <div class="container mt-5">

            <h2>Implement Google reCAPTCHA in PHP Contact Form</h2>
            <?php include('scripts/form.php'); ?>
            <!-- Error messages -->
            <?php if(!empty($response)) {?>
            <div class="form-group col-12 text-center">
              <div class="alert text-center <?php echo $response['status']; ?>">
                <?php echo $response['message']; ?>
              </div>
            </div>
            <?php }?>
            <!-- Contact form -->
            <form action="" name="contactForm" id="contactForm" method="post" enctype="multipart/form-data" novalidate>
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" name="name" id="name">
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" name="email" id="email">
              </div>
              <div class="form-group">
                <label>Subject</label>
                <input type="text" class="form-control" name="subject" id="subject">
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea class="form-control" rows="4" name="message" id="message"></textarea>
              </div>
              <div class="form-group">
                <!-- Google reCAPTCHA block -->
                <div class="g-recaptcha" data-sitekey="6LdcoGYeAAAAAGTTFWKcvw5LwkpHLSUkHzti-UoZ"></div>
              </div>
              <div class="form-group">
                <input type="submit" name="send" value="Send" class="btn btn-dark btn-block">
              </div>
            </form>
          </div>
        </div>
      </figure>
    </section>
    <!-- Footer-->
    <footer class="footer">
        <div class="container">
            <div class="row text-center">
        <div class="col-lg-12">Copyright © Suvorov and Kazayak 2020-2022</div>
      </div>
    </div>
  </footer>
  <!-- Portfolio Modals-->
  <!-- Modal 1-->
  <div class="portfolio-modal modal animate__animated" data-animate-in='animate__lightSpeedInRight' data-animate-out='animate__lightSpeedOutRight' id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="close-icon"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="modal-body">
                <!-- Project Details Go Here-->
                <div class="row">
                  <div class="col-sm">
                    <h2 class="text-uppercase">Alb de Kazayak</h2>
                    <p class="item-intro"></p>
                    <img class="suvorov-fluid d-block mx-auto" src="assets/img/wines/alb_de_kazayak.png" alt="alb_de_kazayak">
                    <div class="medals_flex" style="margin-top: -2rem;">
                      <img class="medals" src="assets/img/medals/berliner_gold_2020_new.png" alt="berliner_gold_2020" style="margin-left: -1rem;">
                      <img class="medals" src="assets/img/medals/viorica_chel_du_vin_2019.jpg" alt="viorica_chel_du_vin_2019" style="margin-right: 1rem;">
                      <img class="medals" src="assets/img/medals/berliner_silver_2021.png" alt="berliner_silver_2021">
                      <img class="medals" src="assets/img/medals/silver_mundus_2020_new.png" alt="silver_mundus_2020">
                    </div>
                   <div class="medals_flex">
                      <img class="medals" src="assets/img/medals/international-wine-challenge-bronze-2021.png" alt="international-wine-challenge-bronze-2021">
                    </div>
                  </div>
                  <div class="col-sm" style="text-align: left;">
                    <ul class="list-inline">
                      <div class="align-self-center modal_fix_info"><img class="modal_inside_icons" src="assets/img/grape.png" alt="grape">
                        <li class="lang" key="alb2" style="margin-left: 4rem;">Год урожая: 2019</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/bar.png" alt="bar">
                        <li class="lang" key="alb3" style="margin-left: 4rem;">Тип вина: Белое сухое</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/grapes.png" alt="grapes">
                        <li class="lang" key="alb4" style="margin-left: 4rem;">Виноград: Aligote 33% Muscat Ottonel 33% Sauvignon Blanc 33%</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/food.png" alt="food">
                        <li class="lang" key="alb5" style="margin-left: 4rem;">Сочетание вина с едой: Его можно подавать как закуску, но он идеально сочетается с мягкими сырами, белым мясом, нежной говядиной, рыбой, морепродуктами и овощами на гриле,
                          фруктами, сладостями. Подавать при температуре 8-10°C</li>
                      </div>
                    </ul>
                    <a class="btn_more_less content_toggle lang hvr-shutter-out-vertical" key="knowmore" href="#">Узнать больше</a>
                    <div class="content_block" style="display: none;">
                      <p class="item-intro lang" key="alb1">Вино светло-соломенного цвета с зеленоватым оттенком, отражает изящную комбинацию между Aligote и Muscat Ottonel, прекрасно подчеркнутым нежным Sauvignon Blanc. Сложный аромат
                        покоряет тонкими
                        нотами барбариса, цитрусовых и экзотических фруктов. Обладает свежим, полным, гармоничным вкусом, в котором сбалансированная кислотность и карамельные оттенки находятся в идеальном равновесии. Послевкусие приходит к вам с
                        ароматами белой вишни и крыжовника, усиленными цитрусовыми и экзотическими нотками</p>
                    </div>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/N8VUQpl8Rbs?controls=0" title="Kazayak video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 2-->
  <div class="portfolio-modal modal animate__animated" data-animate-in='animate__lightSpeedInRight' data-animate-out='animate__lightSpeedOutRight' id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="close-icon"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="modal-body">
                <!-- Project Details Go Here-->
                <div class="row">
                  <div class="col-sm">
                    <h2 class="text-uppercase">Negru de Kazayak</h2>
                    <p class="item-intro"></p>
                    <img class="suvorov-fluid d-block mx-auto" src="assets/img/wines/negru_de_kazayak.png" alt="negru_de_kazayak">
                    <div class="medals_flex" style="margin-top: -2rem;">
                      <img class="medals" src="assets/img/medals/cmb2021-gold-medal.png" alt="cmb2021-gold-medal">
                      <img class="medals" src="assets/img/medals/decanter_bronze_2021.webp" alt="decanter_bronze_2021">
                      <img class="medals" src="assets/img/medals/decanter_commended_2021.webp" alt="decanter_commended">
                    </div>
                  </div>
                  <div class="col-sm" style="text-align: left;">
                    <ul class="list-inline">
                      <div class="align-self-center modal_fix_info"><img class="modal_inside_icons" src="assets/img/grape.png" alt="grape">
                        <li class="lang" key="negru2" style="margin-left: 4rem;">Год урожая: 2018 Вино выдержанное</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/bar.png" alt="bar">
                        <li class="lang" key="negru3" style="margin-left: 4rem;">Тип вина: Красное сухое</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/grapes.png" alt="grapes">
                        <li class="lang" key="negru4" style="margin-left: 4rem;">Виноград: Saperavi 40% Cabernet Sauvignon 30% Merlot 30%</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/food.png" alt="food">
                        <li class="lang" key="negru5" style="margin-left: 4rem;">Сочетание вина с едой: Предлагаем его в качестве дополнения к традиционным аутентичным блюдам: пастрами из баранины, утка или гусь в духовке с капустой или свиные
                          ребрышки с арахисом</li>
                      </div>
                    </ul>
                    <a class="btn_more_less content_toggle lang hvr-shutter-out-vertical" key="knowmore" href="#">Узнать больше</a>
                    <div class="content_block" style="display: none;">
                      <p class="item-intro lang" key="negru1">Мужское вино, со сбалансированной и четко выраженной структурой. Потомок сортов Саперави, Каберне-Совиньон и Мерло. Это вино - событие, в аромате которого интенсивно и приятно сочетаются
                        ягоды, черная смородина и черника, тонко подчеркнутые нотами дуба. После того, как глаз созерцает цвет, очаровательный темно-рубиновый вкус, в котором преобладают черные фрукты, инжир и лакрица, открывается крепкое,
                        сбалансированное вино с хорошо созревшими танинами, гармонично интегрированное в Каберне Совиньон. При благоприятных условиях хранения это вино можно заложить в коллекцию на выдержку</p>
                    </div>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/TlkD4-hhqRs?controls=0" title="Kazayak video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <a class="btn_more_less content_toggle lang hvr-shutter-out-vertical" key="videomore" href="#">Следующее видео/Румынский перевод</a>
                      <div class="content_block" style="display: none; margin-top: 1rem;">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/5gcEUvyaIFE?controls=0" title="Kazayak video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 3-->
  <div class="portfolio-modal modal animate__animated" data-animate-in='animate__lightSpeedInRight' data-animate-out='animate__lightSpeedOutRight' id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="close-icon"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="modal-body">
                <!-- Project Details Go Here-->
                <div class="row">
                  <div class="col-sm">
                    <h2 class="text-uppercase">Rose de Kazayak</h2>
                    <p class="item-intro"></p>
                    <img class="suvorov-fluid d-block mx-auto" src="assets/img/wines/rose_de_kazayak.png" alt="rose_de_kazayak">
                    <div class="medals_flex" style="margin-top: -2rem;">
                      <img class="medals" src="assets/img/medals/berliner_gold_2020_new.png" alt="berliner_gold_2020">
                      <img class="medals" src="assets/img/medals/silver_mundus_2020_new.png" alt="silver_mundus_2020">
                      <img class="medals" src="assets/img/medals/mundus_silver_2021.jpeg" alt="mundus_silver_2021">
                      <img class="medals" src="assets/img/medals/france_silver_2021.jpg" alt="france_silver_2021">
                    </div>
                    <div class="medals_flex">
                        <img class="medals" src="assets/img/medals/international-wine-challenge-bronze-2021.png" alt="international-wine-challenge-bronze-2021">
                      </div>
                  </div>
                  <div class="col-sm" style="text-align: left;">
                    <ul class="list-inline">
                      <div class="align-self-center modal_fix_info"><img class="modal_inside_icons" src="assets/img/grape.png" alt="grape">
                        <li class="lang" key="rose2" style="margin-left: 4rem;">Год урожая: 2019</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/bar.png" alt="bar">
                        <li class="lang" key="rose3" style="margin-left: 4rem;">Тип вина: Розовое сухое</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/grapes.png" alt="grapes">
                        <li class="lang" key="rose4" style="margin-left: 4rem;">Виноград: 40% Cabernet Sauvignon 60 % Merlot</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/food.png" alt="food">
                        <li class="lang" key="rose5" style="margin-left: 4rem;">Сочетание вина с едой: Мы рекомендуем подавать это розовое при температуре 8°-10°C в сочетании с легкими летними салатами, морепродуктами, красной рыбой или карпачо из
                          телятины. Идеально подходит для долгих летних вечеров или романтических мероприятий!</li>
                      </div>
                    </ul>
                    <a class="btn_more_less content_toggle lang hvr-shutter-out-vertical" key="knowmore" href="#">Узнать больше</a>
                    <div class="content_block" style="display: none;">
                      <p class="item-intro lang" key="rose1">Как и другие вина в этой коллекции, это розовое вино представляет собой кристаллический купаж, характерный для розовой винификации сортов Мерло и Каберне-Совиньон, собранных при полной
                        зрелости. В результате получается вино с собственным характером, приятной кислотностью, энергичным, фруктовым и пленительным вкусом. Приятный и тонкий аромат цветов шиповника, а также красных ягод ( клубники и малины ). Вкус
                        тонкий и минеральный, но в то же время насыщенный, фруктовые ноты спелой клубники и персика гармонично сочетаются с легкими цитрусовыми ощущениями</p>
                    </div>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/UOf8N3-uyi8?controls=0" title="Kazayak video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <a class="btn_more_less content_toggle lang hvr-shutter-out-vertical" key="videomore" href="#">Следующее видео/Румынский перевод</a>
                      <div class="content_block" style="display: none; margin-top: 1rem;">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/H1fjMKn4Qzg?controls=0" title="Kazayak video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal 4-->
  <div class="portfolio-modal modal animate__animated" data-animate-in='animate__lightSpeedInRight' data-animate-out='animate__lightSpeedOutRight' id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="close-icon"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="modal-body">
                <!-- Project Details Go Here-->
                <div class="row">
                  <div class="col-sm">
                    <h2 class="text-uppercase">Rosu de Kazayak</h2>
                    <p class="item-intro"></p>
                    <img class="suvorov-fluid d-block mx-auto" src="assets/img/wines/rosu_de_kazayak.png" alt="rosu_de_kazayak">
                    <div class="medals_flex" style="margin-top: -2rem;">
                      <img class="medals" src="assets/img/medals/berliner_gold_2020_new.png" alt="berliner_gold_2020">
                      <img class="medals" src="assets/img/medals/mundus_gold_2019.png" alt="mundus_gold_2019">
                      <img class="medals" src="assets/img/medals/mundus_silver_2021.jpeg" alt="mundus_silver_2021">
                      <img class="medals" src="assets/img/medals/decanter_bronze_2020.webp" alt="decanter_bronze_2020">
                    </div>
                  </div>
                  <div class="col-sm" style="text-align: left;">
                    <ul class="list-inline">
                      <div class="align-self-center modal_fix_info"><img class="modal_inside_icons" src="assets/img/grape.png" alt="grape" />
                        <li class="lang" key="rosu2" style="margin-left: 4rem;">Год урожая: 2018 Вино выдержанное</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/bar.png" alt="bar">
                        <li class="lang" key="rosu3" style="margin-left: 4rem;">Тип вина: Красное сухое</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/grapes.png" alt="grapes">
                        <li class="lang" key="rosu4" style="margin-left: 4rem;">Виноград: Feteasca Neagra 40% Cabernet Sauvignon 30% Merlot 30%</li>
                      </div>
                      <div class="align-self-center"><img class="modal_inside_icons" src="assets/img/food.png" alt="food">
                        <li class="lang" key="rosu5" style="margin-left: 4rem;">Сочетание вина с едой: Идеальный гастрономический вызов для этого вина - свиная отбивная с запеченным картофелем, стейк с легким острым соусом, нежный стейк из говядины</li>
                      </div>
                    </ul>
                    <a class="btn_more_less content_toggle lang hvr-shutter-out-vertical" key="knowmore" href="#">Узнать больше</a>
                    <div class="content_block" style="display: none;">
                      <p class="item-intro lang" key="rosu1">Подарок для знаменательных дней, призванный соблазнить вас здоровой «смесью» сортов Фетяска Нягра, Каберне-Совиньон и Мерло. У каждого сорта есть свой вклад: один привносит прочность и
                        интенсивность, другой - элегантность, грациозно подчеркиваемый тонкими и бархатистыми ароматами. Привлекательный цвет, как у спелого граната, в аромате преобладают сладкие красные и черные фрукты ( чернослив, вишня и черная
                        вишня ) в сопровождении тонких нот ванили и табака. Он впечатляет своей бархатистой и сложной текстурой, мягким и сбалансированным вкусом, фруктово-пряным, с элегантными оттенками дуба. Длинный и запоминающийся финал. Он
                        обещает
                        приятные впечатления даже после выдержки</p>
                    </div>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Yqrepixddow?controls=0" title="Kazayak video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <a class="btn_more_less content_toggle lang hvr-shutter-out-vertical" key="videomore" href="#">Следующее видео/Румынский перевод</a>
                      <div class="content_block" style="display: none; margin-top: 1rem;">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/nrmMS9BBCyw?controls=0" title="Kazayak video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Third party plugin JS-->
  <script src="js/scripts.js"></script>
  <script src="node_modules/wowjs/dist/wow.min.js"></script>
  <script src="js/animation-modal.js"></script>
  <script>
    new WOW().init();
  </script>
</body>

</html>