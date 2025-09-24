  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, n) => {
      slide.classList.toggle("active", n === i);
      dots[n].classList.toggle("active", n === i);
    });
    index = i;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  setInterval(nextSlide, 6000);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });
