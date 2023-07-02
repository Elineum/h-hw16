const sliderPrev = document.querySelector(".scroll-back");
const sliderNext = document.querySelector(".scroll-next");
let currSlide = 1;

const scroll = (event) => {
  if (event.target.classList.contains("scroll-back")) {
    changeImgSrc(--currSlide);
    updatePosibility();
    return;
  }

  changeImgSrc(++currSlide);
  updatePosibility();
};

const changeImgSrc = (currNum) => {
  const img = document.querySelector(".slider-image");
  img.src = `./src/images/${currNum}.jpg`;
};

const setDisable = (element) => {
  element.disabled = true;
  element.classList.add("scroll-nav-disable");
};

const unsetDisable = (element) => {
  element.disabled = false;
  element.classList.remove("scroll-nav-disable");
};

const updatePosibility = () => {
  if (currSlide === 1) {
    setDisable(sliderPrev);
    return;
  } else if (currSlide === 5) {
    setDisable(sliderNext);
    return;
  }

  unsetDisable(sliderPrev);
  unsetDisable(sliderNext);
};

updatePosibility();

sliderPrev.addEventListener("click", scroll);
sliderNext.addEventListener("click", scroll);
