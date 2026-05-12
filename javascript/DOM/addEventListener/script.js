//document.getElementById("clickButton").onclick = function clickHandler() {
//console.log("Click event is called");
//};
document.getElementById("clickButton").addEventListener("click", function () {
  console.log("Click event is called");
});
document
  .getElementById("doubleClickButton")
  .addEventListener("dblclick", function () {
    console.log("Click event is called");
  });
document.getElementById("hoverDiv").addEventListener("mouseenter", function () {
  console.log("onMouseOverHandler event is called");
});
document.getElementById("hoverDiv").addEventListener("mouseout", function () {
  console.log("onMouseOutHandler event is called");
});
document.getElementById("keyInput").addEventListener("keydown", function () {
  console.log("onkeydownHandler event is called");
});
document.getElementById("keyInput").addEventListener("keyup", function () {
  console.log("onkeyupHandler event is called");
});
document.getElementById("keyInput").addEventListener("keypress", function () {
  console.log("onkeypressHandler event is called");
});
document.getElementById("myForm").addEventListener("submit", function () {
  console.log("onSubmitHandler event is called");
});
document.getElementById("myForm").addEventListener("focusin", function () {
  console.log("onfocusHandler event is called");
});
document.getElementById("myForm").addEventListener("blur", function () {
  console.log("onblurHandler event is called");
});
