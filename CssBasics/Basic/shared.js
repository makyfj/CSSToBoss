const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const closeModalButton = document.querySelector(".modal__action--negative");

console.dir(backdrop);

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

const closeModal = () => {
  modal.style.display = "none";
  backdrop.style.display = "none";
};

closeModalButton.addEventListener("click", () => {
  closeModal();
});

backdrop.addEventListener("click", () => {
  closeModal();
});
