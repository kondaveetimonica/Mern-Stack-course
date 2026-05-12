const calculateBtn = document.getElementById("calculateBtn");
const numberInput = document.getElementById("number");
const percentInput = document.getElementById("percent");
const percentageResult = document.getElementById("percentageResult");
const finalResult = document.getElementById("finalResult");
function calculate() {
  const numValue = parseFloat(numberInput.value);
  const percentValue = parseFloat(percentInput.value);
  if (isNaN(numValue) || isNaN(percentValue)) {
    alert("please enter valid numbers");
  }
  const result = (numValue * percentValue) / 100;
  const final = result + numValue;
  percentageResult.textContent = formatNumber(result);
  finalResult.textContent = formatNumber(final);
}
function formatNumber(amount) {
  return (
    "$" +
    amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}
calculateBtn.addEventListener("click", calculate);
