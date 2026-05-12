let count = 0;
const counterE1 = document.getElementById("counter");
document.getElementById("btn1").addEventListener("click", function () {
  count += 10;
  counterE1.textContent = count;
});
document.getElementById("btn2").addEventListener("click", function () {
  count++;
  counterE1.textContent = count;
});
document.getElementById("btn3").addEventListener("click", function () {
  count--;
  counterE1.textContent = count;
});
document.getElementById("btn4").addEventListener("click", function () {
  count = 0;
  counterE1.textContent = count;
});
