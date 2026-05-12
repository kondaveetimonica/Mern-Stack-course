function addStudent(name, grade) {
  const studentEl = document.createElement("div");
  //add css to it
  studentEl.className = "student";
  //create textnode
  const studentTextnode = document.createTextNode(`${name}:${grade}`);
  studentEl.appendChild(studentTextnode);
  //select container
  const containerEl = document.getElementById("studentList");
  let beforeNode = null;
  for (const child of containerEl.children) {
    const childGrade = parseInt(child.textContent.split(":")[1]);
    if (grade < childGrade) {
      beforeNode = child;
      break;
    }
  }
  //insert new student
  containerEl.insertBefore(studentEl, beforeNode);
  console.log(containerEl.children);
}
addStudent("monica", 100);
addStudent("monica", 90);
addStudent("niha", 99);
