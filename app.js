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
    // if(screen.width < 768){
    //   slide.scrollLeft += 300;
    // }else if(screen.width > 768 && screen.width < 1200){
    //   slide.scrollLeft += 300
    // }else {
    //   slide.width += 400
    // }
    slide.scrollLeft += 300;
  });

  prevBtn[indx].addEventListener("click", () => {
    slide.scrollLeft -= 300;
  });
});

let scrollLeft = 0

// function loop(element) {
//   // Increment the scroll position
//   scrollLeft += 300;

//   // Reset the scroll position if it exceeds the scroll width
//   if (scrollLeft >= element.scrollWidth) {
//     scrollLeft = 0;
//   }

//   // Set the new scroll position
//   element.scrollLeft = scrollLeft;

//   // Call loop() again after a short delay to animate the scroll
//   setTimeout(loop, 10);
// }

setInterval(() => {
  autoSlide(sliderContainer[0]);
}, 5000);

setInterval(() => {
  autoSlide(sliderContainer[1]);
}, 6000);

setInterval(() => {
  autoSlide(sliderContainer[2]);
}, 7000);

setInterval(() => {
  autoSlide(sliderContainer[3]);
}, 5000);

function autoSlide(element) {
  if (element.scrollLeft === element.scrollWidth - element.offsetWidth) {
    element.scrollLeft = 0;
    console.log("hello");
  } else {
    element.scrollLeft += 300;
    console.log(element.scrollLeft);
    console.log(element.scrollWidth - element.offsetWidth);
  }
}

const showOnPx = 300;
const navbar = document.querySelector("nav");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    navbar.classList.add("change");
  } else {
    navbar.classList.remove("change");
  }
});
