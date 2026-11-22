export const initOrderForm = () => {
  const form = document.querySelector("[data-order-form]");
  if (!form) return;

  const inputs = form.querySelectorAll(".form__input");
  const submitBtn = form.querySelector(".form__btn");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("is-invalid");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach((input) => {
      const value = input.value.trim();
      if (!value) {
        input.classList.add("is-invalid");
        isValid = false;
      } else if (
        input.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        input.classList.add("is-invalid");
        isValid = false;
      }
    });

    if (!isValid) return;

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Заявка отправлена!";
    submitBtn.disabled = true;
    form.reset();

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 3000);
  });
};
