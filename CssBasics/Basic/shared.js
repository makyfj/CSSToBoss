const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const closeModalButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const ctaButton = document.querySelector(".main-nav__item--cta");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

const closeModal = () => {
  if (modal) {
    modal.style.display = "none";
  }

  backdrop.style.display = "none";
};

if (closeModalButton) {
  closeModalButton.addEventListener("click", () => {
    closeModal();
  });
}

backdrop.addEventListener("click", () => {
  mobileNav.style.display = "none";
  closeModal();
});

toggleButton.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});

ctaButton.addEventListener("animationstart", function (e) {
  console.log("Animation started", e);
});

ctaButton.addEventListener("animationend", function (e) {
  console.log("Animation end", e);
});

ctaButton.addEventListener("animationiteration", function (e) {
  console.log("Animation iteration", e);
});
