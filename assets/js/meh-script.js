let modalForm = document.getElementById("modalForm");
let modalInput = document.getElementById("submit");
const addCard = document.getElementById("add-card");
const hideForm = document.getElementById("hideForm");

// 1. Display: none the button, 2. pop up model with date, title, thoughts 3. when submit button is clicked, store in local storage as string and 4. render title, thoughts under same flex container 5. when submit is clicked, new button is rendered in a newly created div flex-item //

function addVibeScribe() {
  document.getElementById("add-vibe-scribe").style.display = "block";
  addCard.style.display = "none";
}

addCard.addEventListener("shown.bs.modal", () => {
  hideForm.focus();
});

// The function below hides the modal form until a user clicks on it

function showForm() {
  document.getElementById("modalForm").style.display = "block";
}

// The function below hides the modal again once the user submits the modal

modalForm.addEventListener("shown.bs.modal", () => {
  modalInput.focus();
});

