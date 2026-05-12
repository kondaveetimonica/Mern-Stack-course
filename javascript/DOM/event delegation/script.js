document.getElementById("itemList").addEventListener("click", function (event) {
  console.log(event);
  const clickedEl = event.target;
  // check if clicked el is list item
  if (clickedEl.tagName == "LI") {
    const itemNumber = clickedEl.getAttribute("data-item");
    console.log(`you clicked item ${itemNumber}`);
  }
});
