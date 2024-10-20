const pages = [
    'happy-index.html',
    'inlove-index.html',
    'meh-index.html',
    'sad-index.html'
];

console.log(pages)

document.getElementById('randomButton').addEventListener('click', function() {
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage; // Navigate to the random page
});

// The function below hides the modal form until a user clicks on it

function showForm() {
    document.getElementById("modalForm").style.display = "block";
  }
  
  // The function below hides the modal again once the user submits the modal
  
  modalForm.addEventListener("shown.bs.modal", () => {
    modalInput.focus();
  });