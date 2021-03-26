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
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 577,
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
  document.addEventListener('DOMContentLoaded', getLocalLang)

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
      'address': 'Address:',
      'winery': 'Winery:',
      'phone': 'Phone number:',
      'name2': 'Your name *',
      'email2': 'Your email *',
      'message2': 'Your message *',
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
      'barza1.3': 'Grapes: 100% Chardonnay',
      'alb1': 'The wine is light straw color with a greenish tint, reflecting an elegant combination between Aligote and Muscat Ottonel, perfectly accentuated by the delicate Sauvignon Blanc. The complex aroma conquers with subtle notes of barberry, citrus and exotic fruits. Has a fresh, full, harmonious taste, in which balanced acidity and caramel shades are in perfect balance. The finish comes to you with aromas of white cherry and gooseberry, enhanced by citrus and exotic notes',
      'alb2': 'Vintage: 2019',
      'alb3': 'Wine type: White dry',
      'alb4': 'Grapes: Aligote 33% Muscat Ottonel 33% Sauvignon Blanc 33%',
      'alb5': 'Wine pairing with food: It can be served as an appetizer, but it pairs perfectly with soft cheeses, white meats, tender beef, fish, grilled seafood and vegetables, fruits, sweets. Serve at 8-10°C',
      'negru1': 'A masculine wine with a balanced and well-defined structure. Descendant of Saperavi, Cabernet Sauvignon and Merlot varieties. This wine is an event, the aroma of which intensely and pleasantly combines berries, black currants and blueberries, subtly accentuated by notes of oak. After the eye contemplates the color, a charming dark ruby ​​flavor dominated by black fruits, figs and licorice, a strong, balanced wine with well-ripened tannins opens up, harmoniously integrated into Cabernet Sauvignon. Under favorable storage conditions, this wine can be put into the collection for aging',
      'negru2': 'Vintage: 2018 Wine aged',
      'negru3': 'Wine type: Red dry',
      'negru4': 'Grapes: Saperavi 40% Cabernet Sauvignon 30% Merlot 30%',
      'negru5': 'Wine pairing with food: We offer it as a complement to traditional authentic dishes: lamb pastrami, duck or goose in the oven with cabbage or pork ribs with peanuts',
      'rose1': 'Like the other wines in this collection, this rosé wine is a crystalline blend characteristic of the rosé vinification of Merlot and Cabernet Sauvignon, harvested at full maturity. The result is a wine with its own character, pleasant acidity, energetic, fruity and captivating taste. Pleasant and delicate aroma of rose hips and red berries ( strawberries and raspberries ). The taste is subtle and mineral, but at the same time rich, fruity notes of ripe strawberries and peaches are harmoniously combined with light citrus sensations',
      'rose2': 'Vintage: 2019',
      'rose3': 'Wine type: Rose dry',
      'rose4': 'Grapes: 40% Cabernet Sauvignon 60 % Merlot',
      'rose5': 'Wine pairing with food: We recommend serving this rosé at 8°-10°C, paired with light summer salads, seafood, red fish or veal carpaccio. Perfect for long summer evenings or romantic events!',
      'rosu1': 'A gift for special days, designed to seduce you with a healthy blend of Feteasca Neagra, Cabernet Sauvignon and Merlot. Each variety has its own contribution: one brings strength and intensity, the other elegance, gracefully accentuated by subtle and velvety aromas. An attractive color, like a ripe pomegranate, the aroma is dominated by sweet red and black fruits (prunes, cherries and black cherries), accompanied by subtle notes of vanilla and tobacco. It impresses with its velvety and complex texture, soft and balanced taste, fruity-spicy, with elegant shades of oak. Long and memorable ending. It promises a pleasant experience even after exposure',
      'rosu2': 'Vintage: 2018 Wine aged',
      'rosu3': 'Wine type: Red dry',
      'rosu4': 'Grapes: Feteasca Neagra 40% Cabernet Sauvignon 30% Merlot 30%',
      'rosu5': 'Wine pairing with food: The perfect gastronomic challenge for this wine is pork chop with baked potatoes, steak with a light hot sauce, tender beef steak',
      'awards': 'Medals and Awards',
      'awardsinfo': 'Kazayak Vin and Suvorov Vin annually attend exhibitions such as: International Wine & Spirit Competition, International Wine Challenge, Eurasia Wine & Spirits Competition, Mundus Vini, Decanter World Wine Awards, Concours Mondial de Bruxelles, Challenge International du Vin, Wine Official Selection Fair in Transylvania, etc.',
      'counter1': 'Exhibitions visited annually',
      'counter2': 'Medals for the last 20 years',
      'counter3': 'Gold medals for the last 20 years',
      'counter4': 'Silver medals for the last 20 years',
      'barza2': 'The wine with a fine aroma opening by the primary floral aromas, then evolves with a remarkable Muscat aroma. It has a rich, full-bodied taste, with an elegant taste of fresh grapes',
      'barza2.1': 'Vintage: 2018',
      'barza2.2': 'Wine type: White semisweet',
      'barza2.3': 'Grapes: 100% Muscat',
      'barza3': 'The wine impresses with its fine variety aroma, delicate pink color and fresh taste with nuances of berries. Obtained from merlot grapes. Perfect for fine fish, cheese and fruit dishes. Prefered to be consumed at the temperature of 10-12 t.',
      'barza3.1': 'Vintage: 2018',
      'barza3.2': 'Wine type: Rose semidry',
      'barza3.3': 'Grapes: 100% Merlot',
      'barza4': 'Semi-sweet muscat rose wine stands out especially for its delicate pink color and the aroma of muscat with floral shades. Balanced acidity forms a fresh and fine taste',
      'barza4.1': 'Vintage: 2018',
      'barza4.2': 'Wine type: Rose semisweet',
      'barza4.3': 'Grapes: 100% Muscat',
      'barza5': 'Cabernet Sauvignon has an intense ruby ​​red color with an elegant aroma rich in berries, complemented by subtle hints of sweet spices. The complex taste is combined with notes of ripe red fruits',
      'barza5.1': 'Vintage: 2018',
      'barza5.2': 'Wine type: Red dry',
      'barza5.3': 'Grapes: 100% Cabernet Sauvignon',
      'albsec': 'Dry white wine. Made from quality grapes of Sauvignon, Aligote, Riesling varieties harvested from the south of Moldova. The wine has the complex aroma of sweet fruit, with fine shades of honey and a perfectly balanced and fresh taste. The wine that creates a real festive atmosphere. Prefered to be consumed at the temperature of 7-10 t.',
      'albsec1': 'Vintage: 2018',
      'albsec2': 'Wine type: White dry',
      'albsec3': 'Grapes: Sauvignon, Aligote, Riesling',
      'albsec4': 'Alkochol: 12.0%',
      'muscatel': 'It is a superior quality wine, semi-sweet, long-lived, soft with delicate acidity and which develops a diverse palette of aromas of geranium and basil. The wine that creates a real festive atmosphere. Prefered to be consumed at the temperature of 7-10 t.',
      'muscatel1': 'Vintage: 2018',
      'muscatel2': 'Wine type: White semisweet',
      'muscatel3': 'Grapes: 100% Muscat',
      'muscatel4': 'Alkochol: 12.0%',
      '1.5lcabernet': 'The wine has an intense ruby ​​red color. The aroma is intense, complex with notes of berry jam, black currant, blackberry. The wine has a round taste, good volume and velvety texture. Wine that creates a real festive atmosphere. Serve chilled to 15-18 tons.',
      '1.5lcabernet1': 'Vintage: 2018',
      '1.5lcabernet2': 'Wine type: Red semisweet',
      '1.5lcabernet3': 'Grapes: 100% Muscat',
      '1.5lcabernet4': 'Alkochol: 13.0%',
      'isabella': 'Made from select varieties of Isabella grapes grown in southern Moldova. The aroma is full of tones of strawberries, raspberries, cherries and blackcurrants. The wine that creates a real festive atmosphere',
      'isabella1': 'Vintage: 2018',
      'isabella2': 'Wine type: Red semisweet',
      'isabella3': 'Grapes: 100% Muscat',
      'isabella4': 'Alkochol: 10.0%',
      '1.5lchardonnay': 'Semi-sweet white-yellow wine, with reflections of a fine green. The natural acidity of the grapes gives the wine a fresh, full and harmonious taste of citrus and sweet fruits. The wine that creates a real festive atmosphere. Prefered to be consumed at the temperature of 7-10 t.',
      '1.5lchardonnay1': 'Vintage: 2018',
      '1.5lchardonnay2': 'Wine type: White semisweet',
      '1.5lchardonnay3': 'Grapes: 100% Chardonnay',
      '1.5lchardonnay4': 'Alkochol: 12.0%',
      'gussy1': 'The grapes are harvested in vineyards in the Valul-lui-Traian ( Southwest ) region of Moldova. Sauvignon Blanc is yellow-greenish in color, with tints. The aroma is fresh, with a pronounced tone of black currant leaves and fruity notes. Its fresh taste is dominated by exquisite hints of citrus, which turn into a pleasant aftertaste',
      'gussy2': 'Vintage: 2018',
      'gussy3': 'Wine type: White dry',
      'gussy4': 'Grapes: 100% Sauvignon Blanc',
      'gussy5': 'Wine pairing with food: Fresh vegetables, spinach, seafood',
      'gussy1.1': 'The wine has light straw color with a greenish tint. Its complex aroma conquers with subtle notes of barberry and citrus. Has a fresh, full, harmonious taste in which balanced acidity and caramel shades are in perfect balance. The grapes, carefully selected, were harvested from vineyards in the Valul-lui-Traian (Southwest) region of Moldova',
      'gussy2.1': 'Vintage: 2017',
      'gussy3.1': 'Wine type: White dry',
      'gussy4.1': 'Grapes: 100% Chardonnay',
      'gussy5.1': 'Wine pairing with food: Baked salmon in a creamy sauce, garnished with asparagus',
      'gussy1.2': 'Pinot Noir is a select, well-balanced and at the same time light and delicate wine. It has aromas of raspberries, strawberries and fresh grape berries. The taste is fresh, with pleasant acidity and a repetition of berry notes. The aftertaste leaves traces of freshness and piquancy. Grapes harvested in the vineyards of the Valul-lui-Trayan (South-West) region of Moldova',
      'gussy2.2': 'Vintage: 2014',
      'gussy3.2': 'Wine type: Red dry',
      'gussy4.2': 'Grapes: 100% Pinot Noir',
      'gussy5.2': 'Wine pairing with food: Dishes with chicken, bruschetta or curry with lentils and herbs, various cheeses',
      'gussy1.3': 'Aged red wine from Cabernet Sauvignon (75%) and Merlot (25%) grapes grown in the Central and Southern regions of Moldova. The Codru brand was created by specialists from the Moldavian Research Institute of Life Sciences in 1966. The color of the wine is pomegranate with onion tones. The taste impresses with its fullness with velvety notes of cherry pits and a subtle tenderness of quince in the aftertaste. Elegant tannins with a pleasant shade of tobacco contribute to the roundness of the wine and the subsequent evolution of the wine in the bottle and glass. Grapes harvested in the vineyards of the Valul-lui-Traian (South-West) region of Moldova',
      'gussy2.3': 'Vintage: 2012',
      'gussy3.3': 'Wine type: Red dry',
      'gussy4.3': 'Grapes: 75% Cabernet Sauvignon and 25% Merlot',
      'gussy5.3': 'Wine pairing with food: Chicken dishes with spices, curries and herbs, hard cheeses',
      'gussy1.4': 'Aged red wine from Cabernet Sauvignon (75%) and Merlot (25%) grapes grown in the Central and Southern regions of Moldova. The Codru brand was created by specialists from the Moldavian Research Institute of Life Sciences in 1966. The color of the wine is pomegranate with onion tones. The taste impresses with its fullness with velvety notes of cherry pits and subtle tenderness of quince in the aftertaste. Elegant tannins with a pleasant shade of tobacco contribute to the roundness of the wine and the subsequent evolution of the wine in the bottle and glass. Grapes harvested in the vineyards of the Valul-lui-Traian (South-West) region of Moldova',
      'gussy2.4': 'Vintage: 2018',
      'gussy3.4': 'Wine type: Red dry',
      'gussy4.4': 'Grapes: 100% Cabernet Sauvignon',
      'gussy5.4': 'Wine pairing with food: Chicken dishes with spices, curries and herbs, hard cheeses',
      'viorica1': 'Viorica is the name of a Moldavian girl, it comes from the flower of the same name. A wine with great personality and character, made from the local selection of Viorica grapes. Made according to a special technology from selected Viorica grapes grown in vineyards in the Stefan Voda region (South-East) of Moldova. Delightful, harmonious, soft taste of wine is revealed by nuances of tea rose, candied fruit, honey and nutmeg hints. Grapes grown in vineyards in the Stefan Voda region (South-East) of Moldova',
      'viorica2': 'Vintage: 2018',
      'viorica3': 'Wine type: White dry',
      'viorica4': 'Grapes: 100% Viorica',
      'viorica5': 'Wine pairing with food: Bruschettes, salmon carpacho, soft cheeses',
      'vioricaregala1': 'Feteasca Regală is a fresh straw-colored wine. The wine has a bright floral aroma with light notes of fresh acacia honey. The taste is slightly mineral, lively, with pleasant acidity, refined with delicate aromas of wildflowers in combination with hints of apricot, and ends with a pleasant fruity aftertaste. This elegant wine has a delicate aroma of wildflowers, meadow grasses, ripe peach. The grapes are grown in vineyards in the Stefan Voda region (South-East) of Moldova. This wine received a silver medal at one of the most difficult competitions in the world International Wine Challenge 2018. This competition is considered very difficult, wines are tasted by professionals, at least three times and a commission of 12 people',
      'vioricaregala2': 'Vintage: 2018',
      'vioricaregala3': 'Wine type: White dry',
      'vioricaregala4': 'Grapes: 100% Feteasca Regală',
      'vioricaregala5': 'Wine pairing with food: Grilled fish, arugula salad',
      'vioricarose1': 'The wine has a delicate pink color with a strawberry and raspberry aroma with cream. Taste with a bright fruity component and refreshing acidity. The grapes are grown in vineyards in the Stefan Voda region (South-East) of Moldova. This wine received a silver medal at the prestigious European competition Mondial De Bruxelles 2019',
      'vioricarose2': 'Vintage: 2018',
      'vioricarose3': 'Wine type: Rose dry',
      'vioricarose4': 'Grapes: 100% Merlot',
      'vioricarose5': 'Wine pairing with food: Mediterranean cuisine, shrimps, mussels',
      'vioricaneagra1': 'Feteasca Neagra is a local grape variety that was grown on the territory of Moldova 1500-2000 years ago. Due to its special qualities, it is cultivated in large areas in the south of Moldova. This is an expressive wine with a deep ruby ​​color. The rich complex aroma contains notes of black currant berries, blackberries, prunes, cherries. Wine with good texture, its tannins are not aggressive. The taste is harmonious, balanced, with moderate astringency and currant notes, the aftertaste is long-unforgettable',
      'vioricaneagra2': 'Vintage: 2018',
      'vioricaneagra3': 'Wine type: Red dry',
      'vioricaneagra4': 'Grapes: 100% Merlot',
      'vioricaneagra5': 'Wine pairing with food: Grilled beef or lamb with black and red peppers. Roasted duck with glaze, green cod, baked apples and balsamic vinegar or mashed potatoes. Chocolate mousse with dark chocolate, hot peppers, paprika and sea salt',
      'vioricamerlot1': 'Merlot is a deep ruby ​​color with mysterious tints. Complex aroma with tones of black currant, cherry, blackberry and dark chocolate. It has a full, pleasantly astringent taste with velvety tannins and hints of wild berries. Long fruity aftertaste. The Merlot bunches were grown in vineyards in the Stefan Voda region (South-East) of Moldova, and were carefully selected',
      'vioricamerlot2': 'Vintage: 2016',
      'vioricamerlot3': 'Wine type: Red dry',
      'vioricamerlot4': 'Grapes: 100% Merlot',
      'vioricamerlot5': 'Wine pairing with food: Bolognese pasta, veal medallions',
      'vioricacabernet1': 'This is an expressive wine of intense ruby ​​color with hints of bronze. The rich complex aroma contains tones of black currant berries, blackberries, prunes, cherries. Wine with good texture, its tannins are not aggressive. The taste is harmonious, balanced, with moderate astringency and currant notes, the aftertaste is long, fruity. The grapes for him were grown and carefully harvested in vineyards in the Stefan Voda region (South-East) of Moldova',
      'vioricacabernet2': 'Vintage: 2017',
      'vioricacabernet3': 'Wine type: Red dry',
      'vioricacabernet4': 'Grapes: 100% Cabernet Sauvignon',
      'vioricacabernet5': 'Wine pairing with food: Beef steak, pork, hard cheeses',
      'vioricamalbec1': 'Dark ruby ​​red wine with a rich fruity bouquet with notes of prunes and blackberries. The taste is full, velvety, with fresh aromas of red currant and black cherry combined with sweet rounded tannins. The finish is long with hints of cinnamon and cloves. Superior quality wine to make your celebrations happy',
      'vioricamalbec2': 'Vintage: 2019',
      'vioricamalbec3': 'Wine type: Red dry',
      'vioricamalbec4': 'Grapes: 100% Malbec',
      'vioricamalbec5': 'Wine pairing with food: Served with oven pizza, lasagna, Mexican cuisine, game, meat dishes',
      'vioricariton1': 'Riton offers everything you would expect from a young white wine, and maybe more: subtle aroma, freshness, acidity and some structure. White wine with a greenish tint. Sauvignon Blanc emphasized a complex delicate aroma with hints of black currant, passion fruit, against the background of a pronounced citrus aroma. This wine has everything you are looking for: fresh taste, unforgettable aroma and freshness!',
      'vioricariton2': 'Vintage: 2019',
      'vioricariton3': 'Wine type: White dry',
      'vioricariton4': 'Grapes: Sauvignon Blanc 60% Riton 40%',
      'vioricariton5': 'Wine pairing with food: Served with fish, asparagus and seafood ( oysters and shrimps )'

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
      'address': 'Адрес:',
      'winery': 'Винзавод:',
      'phone': 'Номер телефона:',
      'name2': 'Ваше имя *',
      'email2': 'Ваш email *',
      'message2': 'Ваше сообщение *',
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
      'barza1.3': 'Виноград: 100% Шардоннэ',
      'alb1': 'Вино светло-соломенного цвета с зеленоватым оттенком, отражает изящную комбинацию между Aligote и Muscat Ottonel, прекрасно подчеркнутым нежным Sauvignon Blanc. Сложный аромат покоряет тонкими нотами барбариса, цитрусовых и экзотических фруктов. Обладает свежим, полным, гармоничным вкусом, в котором сбалансированная кислотность и карамельные оттенки находятся в идеальном равновесии. Послевкусие приходит к вам с ароматами белой вишни и крыжовника, усиленными цитрусовыми и экзотическими нотками',
      'alb2': 'Год урожая: 2019',
      'alb3': 'Тип вина: Белое сухое',
      'alb4': 'Виноград: Aligote 33% Muscat Ottonel 33% Sauvignon Blanc 33%',
      'alb5': 'Сочетание вина с едой: Его можно подавать как закуску, но он идеально сочетается с мягкими сырами, белым мясом, нежной говядиной, рыбой, морепродуктами и овощами на гриле, фруктами, сладостями. Подавать при температуре 8-10°C',
      'negru1': 'Мужское вино, со сбалансированной и четко выраженной структурой. Потомок сортов Саперави, Каберне-Совиньон и Мерло. Это вино - событие, в аромате которого интенсивно и приятно сочетаются ягоды, черная смородина и черника, тонко подчеркнутые нотами дуба. После того, как глаз созерцает цвет, очаровательный темно-рубиновый вкус, в котором преобладают черные фрукты, инжир и лакрица, открывается крепкое, сбалансированное вино с хорошо созревшими танинами, гармонично интегрированное в Каберне Совиньон. При благоприятных условиях хранения это вино можно заложить в коллекцию на выдержку',
      'negru2': 'Год урожая: 2018 Вино выдержанное',
      'negru3': 'Тип вина: Красное сухое',
      'negru4': 'Виноград: Saperavi 40% Cabernet Sauvignon 30% Merlot 30%',
      'negru5': 'Сочетание вина с едой: Предлагаем его в качестве дополнения к традиционным аутентичным блюдам: пастрами из баранины, утка или гусь в духовке с капустой или свиные ребрышки с арахисом',
      'rose1': 'Как и другие вина в этой коллекции, это розовое вино представляет собой кристаллический купаж, характерный для розовой винификации сортов Мерло и Каберне-Совиньон, собранных при полной зрелости. В результате получается вино с собственным характером, приятной кислотностью, энергичным, фруктовым и пленительным вкусом. Приятный и тонкий аромат цветов шиповника, а также красных ягод ( клубники и малины ). Вкус тонкий и минеральный, но в то же время насыщенный, фруктовые ноты спелой клубники и персика гармонично сочетаются с легкими цитрусовыми ощущениями',
      'rose2': 'Год урожая: 2019',
      'rose3': 'Тип вина: Розовое сухое',
      'rose4': 'Виноград: 40% Cabernet Sauvignon 60 % Merlot',
      'rose5': 'Сочетание вина с едой: Мы рекомендуем подавать это розовое при температуре 8°-10°C в сочетании с легкими летними салатами, морепродуктами, красной рыбой или карпачо из телятины. Идеально подходит для долгих летних вечеров или романтических мероприятий!',
      'rosu1': 'Подарок для знаменательных дней, призванный соблазнить вас здоровой «смесью» сортов Фетяска Нягра, Каберне-Совиньон и Мерло. У каждого сорта есть свой вклад: один привносит прочность и интенсивность, другой - элегантность, грациозно подчеркиваемый тонкими и бархатистыми ароматами. Привлекательный цвет, как у спелого граната, в аромате преобладают сладкие красные и черные фрукты ( чернослив, вишня и черная вишня ) в сопровождении тонких нот ванили и табака. Он впечатляет своей бархатистой и сложной текстурой, мягким и сбалансированным вкусом, фруктово-пряным, с элегантными оттенками дуба. Длинный и запоминающийся финал. Он обещает приятные впечатления даже после выдержки',
      'rosu2': 'Год урожая: 2018 Вино выдержанное',
      'rosu3': 'Тип вина: Красное сухое',
      'rosu4': 'Виноград: Feteasca Neagra 40% Cabernet Sauvignon 30% Merlot 30%',
      'rosu5': 'Сочетание вина с едой: Идеальный гастрономический вызов для этого вина - свиная отбивная с запеченным картофелем, стейк с легким острым соусом, нежный стейк из говядины',
      'awards': 'Медали и Награды',
      'awardsinfo': 'Kazayak Vin и Suvorov Vin ежегодно посещают такие выставки, как: International Wine & Spirit Competition, International Wine Challenge, Eurasia Wine & Spirits Competition, Mundus Vini, Decanter World Wine Awards, Concours Mondial de Bruxelles, Challenge International du Vin, Wine Official Selection Fair in Transylvania и др.',
      'counter1': 'Выставок посещяется ежегодно',
      'counter2': 'Медалей за последние 20 лет',
      'counter3': 'Золотых медалей за последие 20 лет',
      'counter4': 'Серебряных медалей за последние 20 лет',
      'barza2': 'Вино с тонким ароматом раскрывается первичными цветочными ароматами, а затем развивается в мускатные ноты. Обладает насыщенным вкусом, с элегантным характером свежего винограда',
      'barza2.1': 'Год урожая: 2018',
      'barza2.2': 'Тип вина: Белое полусладкое',
      'barza2.3': 'Виноград: 100% Мускат',
      'barza3': 'Вино поражает своим тонким разнообразным ароматом, нежным розовым цветом и свежим вкусом с нюансами ягод. Производится из винограда сорта Мерло. Идеально подходит для изысканных блюд из рыбы, сыра и фруктов. Потребляется при температуре 10-12 градусов',
      'barza3.1': 'Год урожая: 2018',
      'barza3.2': 'Тип вина: Розовое полусухое',
      'barza3.3': 'Виноград: 100% Мерло',
      'barza4': 'Мускатное полусладкое розовое вино отличается особенно нежным розовым цветом и ароматом муската с цветочными оттенками. Сбалансированная кислотность формирует свежий и тонкий вкус',
      'barza4.1': 'Год урожая: 2018',
      'barza4.2': 'Тип вина: Розовое полусладкое',
      'barza4.3': 'Виноград: 100% Мускат',
      'barza5': 'Каберне Совиньон обладает интенсивным рубиново-красным цветом с элегантным ароматом, богатым ягодами, дополненным тонкими оттенками сладких пряностей. Сложный вкус сочетается с нотами спелых красных фруктов',
      'barza5.1': 'Год урожая: 2018',
      'barza5.2': 'Тип вина: Красное сухое',
      'barza5.3': 'Виноград: 100% Каберне Совиньон',
      'albsec': 'Белое сухое вино. Изготовлено из качественного винограда сорта Совиньон, Алиготе, Рислинг, собранного на юге Молдовы. Вино обладает сложным ароматом сладких фруктов, с тонкими оттенками меда. Вкус идеально сбалансированный и свежий. Вино, которое создает настоящую праздничную атмосферу. Подавать охлажденным 7-10 т.',
      'albsec1': 'Год урожая: 2018',
      'albsec2': 'Тип вина: Белое сухое',
      'albsec3': 'Виноград: Sauvignon, Aligote, Riesling',
      'albsec4': 'Алкоголь: 12.0%',
      'muscatel': 'Это вино высшего качества, полусладкое, мягкое с нежной кислотностью, которое развивает разнообразную палитру ароматов герани и базилика. Вино, которое создает настоящую праздничную атмосферу. Подавать охлажденным до 7-10 т.',
      'muscatel1': 'Год урожая: 2018',
      'muscatel2': 'Тип вина: Белое полусладкое',
      'muscatel3': 'Виноград: 100% Мускат',
      'muscatel4': 'Алкоголь: 12.0%',
      '1.5lcabernet': 'Вино обладает интенсивным рубиново-красным цветом. Аромат насыщенный, сложный с нотами ягодного джема, черной смородины, ежевики. У вина округлый вкус, хороший объем и бархатистая текстура. Вино, которое создает настоящую праздничную атмосферу. Подавать охлажденным до 15-18 т.',
      '1.5lcabernet1': 'Год урожая: 2018',
      '1.5lcabernet2': 'Тип вина: Красное полусладкое',
      '1.5lcabernet3': 'Виноград: 100% Мускат',
      '1.5lcabernet4': 'Алкоголь: 13.0%',
      'isabella': 'Изготовлено из отборных сортов винограда Изабелла, выращенного на юге Молдовы. Аромат полон тонов клубники, малины, вишни, черной смородины. Вино, которое создает настоящую праздничную атмосферу. Подавать по 15-18 т.',
      'isabella1': 'Год урожая: 2018',
      'isabella2': 'Тип вина: Красное полусладкое',
      'isabella3': 'Виноград: 100% Мускат',
      'isabella4': 'Алкоголь: 10.0%',
      '1.5lchardonnay': 'Полусладкое вино соломенного цвета. Природная кислотность винограда придает вину свежий, полный и гармоничный вкус цитрусовых и сладких фруктов. Вино, которое создает настоящую праздничную атмосферу. Подавать охлажденным до 7-10 т.',
      '1.5lchardonnay1': 'Год урожая: 2018',
      '1.5lchardonnay2': 'Тип вина: Белое полусладкое',
      '1.5lchardonnay3': 'Виноград: 100% Шардоннэ',
      '1.5lchardonnay4': 'Алкоголь: 12.0%',
      'gussy1': 'Виноград собран на виноградниках в регионе Валул-луй-Траян ( Юго-Запад) Молдовы. Sauvignon Blanc желто-зеленоватого цвета, с переливами. Аромат свежий, с ярко выраженным тоном листьев черной смородины и фруктовыми нотами. В его свежем вкусе преобладают изысканные оттенки цитрусовых, которые переходят и в приятное послевкусие',
      'gussy2': 'Год урожая: 2018',
      'gussy3': 'Тип вина: Белое сухое',
      'gussy4': 'Виноград: 100% Sauvignon Blanc',
      'gussy5': 'Сочетание вина с едой: Свежие овощи, шпинат, блюда из морепродуктов',
      'gussy1.1': 'Вино светло-соломенного цвета с зеленоватым оттенком. Его сложный аромат покоряет тонкими нотами барбариса и цитрусовых. Обладает свежим, полным, гармоничным вкусом, в котором сбалансированная кислотность и карамельные оттенки находятся в идеальном равновесии. Виноград, тщательно отобранный, был собран на виноградниках в регионе Валул-луй-Траян (Юго-Запад ) Молдовы',
      'gussy2.1': 'Год урожая: 2017',
      'gussy3.1': 'Тип вина: Белое сухое',
      'gussy4.1': 'Виноград: 100% Шардоне',
      'gussy5.1': 'Сочетание вина с едой: Запеченный лосось в сливочном соусе, на гарнир спаржа',
      'gussy1.2': 'Pinot Noir – отборное, хорошо сбалансированное и в то же время легкое и тонкое вино. Обладает ароматами малины, клубники и свежей виноградной ягоды.  Вкус свежий, с приятной кислотностью и повторением в нём ягодных нот. Послевкусие оставляет следы свежести и пикантности. Виноград собран на виноградниках региона Валул-луй-Траян ( Юго-Запад ) Молдовы',
      'gussy2.2': 'Год урожая: 2014',
      'gussy3.2': 'Тип вина: Красное сухое',
      'gussy4.2': 'Виноград: 100% Пино Нуар',
      'gussy5.2': 'Сочетание вина с едой: Блюда с куриным мясом, брускетта или карри с чечевицей и травами, различные сыры',
      'gussy1.3': 'Красное выдержаное вино из винограда сортов Каберне-Совиньон(75%) и Мерло(25%), выращиваемого в Центральной и Южной зонах Молдовы. Марка Кодру была создана специалистами Молдавским НИИВиВ в 1966. Цвет вина гранатовый с луковичными тонами. Вкус впечатляет своей полнотой с бархатными нотками вишневой косточки и тонкой нежностью айвы в послевкусии. Элегантные танины с приятным оттенком табака способствуют округлости вина и последующей эволюции вина в бутылке и бокале. Виноград собран на виноградниках региона Валул-луй-Траян ( Юго-Запад ) Молдовы',
      'gussy2.3': 'Год урожая: 2012',
      'gussy3.3': 'Тип вина: Красное сухое',
      'gussy4.3': 'Виноград: 75% Каберне Савиньон 25% Мерло',
      'gussy5.3': 'Сочетание вина с едой: Блюда из куриного мяса с пряными специями, карри и травами, твердые сыры',
      'gussy1.4': 'Красное выдержаное вино из винограда сортов Каберне-Совиньон(75%) и Мерло(25%), выращиваемого в Центральной и Южной зонах Молдовы. Марка Кодру была создана специалистами Молдавским НИИВиВ в 1966. Цвет вина гранатовый с луковичными тонами. Вкус впечатляет своей полнотой с бархатными нотками вишневой косточки и тонкой нежностью айвы в послевкусие. Элегантные танины с приятным оттенком табака способствуют округлости вина и последующей эволюции вина в бутылке и бокале. Виноград собран на виноградниках региона Валул-луй-Траян ( Юго-Запад ) Молдовы',
      'gussy2.4': 'Год урожая: 2018',
      'gussy3.4': 'Тип вина: Красное сухое',
      'gussy4.4': 'Виноград: 100% Каберне Савиньон',
      'gussy5.4': 'Сочетание вина с едой: Блюда из куриного мяса с пряными специями, карри и травами, твердые сыры',
      'viorica1': 'Виорика - это имя молдавской девушки, оно происходит от одноименного названия цветка. Вино с большой индивидуальностью и характером, производится из местного селекционного винограда Виорика. Приготовлено по специальной технологии из отборного винограда сорта Виорика, выращенного на виноградниках в регионе Штефан Водэ (Юго-Восток) Молдовы. Восхитительный, гармоничный, мягкий вкус вина раскрывается нюансами аромата чайной розы, цукатных фруктов, оттенками меда и муската. Виноград выращен на виноградниках в регионе Штефан Водэ ( Юго-Восток ) Молдовы',
      'viorica2': 'Год урожая: 2018',
      'viorica3': 'Тип вина: Белое сухое',
      'viorica4': 'Виноград: 100% Виорика',
      'viorica5': 'Сочетание вина с едой: Брускеты, карпачо из лосося, мягкие сыры',
      'vioricaregala1': 'Feteasca Regală  – свежее вино соломенного цвета. Вино обладает ярким цветочным ароматом с легкими нотками свежего акациевого мёда. Вкус слегка минеральный, живой, с приятной кислотностью, облагороженный тонкими ароматами полевых цветов в сочетании с оттенками абрикоса, завершается приятным фруктовым послевкусием. Это элегантное вино обладает тонким ароматом полевых цветов, луговых трав, спелого персика. Виноград выращен на виноградниках в регионе Штефан Водэ ( Юго Восток ) Молдовы. Данное вино получило серебряную медаль на одном из самых сложных конкурсов мира International Wine Challenge 2018. Данный конкурс считается очень сложным, вина дегустируют профессионалы, минимум три раза и комиссией по 12 человек',
      'vioricaregala2': 'Год урожая: 2018',
      'vioricaregala3': 'Тип вина: Белое сухое',
      'vioricaregala4': 'Виноград: 100% Фетяска Регалэ',
      'vioricaregala5': 'Сочетание вина с едой: Рыба запеченная на гриле, салат из рукколы',
      'vioricarose1': 'Вино нежно розового цвета с ароматом клубники и малины со сливками. Вкус с яркой фруктовой составляющей и освежающей кислотностью. Виноград выращен на виноградниках в регионе Штефан Водэ ( Юго-Восток ) Молдовы. Данное вино получило серебряную медаль на престижном европейском конкурсе Mondial De Bruxelles 2019',
      'vioricarose2': 'Год урожая: 2018',
      'vioricarose3': 'Тип вина: Розовое сухое',
      'vioricarose4': 'Виноград: 100% Мерло',
      'vioricarose5': 'Сочетание вина с едой: Блюда средиземноморской кухни, креветки, мидии',
      'vioricaneagra1': 'Сорт Feteasca Neagra - местный сорт винограда, который выращивался на территории Молдовы 1500-2000 лет назад. Благодаря своим особым качествам он культивируется на больших площадях на юге Молдовы. Это выразительное вино насыщенного рубинового цвета.  В богатом сложном аромате присутствуют нотки ягод чёрной смородины, ежевики, чернослива, вишни.  Вино с хорошей текстурой, его танины не агрессивные. Вкус гармоничный, сбалансированный, с умеренной терпкостью и смородиновыми нотками, послевкусие длинное-незабываемое',
      'vioricaneagra2': 'Год урожая: 2018',
      'vioricaneagra3': 'Тип вина: Красное сухое',
      'vioricaneagra4': 'Виноград: 100% Мерло',
      'vioricaneagra5': 'Сочетание вина с едой: Говядина или баранина на гриле с черным и красным перцем. Запеченная утка с глазурью, зеленой треской, печеными яблоками и добавлением бальзамического уксуса или картофельного пюре. Шоколадный мусс с черным шоколадом, острым перцем, красным перцем и морской солью',
      'vioricamerlot1': 'Merlot – насыщенного рубинового цвета, с таинственными переливами. Сложный аромат с тонами черной смородины, черешни, ежевики и горького шоколада. Обладает полным, приятно вяжущим вкусом с бархатными танинами и нотками лесных ягод. Длинное фруктовое послевкусие. Грозди Мерло были выращены на виноградниках в регионе Штефан Водэ ( Юго-Восток ) Молдовы, и прошли тщательный отбор',
      'vioricamerlot2': 'Год урожая: 2016',
      'vioricamerlot3': 'Тип вина: Красное сухое',
      'vioricamerlot4': 'Виноград: 100% Мерло',
      'vioricamerlot5': 'Сочетание вина с едой: Паста Болоньезе, медальоны из телятины',
      'vioricacabernet1': 'Это выразительное вино насыщенного рубинового цвета с оттенками бронзы.  В богатом сложном аромате присутствуют тона ягод чёрной смородины, ежевики, чернослива, вишни. Вино с хорошей текстурой, его танины не агрессивные. Вкус гармоничный, сбалансированный, с умеренной терпкостью и смородиновыми нотками, послевкусие длинное, фруктовое. Виноград для него был выращен и бережно собран на виноградниках в регионе Штефан Водэ ( Юго-Восток ) Молдовы',
      'vioricacabernet2': 'Год урожая: 2017',
      'vioricacabernet3': 'Тип вина: Красное сухое',
      'vioricacabernet4': 'Виноград: 100% Каберне Совиньон',
      'vioricacabernet5': 'Сочетание вина с едой: Стейк из говядины, свинины, твердые сыры',
      'vioricamalbec1': 'Темно-рубиново-красное вино с богатым фруктовым букетом с нотками чернослива и ежевики. Вкус полный, бархатистый, со свежими ароматами красной смородины и черной вишни в сочетании со сладкими округлыми танинами. Послевкусие долгое с нотками корицы и гвоздики. Вино превосходного качества для радости праздничных мероприятий',
      'vioricamalbec2': 'Год урожая: 2019',
      'vioricamalbec3': 'Тип вина: Красное сухое',
      'vioricamalbec4': 'Виноград: 100% Malbec',
      'vioricamalbec5': 'Сочетание вина с едой: Подают к пицце из печи, лазаньи, мексиканской кухне, дичи, мясным блюдам',
      'vioricariton1': 'Riton предлагает все, что вы ожидаете от молодого белого вина, а может быть и больше: тонкий аромат, свежесть, кислотность и некоторую структуру. Белое вино с зеленоватым оттенком. Совиньон Блан подчеркнул сложный тонкий аромат с оттенками черной смородины, плода маракуйи, на фоне ярко выраженного цитрусового аромата. В этом вине есть все, что вы ищете: свежий вкус, незабываемый аромат и свежесть!',
      'vioricariton2': 'Год урожая: 2019',
      'vioricariton3': 'Тип вина: Белое сухое',
      'vioricariton4': 'Виноград: Sauvignon Blanc 60% Riton 40%',
      'vioricariton5': 'Сочетание вина с едой: Подают к рыбе, спарже и морепродуктам ( устрицам и креветкам )'

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
      'address': 'Adresa:',
      'winery': 'Vinăria:',
      'phone': 'Telefon:',
      'name2': 'Nume *',
      'email2': 'Email *',
      'message2': 'Mesaj *',
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
      'barza1.3': 'Soi: 100% Chardonnay',
      'alb1': 'Acest ALB, distins printr-o culoare galben pai cu tente verzi și strălucitoare, reflectă combinația grațioasă dintre Afinitatea Aligote și Feminitatea Muscat Ottonel, subliniată frumos de Gentilul Sauvignon Blanc. Sufletul citric, cu intonaţii profunde de flori albe de salcâm, se înveleşte în arome plăcute de busuioc și fructe exotice. Gustul complex, proaspăt și mineral, dezvelind stropi de coajă de grapefruit și limetă, invadează exploziv papilele gustative. În schimb, postgustul revine cu arome de cireșe albe și agrișe, sporite de inflexiuni citrice și exotice',
      'alb2': 'Anul recoltei: 2019',
      'alb3': 'Tipul de vin: Alb sec',
      'alb4': 'Soi: Aligote 33% Muscat Ottonel 33% Sauvignon Blanc 33%',
      'alb5': 'Combinarea vinurilor cu mâncarea: Poate fi servit ca un aperitiv, dar formează asocieri ideale cu cașcavaluri moi, carnea albă, carnea de vită fragedă, pește, fructe de mare și legume la grătar, fructe, dulciuri. Se servește la o temperatură de 8-10°C',
      'negru1': 'Un vin bărbătos, o structură echilibrată și bine definită. Descendent al soiurilor Saperavi, Cabernet-Sauvignon și Merlot, acesta este un vin-eveniment a cărui aromă intensă şi plăcută îmbină fructe de pădure, coacăze negre afine, conturate subtil de note de stejar. După ce ochiul contemplă culoarea, un fermecător rubiniu-închis, gustul, dominat de fructe negre, smochine și lemn dulce, descoperă un vin puternic, echilibrat, cu tanini bine copți, integrați într-o structură elegantă în care condimentele Saperavi-ului sunt asociate armonios cu catifelarea Merlot-ului și forța Cabernet-ului Sauvignon. Un postgust lung, fructat și condimentat. În condiții optime de păstrare, acest vin poate îmbătrâni frumos',
      'negru2': 'Anul recoltei: 2018 Imbătrânit cu vin',
      'negru3': 'Tipul de vin: Roșu sec',
      'negru4': 'Soi: Saperavi 40% Cabernet Sauvignon 30% Merlot 30%',
      'negru5': 'Combinarea vinurilor cu mâncarea: Îl sugerăm ca însoțitor de mâncăruri tradiționale de la țară: șuncă afumată, pastramă de oaie, rață sau gâscă la cuptor cu varză, sau coaste de porc cu cartofi țărănești',
      'rose1': 'Ca și alte vinuri din această colecție, acest Rosé este un blend cristalin, caracteristic vinificării în rosé a soiurilor Merlot și Cabernet-Sauvignon culeși la maturitate deplină. Rezultatul este un vin cu caracter propriu, aciditate revigorantă, energic, fructuos și captivant. Parfum plăcut și delicat de flori de măceș, pe lângă fructe roșii de pădure ( fragi și zmeură ). Gustativ este delicat și mineral, dar în același timp intens, notele fructate de căpșune coapte și piersici îmbinându-se armonios cu senzații ușoare de citrice',
      'rose2': 'Anul recoltei: 2019',
      'rose3': 'Tipul de vin: Rose sec',
      'rose4': 'Soi: 40% Cabernet Sauvignon 60 % Merlot',
      'rose5': 'Combinarea vinurilor cu mâncarea: Vă recomandăm să serviți acest rosé de 8°-10°C, asociat cu salate ușoare de vară, fructe de mare, pește roșu sau șuncă crudă. Ideal pentru serile lungi de vară sau pentru ocazii romantice!',
      'rosu1': 'Un Cadou de zile mari, hotărât să vă îmbie cu un “cupaj” sănătos din soiurile Feteasca Neagră, Cabernet-Sauvignon și Merlot. Fiecare soi își are aportul: unul aduce robustețe și intensitate, celălalt eleganță, fiind conturate grațios de parfumuri subtile și catifelate. O culoare atrăgătoare asemenea unei rodii coapte, aroma este dominată de fructe roșii și negre dulci (prune uscate, vișine și cireșe negre), acompaniate de note fine de vanilie și tutun. Impresionează prin textura catifelată și complexă, gust moale și echilibrat, fructat și condimentat, cu nuanțe elegante de stejar. Un final lung şi memorabil. Promite experienţe satisfăcătoare şi după învechire',
      'rosu2': 'Anul recoltei: 2018 Imbătrânit cu vin',
      'rosu3': 'Tipul de vin: Roșu sec',
      'rosu4': 'Soi: Feteasca Neagra 40% Cabernet Sauvignon 30% Merlot 30%',
      'rosu5': 'Combinarea vinurilor cu mâncarea: Provocarea gastronomică perfectă pentru acest vin - cotlet de porc cu cartofi la cuptor, steak cu sos puțin condimentat, friptură fragedă de vită',
      'awards': 'Medalii și Premii',
      'awardsinfo': 'Kazayak Vin și Suvorov Vin participă anual la expoziții precum: International Wine & Spirit Competition, International Wine Challenge, Eurasia Wine & Spirits Competition, Mundus Vini, Decanter World Wine Awards, Concours Mondial de Bruxelles, Challenge International du Vin, Wine Official Selection Fair in Transylvania, etc.',
      'counter1': 'Expoziții vizitate anual',
      'counter2': 'Medalii din ultimii 20 de ani',
      'counter3': 'Medalii de aur din ultimii 20 de ani',
      'counter4': 'Medalii de argint din ultimii 20 de ani',
      'barza2': 'Vinul cu o aroma de finețe este deschis prin aromele florale primare, apoi evoluează cu o aromă remarcabilă de Muscat. Are gust bogat, corpulent, cu un gust elegant de struguri proaspeți',
      'barza2.1': 'Anul recoltei: 2018',
      'barza2.2': 'Tipul de vin: Alb demidulce',
      'barza2.3': 'Soi: 100% Muscat',
      'barza3': 'Vinul impresionează prin aroma fina de soi, culoarea roz delicată și gustul proaspăt cu nuanțe de fructe de pădure. Obținut din struguri de soiul merlot. Perfect pentru bucate fine din pește, cașcavaluri și fructe. Se consumă la temperatura de 10-12 t.',
      'barza3.1': 'Anul recoltei: 2018',
      'barza3.2': 'Tipul de vin: Rose demisec',
      'barza3.3': 'Soi: 100% Merlot',
      'barza4': 'Vin demidulce roz Muscat se remarca in special prin culoarea sa delicata roz si aroma evidentiata de muscat cu nuante florale. Aciditatea echilibrata formeaza un gust proaspat si fin',
      'barza4.1': 'Anul recoltei: 2018',
      'barza4.2': 'Tipul de vin: Rose demidulce',
      'barza4.3': 'Soi: 100% Muscat',
      'barza5': 'Cabernet Sauvignon are o culoare rosie rubinie intensa cu o aroma eleganta, bogata de fructe de padure completata de nuante fine de condimente dulcege. Gustul complex vine cu note de fructe rosii coapte',
      'barza5.1': 'Anul recoltei: 2018',
      'barza5.2': 'Tipul de vin: Rosu sec',
      'barza5.3': 'Soi: 100% Cabernet Sauvignon',
      'albsec': 'Vin sec alb. Fabricat din struguri de calitate din soiuri Sauvignon, Aligote, Riesling recoltați din sudul Moldovei. Vinul are aroma complexă de fructe dulci, cu nuanțe fine de miere și un gust perfect echilibrat și proaspat. Vinul ce crează o adevărată atmosferă de sarbătoare. Se servește răcit 7-10 t.',
      'albsec1': 'Anul recoltei: 2018',
      'albsec2': 'Tipul de vin: Alb sec',
      'albsec3': 'Soi: Sauvignon, Aligote, Riesling',
      'albsec4': 'Alkochol: 12.0%',
      'muscatel': 'Este un vin decalitate superioară, demidulce, longeviv, moale cu aciditate delicata și care dezvoltă o paleta diversă de arome de muscat și busuioc. Vinul ce crează o adevărată atmosferă de sarbatoare. Se servește răcit la 7-10 t.',
      'muscatel1': 'Anul recoltei: 2018',
      'muscatel2': 'Tipul de vin: Alb demidulce',
      'muscatel3': 'Soi: 100% Muscat',
      'muscatel4': 'Alkochol: 12.0%',
      '1.5lcabernet': 'Vinul are o culoare rosie rubinie intensa. Aroma este bogata, complexa cu note de gem de fructe de padure, coacaze negre, mure. Rotund, cu un volum bun.un corp puternic si o textura catifelata. Vinul ce creaza o adevarata atmosfera de sarbaoare. Sa serveste racit la 15-18 t.',
      '1.5lcabernet1': 'Anul recoltei: 2018',
      '1.5lcabernet2': 'Tipul de vin: Roșu demidulce',
      '1.5lcabernet3': 'Soi: 100% Muscat',
      '1.5lcabernet4': 'Alkochol: 13.0%',
      'isabella': 'Fabricat din soiuri selecte de struguri Isabella cultivate în sudul Moldovei. Aroma este plină de tonuri de căpșuni, zmeură, cireșe, coacăze negre. Vinul ce crează o adevarată atmosfera de sarbătoare. Se servește la 15-18 t.',
      'isabella1': 'Anul recoltei: 2018',
      'isabella2': 'Tipul de vin: Roșu demidulce',
      'isabella3': 'Soi: 100% Muscat',
      'isabella4': 'Alkochol: 10.0%',
      '1.5lchardonnay': 'Vin demidulce alb de culoare galben, cu reflexii de un verziu fin. Aciditatea naturala a strugurilor îi confera vinul un gust proaspat, plin si armonios de citrice si fructe dulci. Vinul ce creaza o adevarata atmosfera de sarbatoare. Se serveste răcit la 7-10 t.',
      '1.5lchardonnay1': 'Anul recoltei: 2018',
      '1.5lchardonnay2': 'Tipul de vin: Alb demidulce',
      '1.5lchardonnay3': 'Soi: 100% Chardonnay',
      '1.5lchardonnay4': 'Alkochol: 12.0%',
      'gussy1': 'Vinul cu indicatie geografica protejata (IGP) „ Valul lui Traian”. Vin natural alb sec, asezonat natural. Produs din struguri selectaţi, cultivate în zona de sud a Moldovei. Vin de culoare verzuie-alb, diferă prin aroma bogată şi rezistentă cu un gust de grapefruit, piper şi coacăză neagră. Gust rafinat şi armonios şi de asemenea rezistent',
      'gussy2': 'Anul recoltei: 2018',
      'gussy3': 'Tipul de vin: Alb sec',
      'gussy4': 'Soi: 100% Sauvignon Blanc',
      'gussy5': 'Combinarea vinurilor cu mâncarea: Legume proaspete, spanac, fructe de mare',
      'gussy1.1': 'Vinul cu indicatie geografica protejata (IGP) „ Valul lui Traian”. Este un vin cu o personalitate puternica de o culoare stralucitoare pai deschis. Olfactiv gasim aroma fina de citrice si fructe exotice. Gustul vinului este expresiv cu o aciditate echilibrata, in care predomina notele de citrice. Gustul persistent cu caracter bogat se reflecta intr-un postgust armonios',
      'gussy2.1': 'Anul recoltei: 2017',
      'gussy3.1': 'Tipul de vin: Alb sec',
      'gussy4.1': 'Soi: 100% Chardonnay',
      'gussy5.1': 'Combinarea vinurilor cu mâncarea: Este perfect combinat cu peşte, risotto, carne albă şi brânzeturi',
      'gussy1.2': 'Vinul ce surprinde prin culoarea festivă rubinie intensa şi aroma sa rafinata de pomusoare proaspete si cu o nuanta fina de fructe. Gustul sau armonios echilibrat cu note de fruct copt. Vinul se remarcă printr-un post gust plăcut de vanilie de lunga durata',
      'gussy2.2': 'Anul recoltei: 2014',
      'gussy3.2': 'Tipul de vin: Roșu sec',
      'gussy4.2': 'Soi: 100% Pinot Noir',
      'gussy5.2': 'Combinarea vinurilor cu mâncarea: Feluri de mâncare cu carne de pui, bruschetta sau curry cu linte şi ierburi, diferite brânzeturi',
      'gussy1.3': 'Produs din struguri de soiuri europene Cabernet-Sauvignon 75% şi Merlot 25%, culeşi de pe plantaţiile din Sudul Moldovei. Vinul „Codru” se remarcă prin culoarea sa bogată cu nuanţe somptuoase de rubin. Buchet fin cu nuanţe preponderente de sîmbure de vişină, precum şi, cu aluzie uşoară de coacăză neagră, permite să-şi manifeste din plin gustul catifelat',
      'gussy2.3': 'Anul recoltei: 2012',
      'gussy3.3': 'Tipul de vin: Roșu sec',
      'gussy4.3': 'Soi: 75% Cabernet Sauvignon şi 25% Merlot',
      'gussy5.3': 'Combinarea vinurilor cu mâncarea: Preparate de pui cu condimente condimentate, curry şi ierburi, brânzeturi tari',
      'gussy1.4': 'Vin roșu îmbătrânit din struguri Cabernet Sauvignon (75%) și Merlot (25%) cultivate în regiunile centrale și sudice ale Moldovei. Brandul Codru a fost creat de specialiști de la Institutul de Cercetări în Științe ale Vieții din Moldova în 1966. Culoarea vinului este rodie cu tonuri de ceapă. Gustul impresionează prin plinătatea sa cu note catifelate de gropi de cireșe și tandrețe subtilă de gutui în postgust. Taninurile elegante cu o nuanță plăcută de tutun contribuie la rotunjimea vinului și la evoluția ulterioară a vinului în sticlă și pahar. Strugurii sunt recoltați în podgoriile din regiunea Valul-lui-Traian (Sud-Vest) a Moldovei',
      'gussy2.4': 'Anul recoltei: 2018',
      'gussy3.4': 'Tipul de vin: Roșu sec',
      'gussy4.4': 'Soi: 100% Cabernet Sauvignon',
      'gussy5.4': 'Combinarea vinurilor cu mâncarea: Preparate de pui cu condimente condimentate, curry şi ierburi, brânzeturi tari',
      'viorica1': 'Este numele fetei moldoveneşti. Este derivat din acelaşi nume Floare. Acest vin de mare personalitate (individualitate), este produs din struguri de selecţie autohtone Viorica. Vinul cu o aroma de fineţe este deschis prin aromele florale primare, apoi evoluează cu o aromă remarcabilă de Muscat. Are gust bogat, corpulent, cu un gust elegant de struguri proaspeţi. Gust deosebit şi interesant, conferă vinului un echilibru bun şi un gust bine definit. Dar destul de plin de corp, cu un indiciu de prospeţime care crează o amentire plăcută la consumători',
      'viorica2': 'Anul recoltei: 2018',
      'viorica3': 'Tipul de vin: Alb sec',
      'viorica4': 'Soi: 100% Viorica',
      'viorica5': 'Combinarea vinurilor cu mâncarea: Bruschete, carpaccio de somon, brânzeturi moi',
      'vioricaregala1': 'Vinul sec alb cu o aromă elegantă, de tip floral, echilibrat, cu un gust plăcut, bine conturat, plin de finețe, cu prospețimea ridicată. Feteasca Regală se asociază foarte bine cu gustările servite la începutul mesei, ca aperitiv, sau pot acompania majoritatea mâncărurilor pe bază de pește sau fructe de mare. Peștele de apă dulce, cum ar fi crapul, păstrăvul, șalăul, aproape întotdeauna mai delicat. Se recomandă ca vinul sa se servească la temperatura de 10-12 grade Celsius',
      'vioricaregala2': 'Anul recoltei: 2018',
      'vioricaregala3': 'Tipul de vin: Alb sec',
      'vioricaregala4': 'Soi: 100% Feteasca Regală',
      'vioricaregala5': 'Combinarea vinurilor cu mâncarea: Pește la grătar, salată de rucola',
      'vioricarose1': ' Impresionează cu o aromă variată rafinată şi o culoare delicată roz. Catifea cu nuanţe de o mulţime de fructe de padure, cum ar fi căpşuni şi cornelian. Fabricat din struguri Merlot, colectat până la maturitate completă. Gustul este un corp plin, armonios, moale, cu gust de boabe, cu aciditate redusă şi cu un gust persistent. Recomandat pentru toate ocaziile! Bine pe cont propriu!',
      'vioricarose2': 'Anul recoltei: 2018',
      'vioricarose3': 'Tipul de vin: Rose sec',
      'vioricarose4': 'Soi: 100% Merlot',
      'vioricarose5': 'Combinarea vinurilor cu mâncarea: Bucătărie mediteraneană, creveți, midii',
      'vioricaneagra1': 'Feteasca Neagra este un soi de struguri autohton care a fost cultivat pe teritoriul Moldovei acum 1500-2000 de ani. Datorită calităților sale deosebite, este cultivat în zone întinse din sudul Moldovei. Acesta este un vin expresiv cu o culoare rubiniu profund. Aroma bogată și complexă conține note de boabe de coacăze negre, mure, prune uscate, cireșe. Vinul are o textură bună, taninurile sale nu sunt agresive. Gustul este armonios, echilibrat, cu astringență moderată și note de coacăze, retrogustul este de neuitat de mult timp',
      'vioricaneagra2': 'Anul recoltei: 2018',
      'vioricaneagra3': 'Tipul de vin: Roșu sec',
      'vioricaneagra4': 'Soi: 100% Merlot',
      'vioricaneagra5': 'Combinarea vinurilor cu mâncarea: Carne de vită sau miel la grătar cu ardei copţi şi mămăligă. Rață la cuptor cu glazură, codimente verzi, mere coapte şi o reducţie de oţet balsamic sau cu piure de cartofi. Mousse au Chocolat cu ciocolată neagră, ardei iute, piper roşu şi sare de mare',
      'vioricamerlot1': 'Merlot are o culoare rubiniu profund, cu nuanțe misterioase. Aroma complexă cu tonuri de coacăze negre, cireșe, mure și ciocolată neagră. Are un gust plin, plăcut astringent, cu taninuri catifelate și note de fructe de pădure sălbatice. Postgust lung fructat. Buchetele Merlot au fost cultivate în podgorii din regiunea Ștefan Vodă (Sud-Est) a Moldovei și au fost atent selectate',
      'vioricamerlot2': 'Anul recoltei: 2016',
      'vioricamerlot3': 'Tipul de vin: Roșu sec',
      'vioricamerlot4': 'Soi: 100% Merlot',
      'vioricamerlot5': 'Combinarea vinurilor cu mâncarea: Pastele bologneze, medalioane de vițel',
      'vioricacabernet1': 'Acesta este un vin expresiv de culoare rubiniu intens, cu note de bronz. Aroma bogată și complexă conține tonuri de boabe de coacăze negre, mure, prune uscate, cireșe. Vinul are o textură bună, taninurile sale nu sunt agresive. Gustul este armonios, echilibrat, cu astringență moderată și note de coacăze, postgustul este lung, fructat. Strugurii pentru el au fost crescuți și recoltați cu grijă în podgoriile din regiunea Ștefan Vodă (Sud-Est) din Moldova',
      'vioricacabernet2': 'Anul recoltei: 2017',
      'vioricacabernet3': 'Tipul de vin: Roșu sec',
      'vioricacabernet4': 'Soi: 100% Cabernet Sauvignon',
      'vioricacabernet5': 'Combinarea vinurilor cu mâncarea: Friptură de vită, porc, brânzeturi tari',
      'vioricamalbec1': 'Vin roșu rubiniu închis, cu un bogat buchet fructat, cu note de prune uscate și mure. Gustul este plin, catifelat, cu arome proaspete de coacăz roșu și cireș negru combinate cu taninuri dulci rotunjite. Finalul este lung, cu note de scorțișoară și cuișoare. Vin de calitate excelentă pentru bucuria sărbătorilor',
      'vioricamalbec2': 'Anul recoltei: 2019',
      'vioricamalbec3': 'Tipul de vin: Roșu sec',
      'vioricamalbec4': 'Soi: 100% Malbec',
      'vioricamalbec5': 'Combinarea vinurilor cu mâncarea: Servit cu pizza la cuptor, lasagna, bucătărie mexicană, vânat, preparate din carne',
      'vioricariton1': 'Riton oferă tot ce vă așteptați de la un vin alb tânăr și poate mai mult: aromă subtilă, prospețime, aciditate și o anumită structură. Vin alb cu o nuanță verzuie. Sauvignon Blanc a subliniat o aromă delicată complexă, cu note de coacăz negru, fruct de pasiune, pe fundalul unei arome pronunțate de citrice. Acest vin are tot ce căutați: gust proaspăt, aromă de neuitat și prospețime!',
      'vioricariton2': 'Anul recoltei: 2019',
      'vioricariton3': 'Tipul de vin: Alb sec',
      'vioricariton4': 'Soi: Sauvignon Blanc 60% Riton 40%',
      'vioricariton5': 'Combinarea vinurilor cu mâncarea: Servit cu pește, sparanghel și fructe de mare ( stridii și creveți )'

    }
  }

  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');
      saveLocalLang(lang)
      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });

  // Local storage
  function saveLocalLang(language) {
    let langs
    if (localStorage.getItem('langs') === null) {
      langs = []
    } else {
      langs = JSON.parse(localStorage.getItem('langs'))
    }
    langs.push(language)
    localStorage.setItem('langs', JSON.stringify(langs))
  }

  function getLocalLang() {
    let langs
    if (localStorage.getItem('langs') === null) {
      langs = []
    } else {
      langs = JSON.parse(localStorage.getItem('langs'))
    }
    langs.forEach(function (language) {
      let lang = langs[langs.length - 1]
      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
  })
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
