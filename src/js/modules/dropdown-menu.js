const DropdownMenu = {
  init() {
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
