const TorchHover = {
  init() {
    let torchElement = document.querySelector('.ourFriends__torchOurFriends');
    torchElement.addEventListener('mouseover', triggerAnimation);
    function triggerAnimation(event) {
      let target = event.currentTarget;
      target.classList.add('animation');
      setTimeout(() => {
        target.classList.add('animation-finish');
      }, 4500);
    } 
  },
};

export default TorchHover;
