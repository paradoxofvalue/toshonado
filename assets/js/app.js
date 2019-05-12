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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can write a call and import your functions in this file.
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
  });
})(jQuery);

},{"./modules/carousels":2,"./modules/dropdown-menu":3,"./modules/jquery-mask-plugin":4,"./modules/lang":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Carousels = {
  init: function init() {
    $('.ourFriendsCarousel').owlCarousel({
      loop: true,
      nav: true,
      items: 2
    });
    $('.ourPartnersCarousel').owlCarousel({
      // loop: true,
      items: 3,
      nav: true,
      slideBy: 3,
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
        aside = document.querySelector('aside');

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      toggle.classList.toggle('opened');
      aside.classList.toggle('visible');
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Lang = {
  init: function init() {
    var arrLang = {
      'en': {
        'home': 'Home',
        'about': 'About Us',
        'contact': 'Contact Us'
      },
      'ru': {
        'home': 'Главная',
        'about': 'О компании',
        'contact': 'Контакты'
      }
    };

    $('.translate').click(function () {
      var lang = $(this).attr('id');
      $('.lang').each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  }
};

exports.default = Lang;

},{}]},{},[1]);
