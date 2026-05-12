document.getElementById("soundButton").addEventListener("click", function () {
  const animal = document.getElementById("animalInput").value.toLowerCase();
  const output = document.getElementById("soundOutput");
  switch (animal) {
    case "dog":
      output.textContent = "woof! woof!";
      break;
    case "cat":
      output.innerHTML = "Meow! meow!";
      break;
    default:
      output.textContent = "Sorry, I don't know that animal.";
  }
});
