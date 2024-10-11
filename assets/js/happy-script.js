let modalForm = document.getElementById("modalForm");
let modalInput = document.getElementById("submit")

// The function below hides the modal form until a user clicks on it

function showForm() {
    document.getElementById("modalForm").style.display = 'block';
}

// The function below hides the modal again once the user submits the modal

modalForm.addEventListener('shown.bs.modal', () => {
    modalInput.focus()
  })