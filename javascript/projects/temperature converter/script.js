document.getElementById("convertButton").addEventListener("click", function () {
  const temp = parseInt(document.getElementById("temperatureInput").value);
  const conversiontype = document.getElementById("conversionType").value;
  const resultDiv = document.getElementById("result");
  if (isNaN(temp)) {
    resultDiv.innerHTML = "please enter valid number for temperature";
  }
  let contemp;
  if (conversiontype == "toCelsius") {
    contemp = (temp - 32) * (5 / 9);
    resultDiv.innerHTML = `${temp}F is equal to ${contemp.toFixed(2)}C`;
  } else if (conversiontype == "toFahrenheit") {
    contemp = temp * (9 / 5) + 32;
    resultDiv.innerHTML = `${temp}c is equal to ${contemp}F`;
  }
});
