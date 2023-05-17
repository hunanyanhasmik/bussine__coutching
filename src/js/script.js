const contactForm  = document.querySelector('#contact-form').addEventListener('submit', (e) => {
  // e.preventDefault();
  // e.target.elements.name.value = '';
  // e.target.elements.email.value = '';
  // e.target.elements.message.value = '';

  let data = new FormData(contactForm);  
  fetch("url", { method: "POST", body: data });
  contactForm.reset()
});


const burgerMenu = document.querySelector(".burger__menu");
const dropDown = document.querySelector(".dropDown");



burgerMenu.addEventListener("click", () => {
  dropDown.classList.toggle("active");
  if (dropDown.classList.contains("active")) {
    burgerMenu.classList.add("active");
  } else {
    burgerMenu.classList.remove("active");
  }
});







function Slider() {
  const carouselSlides = document.querySelectorAll(".testimonial__slider__info");
  const btnPrev = document.querySelector(".testimonial__slider__btn.prev");
  const btnNext = document.querySelector(".testimonial__slider__btn.next");

  let currentSlide = 0;

  const changeSlide = function (slides) {
      carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
  };
  changeSlide(currentSlide);

  btnNext.addEventListener("click", function () {
      currentSlide++; 
      if (carouselSlides.length - 1 < currentSlide) {
          currentSlide = 0;
      };
      changeSlide(currentSlide);
});
  btnPrev.addEventListener("click", function () {
      currentSlide--;
      if (0 > currentSlide) {
          currentSlide = carouselSlides.length - 1;
      }; 
      changeSlide(currentSlide);
  });
};
Slider();