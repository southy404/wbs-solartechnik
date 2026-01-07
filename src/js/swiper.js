document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("swiperTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!track || !prevBtn || !nextBtn) return;

  const slides = track.children;
  let index = 0;

  function updateSwiper() {
    const slideWidth = slides[0].offsetWidth;
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    const offset = (slideWidth + gap) * index;

    track.style.transform = `translateX(-${offset}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < slides.length - 1) {
      index++;
      updateSwiper();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSwiper();
    }
  });

  window.addEventListener("resize", updateSwiper);
});
