const randomnumber = Math.floor(Math.random() * 10 + 1);
console.log(randomnumber);
const feedBack = document.getElementById("feedback");
let UserGuess;
document.getElementById("guessBtn").addEventListener("click", function () {
  UserGuess = parseInt(document.getElementById("guessInput").value);
  guessCheck();
});
function guessCheck() {
  if (UserGuess == randomnumber) {
    feedBack.textContent = "whoah! you guessed it";
  } else if (UserGuess < randomnumber) {
    feedBack.textContent = "too low! try again";
  } else {
    feedBack.textContent = "too high! try again";
  }
}
