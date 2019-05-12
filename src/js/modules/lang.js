const Lang = {
  init() {
    let arrLang = {
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

    $('.translate').click(function() {
      var lang = $(this).attr('id');
      $('.lang').each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  },
};

export default Lang;
