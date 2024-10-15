let modalForm = document.getElementById("modalForm");
let modalInput = document.getElementById("submit");
const addCard = document.getElementById("add-card");
const hideForm = document.getElementById("hideForm");
const scribeTitle = document.getElementById("vibe-scribe-title");
const scribeMsg = document.getElementById("scribe-msg");
const form = document.getElementById("add-vibe-scribe");
const container = document.querySelector(".cards-flex-container");

// When submit button is clicked, store in local storage as string and 4. render title, thoughts under same flex container 5. when submit is clicked, new button is rendered in a newly created div flex-item //

function addVibeScribe() {
  document.getElementById("add-vibe-scribe").style.display = "block";
  addCard.style.display = "none";
}

hideForm.addEventListener("click", function (event) {
  event.preventDefault();
  renderCard(); // Call the function to render card
  form.reset(); // Clear the form inputs
  form.style.display = "none"; // Hide the form again
  addNewButton(); // Add the button in a new flex-item
});

function renderCard() {
  // Create a new card element
  const card = document.createElement("div");
  card.classList.add("cards-flex-item", "card", "p-3", "m-3");
  card.style.border = "3px solid #FFF "; // Optional style for better visual
  card.style.backgroundColor = "#06031B";
  card.style.color = "#FFF";

  // Add title and message to the card
  const cardTitle = document.createElement("h5");
  cardTitle.style.textDecoration = "underline";
  cardTitle.style.fontWeight = "bolder";
  cardTitle.style.fontFamily = "Lucinda";
  cardTitle.textContent = scribeTitle.value;
  const cardMessage = document.createElement("p");
  cardMessage.textContent = scribeMsg.value;

  card.appendChild(cardTitle);
  card.appendChild(cardMessage);

  // Append the card to the flex container
  container.appendChild(card);
}

function addNewButton() {
  // Create a new flex item for the button
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("cards-flex-item", "button-flex", "m-auto");

  // Create the new button
  const newButton = document.createElement("button");
  newButton.type = "button";
  newButton.classList.add("border-white", "btn", "btn-dark");
  newButton.textContent = "ADD VIBE-SCRIBE";

  // Add an event listener to show the form again when clicked
  newButton.addEventListener("click", () => {
    form.style.display = "block";
    newButton.style.display = "none";
  });

  buttonContainer.appendChild(newButton);
  container.appendChild(buttonContainer);
}

// The function below hides the modal form until a user clicks on it

function showForm() {
  document.getElementById("modalForm").style.display = "block";
}

// The function below hides the modal again once the user submits the modal

modalForm.addEventListener("shown.bs.modal", () => {
  modalInput.focus();
});
