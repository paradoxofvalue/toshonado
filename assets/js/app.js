(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _lang = require('./modules/lang');

var _lang2 = _interopRequireDefault(_lang);

var _dropdownMenu = require('./modules/dropdown-menu');

var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);

var _jqueryMaskPlugin = require('./modules/jquery-mask-plugin');

var _jqueryMaskPlugin2 = _interopRequireDefault(_jqueryMaskPlugin);

var _carousels = require('./modules/carousels');

var _carousels2 = _interopRequireDefault(_carousels);

var _smoothTo = require('./modules/smoothTo');

var _smoothTo2 = _interopRequireDefault(_smoothTo);

var _scrollToNextSection = require('./modules/scrollToNextSection');

var _scrollToNextSection2 = _interopRequireDefault(_scrollToNextSection);

var _form = require('./modules/form');

var _form2 = _interopRequireDefault(_form);

var _torchHover = require('./modules/torchHover');

var _torchHover2 = _interopRequireDefault(_torchHover);

var _lazyLoad = require('./modules/lazyLoad');

var _lazyLoad2 = _interopRequireDefault(_lazyLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_lazyLoad2.default.init(); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
  // When DOM is ready
  $(function () {
    _lang2.default.init();
    _dropdownMenu2.default.init();
    _jqueryMaskPlugin2.default.init();
    _carousels2.default.init();
    _smoothTo2.default.init();
    _scrollToNextSection2.default.init();
    _form2.default.init();
    _torchHover2.default.init();
  });
})(jQuery);

},{"./modules/carousels":2,"./modules/dropdown-menu":3,"./modules/form":4,"./modules/jquery-mask-plugin":5,"./modules/lang":6,"./modules/lazyLoad":7,"./modules/scrollToNextSection":8,"./modules/smoothTo":9,"./modules/torchHover":10}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Carousels = {
  init: function init() {
    $('.ourFriendsCarousel').owlCarousel({
      loop: true,
      nav: true,
      items: 2,
      responsive: {
        0: {
          nav: false
        },
        768: {
          nav: true
        }
      }
    });
    $('.ourPartnersCarousel').owlCarousel({
      // loop: true,
      items: 3,
      nav: true,
      slideBy: 3,
      responsive: {
        0: {
          items: 2,
          onInitialized: drawPages,
          onDragged: redrawPages,
          onTranslated: redrawPages
        },
        1024: {
          items: 3
        }
      },
      onInitialized: drawPages,
      onDragged: redrawPages,
      onTranslated: redrawPages
    });
    function drawPages(event) {
      var pages = event.page.count; // Number of pages
      var page = event.page.index + 1;
      page = 1;
      pages = Math.ceil(event.item.count / this.options.slideBy);
      var owlNavElement = document.querySelector('.ourPartnersCarousel .owl-nav'),
          owlNextElement = owlNavElement.querySelector('.owl-next');

      owlNextElement.insertAdjacentHTML('beforebegin', '<div>' + page + '/' + pages + '</div>');
    }
    function redrawPages(event) {
      var pages = event.page.count; // Number of pages
      var page = event.page.index + 1; // Position of the current page
      var owlNavElement = document.querySelector('.ourPartnersCarousel .owl-nav'),
          divElement = owlNavElement.querySelector('div');

      divElement.innerHTML = page + '/' + pages;
    }
  }
};

exports.default = Carousels;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DropdownMenu = {
  init: function init() {
    var toggle = document.querySelector('.toggle'),
        aside = document.querySelector('aside'),
        body = document.querySelector('body');

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      toggle.classList.toggle('opened');
      aside.classList.toggle('visible');
      body.classList.toggle('menu-opened');
    });

    body.addEventListener('click', function (event) {
      if (event.target != toggle && body.classList.contains('menu-opened')) {
        toggle.classList.remove('opened');
        aside.classList.remove('visible');
        body.classList.remove('menu-opened');
      }
    });

    var property = "flow-into";

    // check if any variant exists, prefixed or not
    var isCapable = ['-webkit-', '-ms-', '-moz-', ''].some(function (prefix) {
      return prefix + property in document.body.style;
    });

    property = isCapable ? property : 'no-' + property;

    document.body.classList.add(property);
  }
};

