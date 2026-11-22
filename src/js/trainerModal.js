import { trainersData } from "./data/trainersData";

const SOCIAL_ICONS = {
  facebook: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>`,
  instagram: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>`,
};

export const initTrainerModal = () => {
  const modal = document.querySelector("[data-trainer-modal]");
  const openBtns = document.querySelectorAll("[data-trainer-id]");

  if (!modal || !openBtns.length) return;

  const closeBtn = modal.querySelector("[data-modal-close]");
  const imgEl = modal.querySelector("[data-modal-img]");
  const nameEl = modal.querySelector("[data-modal-name]");
  const postEl = modal.querySelector("[data-modal-post]");
  const socialsEl = modal.querySelector("[data-modal-socials]");
  const contentEl = modal.querySelector("[data-modal-content]");
  const tabBtns = modal.querySelectorAll("[data-tab-btn]");
  const mobileTrigger = modal.querySelector("[data-tabs-trigger]");
  const mobileCurrent = modal.querySelector("[data-tabs-current]");
  const tabsNav = modal.querySelector(".tabs__nav");

  let currentTrainer = null;

  const renderTab = (tabKey) => {
    if (!currentTrainer) return;

    tabBtns.forEach((btn) => {
      const isTarget = btn.dataset.tabBtn === tabKey;
      btn.classList.toggle("is-active", isTarget);
      if (isTarget && mobileCurrent) {
        mobileCurrent.textContent = btn.textContent.trim();
      }
    });

    contentEl.innerHTML = currentTrainer.tabs[tabKey] || "";
    contentEl.scrollTop = 0; // Сбрасываем прокрутку наверх при смене вкладки
  };

  const openModal = (trainerId) => {
    const data = trainersData[trainerId];
    if (!data) return;

    currentTrainer = data;

    imgEl.src = data.img;
    imgEl.alt = data.name;
    nameEl.textContent = data.name;
    postEl.textContent = data.post;

    socialsEl.innerHTML = Object.entries(data.socials || {})
      .map(
        ([network, url]) => `
        <li>
          <a href="${url}" class="modal__social-link" aria-label="${network}" target="_blank" rel="noopener">
            ${SOCIAL_ICONS[network] || ""}
          </a>
        </li>
      `,
      )
      .join("");

    tabBtns.forEach((btn) => {
      const key = btn.dataset.tabBtn;
      btn.disabled = !data.tabs[key];
    });

    renderTab("education");
    mobileTrigger?.classList.remove("is-open");
    tabsNav?.classList.remove("is-dropdown-open");

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("disable-scroll");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("disable-scroll");
  };

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.trainerId));
  });

  // Клики по вкладкам
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      renderTab(btn.dataset.tabBtn);
      mobileTrigger?.classList.remove("is-open");
      tabsNav?.classList.remove("is-dropdown-open");
    });
  });

  mobileTrigger?.addEventListener("click", () => {
    mobileTrigger.classList.toggle("is-open");
    tabsNav?.classList.toggle("is-dropdown-open");
  });

  // Закрытие окна
  closeBtn?.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
};
