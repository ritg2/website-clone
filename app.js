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

function scroll(element) {
  element.scrollLeft = 0;

  let pos = { left: 0, x: 0 };

  element.addEventListener("mousedown", mouseDownHandler);

  function mouseDownHandler(e) {
    pos = {
      left: element.scrollLeft,
      x: e.clientX,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    function mouseMoveHandler(e) {
      const dx = e.clientX - pos.x;
      element.scrollLeft = pos.left - dx;
    }

    function mouseUpHandler() {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    }
  }
}

const orderScroll = document.getElementById("order-items");

scroll(orderScroll);

const sliderContainer = document.querySelectorAll(".slide-container");

const nextBtn = document.querySelectorAll(".btn-next");
const prevBtn = document.querySelectorAll(".btn-prev");

sliderContainer.forEach((slide, indx) => {
  scroll(slide);
  nextBtn[indx].addEventListener("click", () => {
    slide.scrollLeft += 300;
  });

  console.log(nextBtn[indx])

  prevBtn[indx].addEventListener("click", () => {
    slide.scrollLeft -= 300;
  });
});


const showOnPx = 300;
const navbar = document.querySelector("nav")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    navbar.classList.add("change")
  } else {
    navbar.classList.remove("change")
  }
})