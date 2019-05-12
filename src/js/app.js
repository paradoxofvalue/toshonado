// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import Lang from './modules/lang';
import DropdownMenu from './modules/dropdown-menu'
import Mask from './modules/jquery-mask-plugin'

(($) => {
  // When DOM is ready
  $(() => {
    Lang.init();
    DropdownMenu.init();
    Mask.init();
  });
})(jQuery);
