const hamDrop = document.querySelector(".ham-menu");
const dropMenu = document.querySelector(".menu");

function toggleDropdown() {
  dropMenu.classList.toggle("show");
}

hamDrop.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", () => {
  if (dropMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

const orderScroll = document.getElementById("order-items");

orderScroll.scrollLeft = 0;

let pos = { left: 0, x: 0 };

orderScroll.addEventListener("mousedown", mouseDownHandler);

function mouseDownHandler(e) {
  pos = {
    left: orderScroll.scrollLeft,
    x: e.clientX,
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);

  function mouseMoveHandler(e) {
    const dx = e.clientX - pos.x;
    orderScroll.scrollLeft = pos.left - dx;
  }

  function mouseUpHandler() {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  }
}

// const slides = document.querySelector(".slides");
// const nextSlide = document.querySelector(".btn-next");

let sliderContainer = document.querySelector(".slide-container");
let innerSlider = document.querySelector(".slide");

const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

nextBtn.addEventListener("click", () => {
  sliderContainer.scrollLeft += 330;
  console.log(sliderContainer.scrollLeft);
});

prevBtn.addEventListener("click", () => {
  sliderContainer.scrollLeft -= 330;
  console.log(sliderContainer.scrollLeft);
});