exports.default = DropdownMenu;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Form = {
  init: function init() {
    $("form.material__form").on("submit", function (event) {
      event.preventDefault();
      var data = {
        'name': $(this).find('[name="name"]').val(),
        'phone': $(this).find('[name="phone"]').val(),
        'message': $(this).find('[name="message"]').val()
      };
      $.ajax({
        type: "POST",
        url: "send.php",
        data: data,
        dataType: 'json',
        success: function success(response) {
          console.log(response);
          alert(response.message);
        },
        error: function error(response) {
          console.log(response);
          alert(response.message);
        }
      });
    });
  }
};

exports.default = Form;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Mask = {
  init: function init() {
    $(document).ready(function () {
      $('#phone').mask('+00 (000) 00-00-000');
    });
  }
};

exports.default = Mask;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Lang = {
  init: function init() {
    var _ua, _ru;

    var arrLang = {
      'ua': (_ua = {
        'nav_about': 'Про нас',
        'nav_friends': 'Наші друзі',
        'nav_partners': 'Наші партнери',
        'nav_social': 'Соціальна відповідальність',
        'nav_contacts': 'Контакти',
        /** hero section */
        'hero_description': 'Маркетингове агентство повного циклу',
        'hero_secondaryHeader_1': 'Потрібна реклама або медіапідтримка?',
        'hero_secondaryHeader_2': 'Агенція ToShoNado має саме те що вам треба!',
        /** about section */
        'about_secondaryHeader': 'Вам потрібен резонанс, інформаційний супровід або реклама? Наша команда це забезпечить! Бо ми ToShoNado Agency!',
        'about_text_1': 'ToShoNado – це молодий бренд з давньою історією успіху. З 2002 року займаємося інформаційним супроводом великого бізнесу, політичних і державних організацій в якості PR-підрозділу одного з найвпливовіших медіахолдингів країни. З 2018 року здобули «незалежність», відкрили у Києві та Харкові офіси під брендом «ToShoNado».',
        'about_text_2': 'Ми ЄДИНЕ в Україні маркетингове агентство, яке має власний медіаресурс на 15 млн читачів щомісячно. За нашими плечима десятки успішних кейсів, досвідчені фахівці, впливові партнери та масштабні медіапроекти.',
        /** partners section */
        'partners_secondaryHeader': 'Портфоліо',
        /** social section */
        'social_secondaryHeader_1': 'Всеукраїнський проект «Екоофіс» - те, чим ми пишаємось найбільше!',
        'social_ach_tree': '<strong>800</strong> збережених дерев',
        'social_ach_paper': '<strong>420</strong> тонн зібраної макулатури',
        'social_ach_earth': '<strong>Щорічна</strong> посадка дерев на День Землі',
        'social_ach_events': '<strong>2 офлайн і 2 онлайн</strong> заходи на рік',
        'social_ach_gau': 'Кращий соціальний проект 2011 року за версією <strong>Green Awards Ukraine</strong>'
      }, _defineProperty(_ua, 'social_secondaryHeader_1', 'Участь в ініціативі USAID «Regional monitoring and analysis for 100% of Life»'), _defineProperty(_ua, 'social_part_prozoro', 'Моніторинг закупівель лікарських засобів через систему <strong>ProZorro</strong>'), _defineProperty(_ua, 'social_part_coop', 'Робота над проектом в кооперації з <strong>«Сomments.ua»</strong>'), _defineProperty(_ua, 'social_part_corrupt', '<strong>Викриття</strong> корупційних схем в лікарнях і госпіталях на мільйони гривень'), _defineProperty(_ua, 'contacts_phone_kyiv', 'pr.toshonado@gmail.com (Київ)'), _defineProperty(_ua, 'contacts_phone_kharkiv', 'toshonado.kha@gmail.com (Харків)'), _defineProperty(_ua, 'contacts_email_kyiv', '+38 (067) 467-70-07 (Київ)'), _defineProperty(_ua, 'contacts_email_kharkiv', '+38 (098) 378-98-98 (Харків)'), _defineProperty(_ua, 'contacts_secondaryHeader', 'Залиште заявку і ми Вам зателефонуємо!'), _defineProperty(_ua, 'contacts_name', 'Ваше ім\'я*'), _defineProperty(_ua, 'contacts_name_error', 'Введіть як мінімум 2 літери'), _defineProperty(_ua, 'contacts_phone', 'Ваш телефон*'), _defineProperty(_ua, 'contacts_phone_error', 'Щось не так!'), _defineProperty(_ua, 'contacts_message', 'Повідомлення'), _defineProperty(_ua, 'contacts_message_error', 'Не менше 10 букв'), _defineProperty(_ua, 'contacts_send', 'Надіслати'), _defineProperty(_ua, 'footer_address_kyiv', 'м. Київ, вул. Василя Яна, 3/5'), _defineProperty(_ua, 'footer_address_kharkiv', 'м. Харків, пр. Гагаріна, 50'), _ua),
      'ru': (_ru = {
        'nav_about': 'О нас',
        'nav_friends': 'Наши друзья',
        'nav_partners': 'Наши партнеры',
        'nav_social': 'Социальная ответственность',
        'nav_contacts': 'Контакты',
        /** hero section */
        'hero_description': 'Маркетинговое агенство полного цикла',
        'hero_secondaryHeader_1': 'Нужна реклама или медиаподдержка?',
        'hero_secondaryHeader_2': 'У нас есть для вас ToShoNado!',
        /** about section */
        'about_secondaryHeader': 'Вам нужен резонанс, информационное сопровождение или реклама? Мы это обеспечим!',
        'about_text_1': 'ToShoNado — это молодой бренд, но с давней историей успеха. С 2002 года занимаемся информационным сопровождением бизнеса, политических и государственных организаций в качестве PR-подразделения одного из крупнейших в Украине медиа-холдингов.',
        'about_text_2': 'С 2018 года обрели «независимость», открыли в Киеве и Харькове офисы под брендом «ToShoNado».  Мы — ЕДИНСТВЕННОЕ в Украине маркетинговое агентство, которое имеет собственный медиаресурс в 15 млн читателей/подпичиков в месяц. За нашими плечами десятки успешных кейсов, опытные специалисты, крупные клиенты и масштабные медиапроекты.',
        /** partners section */
        'partners_secondaryHeader': 'Портфолио',
        /** social section */
        'social_secondaryHeader_1': 'Наша гордость — всеукраинский проект «Экоофис»',
        'social_ach_tree': '<strong>800</strong> сохраненных деревьев',
        'social_ach_paper': '<strong>420</strong> тонн собранной макулатуры',
        'social_ach_earth': '<strong>Ежегодная</strong> посадка деревьев на День Земли',
        'social_ach_events': '<strong>2 офлайн и 2 онлайн</strong> мероприятия в год',
        'social_ach_gau': 'Лучший социальный проект 2011 года по версии <strong>Green Awards Ukraine</strong>'
      }, _defineProperty(_ru, 'social_secondaryHeader_1', 'Участие в инициативе USAID «Regional monitoring and analysis for 100% of Life»'), _defineProperty(_ru, 'social_part_prozoro', 'Мониторинг закупок лекарственных средств через систему ProZorro'), _defineProperty(_ru, 'social_part_coop', 'Работа над проектом в кооперации  с «Сomments.ua»'), _defineProperty(_ru, 'social_part_corrupt', 'Разоблачение коррупционных схем в больницах и госпиталях на миллионы гривен'), _defineProperty(_ru, 'contacts_phone_kyiv', 'pr.toshonado@gmail.com (Киев)'), _defineProperty(_ru, 'contacts_phone_kharkiv', 'toshonado.kha@gmail.com (Харьков)'), _defineProperty(_ru, 'contacts_email_kyiv', '+38 (067) 467-70-07 (Киев)'), _defineProperty(_ru, 'contacts_email_kharkiv', '+38 (098) 378-98-98 (Харьков)'), _defineProperty(_ru, 'contacts_secondaryHeader', 'Оставьте заявку и мы Вам перезвоним!'), _defineProperty(_ru, 'contacts_name', 'Ваше имя*'), _defineProperty(_ru, 'contacts_name_error', 'Введите как минимум 2 буквы'), _defineProperty(_ru, 'contacts_phone', 'Ваш телефон*'), _defineProperty(_ru, 'contacts_phone_error', 'Что-то не так!'), _defineProperty(_ru, 'contacts_message', 'Сообщение'), _defineProperty(_ru, 'contacts_message_error', 'Не меньше 10 букв'), _defineProperty(_ru, 'contacts_send', 'Отправить'), _defineProperty(_ru, 'footer_address_kyiv', 'г. Киев, 01033 ул. Василия Яна 3/5'), _defineProperty(_ru, 'footer_address_kharkiv', 'г. Харьков, пр. Гагарина, 50'), _ru)
    };

    $('.lang-select').change(function () {
      var lang = $(this).val();
      $('.lang').each(function (index, element) {
        $(this).html(arrLang[lang][$(this).attr('key')]);
      });
    });
  }
};

