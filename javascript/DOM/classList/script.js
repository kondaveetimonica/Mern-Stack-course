const p = document.getElementById("textElement");
//p.classList.add("highlight", "bold", "italic");
//p.classList.add("bold");
//p.classList.add("italic");

//function addclass
function addClass() {
  p.classList.add("highlight", "bold", "italic");
}
//remove class
function removeClass() {
  p.classList.remove("highlight", "bold", "italic");
}
//toggle
function toggleClass() {
  p.classList.toggle("italic");
}

//contains Class
function checkContains() {
  alert(
    p.classList.contains("highlight")
      ? "Contains highlight"
      : "Does not contain highlight"
  );
}
function replaceClass() {
  if (p.classList.contains("italic")) {
    p.classList.replace("italic", "red-text");
  } else {
    p.classList.add("red-text");
  }
}
function listItem() {
  alert("The first class is:" + p.classList.item(0));
}

//getValue
function getValue() {
  console.log(p.classList.value);
}
