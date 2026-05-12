function calculateTip() {
  const billAmount = parseFloat(document.getElementById("bill").value);
  const serviceQuality = parseFloat(document.getElementById("service").value);
  const nofPeople = parseInt(document.getElementById("people").value);
  //validations
  if (isNaN(billAmount)) {
    alert("please enter a valid bill amount");
    return;
  }
  const tipAmount = billAmount * serviceQuality;
  const totalAmount = tipAmount + billAmount;
  const perPerson = totalAmount / nofPeople;
  const tipperPerson = tipAmount / nofPeople;
  //display results
  document.getElementById("tipAmount").textContent = `$${tipAmount.toFixed(2)}`;
  document.getElementById("totalAmount").textContent = `$${totalAmount.toFixed(
    2
  )}`;
  document.getElementById("perPerson").textContent = `$${perPerson.toFixed(2)}`;
  document.getElementById(
    "tipPerPerson"
  ).textContent = `$${tipperPerson.toFixed(2)}`;
}
document.getElementById("calculateBtn").addEventListener("click", calculateTip);

//calculate based on input change
document.querySelectorAll("input,select").forEach((element) => {
  element.addEventListener("input", calculateTip);
});
