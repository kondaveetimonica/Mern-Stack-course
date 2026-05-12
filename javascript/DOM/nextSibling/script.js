const containerEl = document.getElementById("container");

const buttonsE1 = document.querySelectorAll("button");
//onsole.log(buttonsE1);
buttonsE1.forEach((button) => {
  const nextElement = button.nextSibling;
  console.log(nextElement);
  if (nextElement && nextElement.nodeType === 3) {
    nextElement.textContent = "Changed Text";
  }
});
