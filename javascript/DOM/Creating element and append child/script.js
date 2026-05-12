function createTask(newTask) {
  const taskEl = document.createElement("div");
  //add new css to created element
  taskEl.setAttribute("class", "task");
  const taskNode = document.createTextNode(newTask);

  taskEl.appendChild(taskNode);
  document.getElementById("container").appendChild(taskEl);
  console.log(taskEl);
}
createTask("programming");
createTask("monica");
