console.log("hello from Node.js!");
const username = "Emmanuel";
const currentTime = new Date();
const hours = currentTime.getHours();
console.log(hours);
let greeting;
if (hours < 12) {
  greeting = "Good morning";
} else if (hours < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good evening";
}
console.log(greeting);
