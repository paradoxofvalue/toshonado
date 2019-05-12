const DropdownMenu = {
  init() {
    var toggle = document.querySelector('.toggle'),
      aside = document.querySelector('aside');

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      toggle.classList.toggle('opened');
      aside.classList.toggle('visible')
    })

    var property = "flow-into";

    // check if any variant exists, prefixed or not
    var isCapable = ['-webkit-', '-ms-', '-moz-', ''].some(function (prefix) {
      return prefix + property in document.body.style
    })

    property = isCapable ? property : 'no-' + property;

    document.body.classList.add(property)
  },
};

export default DropdownMenu;
