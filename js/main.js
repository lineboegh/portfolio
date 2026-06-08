const form = document.querySelector("#webform");

const outputName = document.querySelector("#outputName");
const outputEmail = document.querySelector("#outputEmail");
const outputBesked = document.querySelector("#outputBesked");

// PREVENT POP UP
form.addEventListener("invalid", cancelPopup, true);
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

// HANDLE SUBMIT
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // 1
  event.preventDefault();

  // 2
  const formData = new FormData(form);

  outputName.textContent = "Navn: " + formData.get("name");
  outputEmail.textContent = "Email: " + formData.get("email");
  outputBesked.textContent = "Du har skrevet beskeden: " + formData.get("besked");

  // 3
  form.reset();
}
