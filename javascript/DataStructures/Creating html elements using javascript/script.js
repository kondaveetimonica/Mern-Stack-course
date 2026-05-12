//1.select the target element
const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generatebtn");
//2. new html elements(document.createElement)
function createProfileCard() {
  //create profile card container
  const profileCard = document.createElement("div");
  //add class
  profileCard.className = "profile-card";
  //create an image element for the profile card
  const profileImage = document.createElement("img");
  //add image to img element
  profileImage.src =
    "https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg";
  //create the heading element
  const profileName = document.createElement("h3");
  profileName.textContent = "John Doe";
  //create paragrph for the description
  const profileDescription = document.createElement("p");
  profileDescription.textContent =
    "A passionate web developer with experience in JavaScript and React.";
  //3.add content to the element created (innerHtml)
  //4.add classes or ids if needed //add any attribute
  //5.append the elements to build the structure
  profileCard.appendChild(profileImage);
  profileCard.appendChild(profileName);
  profileCard.appendChild(profileDescription);
  //append the profile card to app container
  appContainer.appendChild(profileCard);
  //append to the Dom
}
//add envent listener
generateBtn.addEventListener("click", createProfileCard);

createProfileCard();
