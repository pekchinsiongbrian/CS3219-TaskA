const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-btn-right");
const prevButton = document.querySelector(".carousel-btn-left");
const dotsNav = document.querySelector(".carousel-indicator-container");
const dots = Array.from(dotsNav.children);

const moveToSlide = (currentSlide, targetSlide) => {
  currentSlide.classList.remove("active-slide");
  targetSlide.classList.add("active-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("active-slide-indicator");
  targetDot.classList.add("active-slide-indicator");
};

// When click left, move slides to left
prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".active-slide");
  const currentDot = dotsNav.querySelector(".active-slide-indicator");

  let prevSlide = currentSlide.previousElementSibling;
  let prevDot = currentDot.previousElementSibling;

  if (!prevSlide) {
    prevSlide = slides[slides.length - 1];
    prevDot = dots[dots.length - 1];
  }

  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  // Move to the next slide and update dot indicator
  moveToSlide(currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});

// When click right, move slides to right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".active-slide");
  const currentDot = dotsNav.querySelector(".active-slide-indicator");

  let nextSlide = currentSlide.nextElementSibling;
  let nextDot = currentDot.nextElementSibling;

  if (!nextSlide) {
    nextSlide = slides[0];
    nextDot = dots[0];
  }

  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  // Move to the next slide and update dot indicator
  moveToSlide(currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});

// When click nav indicators, move to that slide
dotsNav.addEventListener("click", (e) => {
  // What indicator was clicked on?
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".active-slide");
  const currentDot = dotsNav.querySelector(".active-slide-indicator");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
