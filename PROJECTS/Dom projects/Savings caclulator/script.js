// Initialize Feather icons
feather.replace();
// Roadmap Step 1: Select DOM elements
const goalAmountInput = document.getElementById("goal-amount");
const currentSavingsInput = document.getElementById("current-savings");
const monthlyContributionInput = document.getElementById(
  "monthly-contribution"
);
const calculateBtn = document.getElementById("calculate-btn");
const progressBar = document.getElementById("progress-bar");
const result = document.getElementById("result");

// Roadmap Step 2: Add event listener for calculate button
calculateBtn.addEventListener("click", () => {
  const goalAmount = parseFloat(goalAmountInput.value);
  const currentSavings = parseFloat(currentSavingsInput.value);
  const monthlyContribution = parseFloat(monthlyContributionInput.value);
  // Roadmap Step 3: Validate user input
  if (
    isNaN(goalAmount) ||
    isNaN(currentSavings) ||
    isNaN(monthlyContribution)
  ) {
    result.textContent = "Please enter valid numbers";
    result.classList.add("show");
  }
  // Roadmap Step 4: Calculate remaining amount and months to reach goal
  const remainingAmount = goalAmount - currentSavings;
  const monthsToReachGoal = Math.ceil(remainingAmount / monthlyContribution);
  const progressPercent = (currentSavings / goalAmount) * 100;
  // Roadmap Step 5: Update progress bar based on current savings
  progressBar.style.width = `${progressPercent}%`;
  result.classList.remove("show");
  setTimeout(() => {
    // Roadmap Step 7: Handle UI updates and transitions for result display
    if (currentSavings >= goalAmount) {
      result.innerHTML = `
      "🎉Congratulations! Your savings have bloomed to reach your goal!";
      `;
    } else {
      result.innerHTML = `🌿 Keep nurturing your savings! You'll reach your goal in ${monthsToReachGoal} months.`;
    }
    result.classList.add("show");
  }, 100);
});

// Roadmap Step 6: Display result based on the savings progress

// Roadmap Step 7: Handle UI updates and transitions for result display
