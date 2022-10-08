function initCarousel() {
  // ваш код...
  let carousel = document.querySelector('.carousel');
  let slide = document.querySelector('.carousel__slide');
  let pitch = slide.offsetWidth;
  let carouselInner = document.querySelector('.carousel__inner');

  let arrow_right = document.querySelector('.carousel__arrow_right');
  let arrow_left = document.querySelector('.carousel__arrow_left');
  arrow_left.style.display = 'none';

  let slideNumber = 0; 

  carousel.onclick = function (event) {
    let target = event.target;

    switch (true) {
      case target.closest('.carousel__arrow_right') && slideNumber < carouselInner.children.length - 1:
        slideNumber++;        
        break;

      case target.closest('.carousel__arrow_left') && slideNumber > 0:
        slideNumber--;        
        break;

      default:
        break;
    } 
   
    slideNumber == carouselInner.children.length - 1 ? arrow_right.style.display = 'none' : arrow_right.style.display = '';
    slideNumber == 0 ? arrow_left.style.display = 'none' : arrow_left.style.display = '';
    
    carouselInner.style.transform = `translateX( ${-pitch * slideNumber + 'px'} )`;
  };
}
