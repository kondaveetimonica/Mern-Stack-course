// add event listener
document.getElementById("parentDiv").addEventListener(
  "click",
  function (event) {
    alert("div clicked!event phase" + event.eventPhase);
  },
  true
);
// addeventlistener to ul
document.getElementById("list").addEventListener(
  "click",
  function (event) {
    alert("list clicked!event phase" + event.eventPhase);
  },
  true
);
document.getElementById("item1").addEventListener(
  "click",
  function (event) {
    alert("item1 clicked!event phase" + event.eventPhase);
  },
  false
);
document.getElementById("item2").addEventListener(
  "click",
  function (event) {
    alert("item2 clicked!event phase" + event.eventPhase);
  },
  false
);
