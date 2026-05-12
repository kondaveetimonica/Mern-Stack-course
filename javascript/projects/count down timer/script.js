const startCountDown = () => {
  const timeInput = document.getElementById("time").value;
  const res = document.getElementById("timer");
  const timeremaining = parseInt(timeInput);
  if (isNaN(timeremaining) || timeremaining <= 0) {
    res.textContent = "Please enter a valid number";
    return;
  }
  res.textContent = `Time left ${timeremaining} seconds`;
  for (let i = timeremaining; i >= 0; i--) {
    (function (count) {
      setTimeout(function () {}, (timeremaining - count) * 1000);
      if (count > 0) {
        res.textContent = `Time left :${count} seconds`;
      } else {
        res.textContent = "Time's Up!";
      }
    })(i);
  }
};

document.getElementById("startbtn").addEventListener("click", startCountDown);
