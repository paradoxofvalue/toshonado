const Carousels = {
  init() {
    $('.ourFriendsCarousel').owlCarousel({
      loop: true,
      nav: true,
      items: 2,
    });
    $('.ourPartnersCarousel').owlCarousel({
      // loop: true,
      items: 3,
      nav: true,
      slideBy: 3,
      onInitialized: drawPages,
      onDragged: redrawPages,
      onTranslated: redrawPages,
    });
    function drawPages(event) {
      var pages = event.page.count;     // Number of pages
      var page = event.page.index + 1;
      page = 1;
      pages = Math.ceil(event.item.count / this.options.slideBy);
      let owlNavElement = document.querySelector('.ourPartnersCarousel .owl-nav'),
        owlNextElement = owlNavElement.querySelector('.owl-next');

      owlNextElement.insertAdjacentHTML('beforebegin', `<div>${page}/${pages}</div>`)
    }
    function redrawPages(event) {
      var pages = event.page.count;     // Number of pages
      var page = event.page.index + 1;     // Position of the current page
      let owlNavElement = document.querySelector('.ourPartnersCarousel .owl-nav'),
        divElement = owlNavElement.querySelector('div');

      divElement.innerHTML = `${page}/${pages}`;
    }
  },
};

export default Carousels;