exports.default = Lang;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LazyLoad = {
  init: function init() {
    document.addEventListener("DOMContentLoaded", function () {
      var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
      var active = false;

      var lazyLoad = function lazyLoad() {
        if (active === false) {
          active = true;

          setTimeout(function () {
            lazyImages.forEach(function (lazyImage) {
              if (lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0 && getComputedStyle(lazyImage).display !== "none") {
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.srcset = lazyImage.dataset.srcset;
                lazyImage.classList.remove("lazy");

                lazyImages = lazyImages.filter(function (image) {
                  return image !== lazyImage;
                });

                if (lazyImages.length === 0) {
                  document.removeEventListener("scroll", lazyLoad);
                  window.removeEventListener("resize", lazyLoad);
                  window.removeEventListener("orientationchange", lazyLoad);
                }
              }
            });

            active = false;
          }, 200);
        }
      };

      document.addEventListener("scroll", lazyLoad);
      window.addEventListener("resize", lazyLoad);
      window.addEventListener("orientationchange", lazyLoad);
    });
  }
};

exports.default = LazyLoad;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SmoothToNextSection = {
  init: function init() {

    var scrollToNextSectionButton = document.querySelector('.scrollToNextSection'),
        sectionIdsArray = ['about', 'friends', 'partners', 'social', 'contacts'];

    scrollToNextSectionButton.addEventListener('click', function (event) {
      // debugger;
      event.preventDefault();
      var currentY = window.pageYOffset,
          sectionsY = [],
          isTriggered = undefined;
      sectionIdsArray.some(function (sectionId) {
        var sectionElementY = document.querySelector('#' + sectionId).offsetTop;
        if (currentY + 150 <= sectionElementY) {
          $('html, body').animate({
            scrollTop: sectionElementY
          }, 100);
          return true;
        }
      });
    });
  }
};

exports.default = SmoothToNextSection;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SmoothTo = {
  init: function init() {
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]').not('[href="#0"]').click(function (event) {
      // On-page links
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 100, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  }
};

exports.default = SmoothTo;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TorchHover = {
  init: function init() {
    var torchElement = document.querySelector('.ourFriends__torchOurFriends');
    torchElement.addEventListener('mouseover', triggerAnimation);
    function triggerAnimation(event) {
      var target = event.currentTarget;
      target.classList.add('animation');
      setTimeout(function () {
        target.classList.add('animation-finish');
      }, 4500);
    }
  }
};

exports.default = TorchHover;

},{}]},{},[1]);
