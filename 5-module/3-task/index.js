function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');

  let carouselInnerWidth = carouselInner.offsetWidth; 
  arrowLeft.style.display = "none";
  arrowRight.style.display = "";
  let position = 0;

  document.addEventListener("click", function (event) {
  
    if (!isArrowClick(event, arrowLeft, arrowRight)) {
      return;
    }


    if (event.target.closest("div") === arrowLeft) {
      position--; 
      if (position == 0) {
        arrowLeft.style.display = "none";
      } else {
        arrowLeft.style.display = "";
      }
      if (position == 3) {
        arrowRight.style.display = "none";
      } else {
        arrowRight.style.display = "";
      }

      let shift = position * carouselInnerWidth;
      carouselInner.style.transform = `translateX(-${shift}px)`;
    } else {
      position++;
      if (position == 0) {
        arrowLeft.style.display = "none";
      } else {
        arrowLeft.style.display = "";
      }
      if (position == 3) {
        arrowRight.style.display = "none";
      } else {
        arrowRight.style.display = "";
      }
      let shift = position * carouselInnerWidth;
      carouselInner.style.transform = `translateX(-${shift}px)`;
    }
  });
}  

function isArrowClick(event, arrowLeft, arrowRight) {
  if (
    event.target.closest("div") === arrowLeft ||
    event.target.closest("div") === arrowRight
  ) {
    return true;
  }
  return false;
}
