const buttonEl = document.getElementById("actionButton");
buttonEl.addEventListener("click", function () {
  console.log("btn is clicked");
});
buttonEl.addEventListener("dblclick", function () {
  console.log("btn is double clicked");
});
//mouse enter
buttonEl.addEventListener("mouseenter", function () {
  console.log("mouse entered");
});
buttonEl.addEventListener("mouseleave", function () {
  console.log("mouse left");
});
