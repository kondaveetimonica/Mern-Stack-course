document.getElementById("outerDiv").addEventListener(
  "click",
  function (event) {
    alert("outer div clicked! event phase " + event.eventPhase);
  },
  false
);
document.getElementById("middleDiv").addEventListener(
  "click",
  function (event) {
    alert("Middle div clicked! event phase " + event.eventPhase);
    event.stopPropagation();
  },
  false
);
document.getElementById("innerDiv").addEventListener(
  "click",
  function (event) {
    alert("Inner div clicked! event phase " + event.eventPhase);
    event.stopPropagation();
  },
  false
);
