import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.position = 0;
    this.slides = slides;

    this.elem = this.renderCarousel();

    this.appendSlidesToCarousel(slides);

    this.addEventListenerToProductAddButton();

    this.addEventListenerToScroll();

    this.arrowLeft = this.elem.querySelector(".carousel__arrow_left");
    this.arrowRight = this.elem.querySelector(".carousel__arrow_right");
    this.divCarousel = this.elem.querySelector(".carousel__inner");

    this.makeProperView();
  }

  makeProperView() {
    if (this.position == 0) {
      this.arrowRight.style.display = "";
      this.arrowLeft.style.display = "none";
    }
    if ((this.position < this.slides.length - 1) & (this.position > 0)) {
      this.arrowRight.style.display = "";
      this.arrowLeft.style.display = "";
    }
    if (this.position === this.slides.length - 1) {
      this.arrowRight.style.display = "none";
      this.arrowLeft.style.display = "";
    }
  }
  
  
  renderCarousel() {
    return createElement(`
    <div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon"/>
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon"/>
      </div>
      <div class="carousel__inner"></div>
    </div>
  `);
  }


  appendSlidesToCarousel(slides) {
    let appendNode = this.elem.querySelector(".carousel__inner");
    for (let slide of slides) {
      let nodeSlide = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide"/>
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon"/>
            </button>
          </div>
        </div>
      `);
      appendNode.appendChild(nodeSlide);
    }
  }


  addEventListenerToProductAddButton() {
    this.elem.addEventListener("click", (event) => {
      if (event.target.closest("button")) {
        let btnNode = event.target.closest("button");
        let slideNode = btnNode.parentElement.parentElement;
        let id = slideNode.dataset.id;
        let customEvent = new CustomEvent("product-add", {
          detail: id, 
          bubbles: true, 
        });
        this.elem.dispatchEvent(customEvent);
      }
    });
  }


  checkIsArrowLeftOrRight(event) {
    if (
      event.target.closest("div") === this.arrowLeft ||
      event.target.closest("div") === this.arrowRight
    ) {
      return true;
    }
    return false;
  }


  addEventListenerToScroll() {
    this.elem.addEventListener("click", (event) => {
      let divCarouselWidth = this.divCarousel.offsetWidth;
      if (!this.checkIsArrowLeftOrRight(event)) {
        return;
      }
      if (event.target.closest("div") === this.arrowLeft) {
        this.position--;
      } else {
        this.position++;
      }
      this.makeProperView();
      let shift = this.position * divCarouselWidth;
      this.divCarousel.style.transform = `translateX(-${shift}px)`;
    });
  }
}