export const initModals = () => {
  const openBtns = document.querySelectorAll("[data-modal-target]");
  const modals = document.querySelectorAll("[data-modal]");

  if (!modals.length) return;

  const closeAllModals = () => {
    modals.forEach((modal) => modal.classList.remove("is-open"));
    document.body.classList.remove("disable-scroll");
  };

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.modalTarget;
      const targetModal = document.querySelector(`[data-modal="${targetId}"]`);
      if (targetModal) {
        targetModal.classList.add("is-open");
        document.body.classList.add("disable-scroll");
      }
    });
  });

  modals.forEach((modal) => {
    const closeBtn = modal.querySelector("[data-modal-close]");
    closeBtn?.addEventListener("click", closeAllModals);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeAllModals();
    });

    const tabBtns = modal.querySelectorAll("[data-tab-btn]");
    const tabPanels = modal.querySelectorAll("[data-tab-panel]");
    const mobileTrigger = modal.querySelector("[data-tabs-trigger]");
    const mobileCurrent = modal.querySelector("[data-tabs-current]");
    const tabsNav = modal.querySelector(".tabs__nav");

    mobileTrigger?.addEventListener("click", () => {
      mobileTrigger.classList.toggle("is-open");
      tabsNav?.classList.toggle("is-dropdown-open");
    });

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        const tabId = btn.dataset.tabBtn;

        tabBtns.forEach((b) => b.classList.remove("is-active"));
        tabPanels.forEach((p) => p.classList.remove("is-active"));

        btn.classList.add("is-active");
        modal
          .querySelector(`[data-tab-panel="${tabId}"]`)
          ?.classList.add("is-active");

        if (mobileCurrent) mobileCurrent.textContent = btn.textContent.trim();
        mobileTrigger?.classList.remove("is-open");
        tabsNav?.classList.remove("is-dropdown-open");
      });
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });
};
