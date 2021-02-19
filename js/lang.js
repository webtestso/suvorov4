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
    'counter4': 'Silver medals for the last 20 years'

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
    'counter4': 'Серебряных медалей за последние 20 лет'
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
    'counter4': 'Medalii de argint din ultimii 20 de ani'
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

$('#name2').attr('placeholder','Your name *');
$('#email2').attr('placeholder','Email *');

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
