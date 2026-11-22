export const initTrainersSlider = () => {
  const list = document.querySelector("[data-trainers-list]");
  const prevBtn = document.querySelector("[data-trainers-prev]");
  const nextBtn = document.querySelector("[data-trainers-next]");
  const scrollbar = document.querySelector("[data-trainers-scrollbar]");
  const drag = document.querySelector("[data-trainers-drag]");

  if (!list || !prevBtn || !nextBtn) return;

  const updateControls = () => {
    const maxScroll = list.scrollWidth - list.clientWidth;
    const currentScroll = list.scrollLeft;

    prevBtn.disabled = currentScroll <= 2;
    nextBtn.disabled = currentScroll >= maxScroll - 2;

    if (scrollbar && drag && maxScroll > 0) {
      const ratio = list.clientWidth / list.scrollWidth;
      const dragWidth = Math.max(ratio * 100, 20); // Минимум 20% ширины
      const progress = currentScroll / maxScroll;
      const maxTranslate =
        scrollbar.clientWidth - (scrollbar.clientWidth * dragWidth) / 100;

      drag.style.width = `${dragWidth}%`;
      drag.style.transform = `translateX(${progress * maxTranslate}px)`;
    }
  };

  const getScrollStep = () => {
    const item = list.querySelector(".trainers__item");
    const gap = parseFloat(getComputedStyle(list).gap) || 0;
    return item ? item.offsetWidth + gap : 300;
  };

  prevBtn.addEventListener("click", () => {
    list.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    list.scrollBy({ left: getScrollStep(), behavior: "smooth" });
  });

  list.addEventListener("scroll", updateControls);
  window.addEventListener("resize", updateControls);

  updateControls();
};
