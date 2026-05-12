//func to add new fruit
function addFruit(name) {
  const ulEL = document.getElementById("fruitList");
  //create li element
  const Li = document.createElement("li");
  Li.className = "fruit";
  Li.textContent = name;
  ulEL.appendChild(Li);
  console.log(ulEL);
}
addFruit("apple");
addFruit("banana");
addFruit("Cherry");

//remove fruit function
function removeFruit(name) {
  // first : select the parent
  const ulEL = document.getElementById("fruitList");
  let fruitFound = false;
  for (const li of ulEL.children) {
    if (name === li.textContent) {
      fruitFound = true;
      //remove
      ulEL.removeChild(li);
      break;
    }
  }
  document.getElementById("message").textContent = fruitFound
    ? `${name} was removed from the list`
    : `${name} was not found`;
}
removeFruit("kiwi");
