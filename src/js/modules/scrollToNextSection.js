const SmoothToNextSection = {
  init() {

    let scrollToNextSectionButton = document.querySelector('.scrollToNextSection'),
      sectionIdsArray = ['about', 'friends', 'partners', 'social', 'contacts']

    scrollToNextSectionButton.addEventListener('click', (event) => {
      // debugger;
      event.preventDefault();
      let currentY = window.pageYOffset,
        sectionsY = [],
        isTriggered = undefined;
      sectionIdsArray.some(sectionId => {
        let sectionElementY = document.querySelector(`#${sectionId}`).offsetTop;
        if (currentY + 150 <= sectionElementY) {
          $('html, body').animate({
            scrollTop: sectionElementY
          }, 100);
          return true;
        }
      })
    })
  },
};

export default SmoothToNextSection;
