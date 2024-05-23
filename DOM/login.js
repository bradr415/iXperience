const loginFrom = document.getElementById("loginFrom");
if (loginFrom.checkValidity()) {
  // Only if the form is valid to we do stuff
  // Do stuff - e.g. create the user in the backend
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
} else {
  console.log("Form not valid!");
}
loginFrom.classList.add("was-validated");