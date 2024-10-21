let modalForm = document.getElementById("modalForm");
let modalInput = document.getElementById("submit");
const addCard = document.getElementById("add-card");
const hideForm = document.getElementById("hideForm");
const scribeTitle = document.getElementById("vibe-scribe-title");
const scribeMsg = document.getElementById("scribe-msg");
const form = document.getElementById("add-vibe-scribe");
const container = document.querySelector(".cards-container");


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
  const title = scribeTitle.value;
  const message = scribeMsg.value;

  const card = document.createElement("div");
  card.classList.add("cards-item", "card", "p-3", "m-3");
  card.style.border = "3px solid #FFF ";
  card.style.backgroundColor = "#06031B";
  card.style.color = "#FFF";

  const cardTitle = document.createElement("h5");
  cardTitle.style.textDecoration = "underline";
  cardTitle.style.fontWeight = "bolder";
  cardTitle.style.fontFamily = "Lucinda";
  cardTitle.textContent = title;
  const cardMessage = document.createElement("p");
  cardMessage.textContent = message;

  card.appendChild(cardTitle);
  card.appendChild(cardMessage);

  container.appendChild(card);

  saveCardToLocalStorage(title, message);
}

function saveCardToLocalStorage(title, message) {
  let cards = JSON.parse(localStorage.getItem("vibe-scribes")) || [];

  cards.push({ title, message });

  localStorage.setItem("vibe-scribes", JSON.stringify(cards));
}

function loadCardsFromLocalStorage() {
  let cards = JSON.parse(localStorage.getItem("vibe-scribes")) || [];

  cards.forEach((cardData) => {
    const card = document.createElement("div");
    card.classList.add("cards-item", "card", "p-3", "m-3");
    card.style.border = "3px solid #FFF";
    card.style.backgroundColor = "#06031B";
    card.style.color = "#FFF";

    const cardTitle = document.createElement("h5");
    cardTitle.style.textDecoration = "underline";
    cardTitle.style.fontWeight = "bolder";
    cardTitle.style.fontFamily = "Lucinda";
    cardTitle.textContent = cardData.title;

    const cardMessage = document.createElement("p");
    cardMessage.textContent = cardData.message;
    cardMessage.style.color = "#FFF";

    card.appendChild(cardTitle);
    card.appendChild(cardMessage);

    container.appendChild(card);
  });
}

function addNewButton() {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("cards-item", "button-flex", "m-auto");

  const newButton = document.createElement("button");
  newButton.type = "button";
  newButton.classList.add("border-white", "btn", "btn-dark");
  newButton.textContent = "ADD VIBE-SCRIBE";

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

loadCardsFromLocalStorage();
