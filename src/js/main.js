import "../styles/main.scss";

import { initBurger } from "./burger";
import { initTrainersSlider } from "./trainersSlider";
import { initModals } from "./modals";
import { initTrainerModal } from "./trainerModal";
import { initOrderForm } from "./orderForm";

document.addEventListener("DOMContentLoaded", () => {
  initBurger();
  initTrainersSlider();
  initModals();
  initTrainerModal();
  initOrderForm();
});
