//Named function
function showAlert() {
  console.log("Hello");
}
const alertButtonEL = document.getElementById("alertButton");
alertButtonEL.addEventListener("click", showAlert);

//function fot remove alert
function removeAlert() {
  alertButtonEL.removeEventListener("click", showAlert);
}
const removeButtonEL = document.getElementById("removeButton");
removeButtonEL.addEventListener("click", removeAlert);
