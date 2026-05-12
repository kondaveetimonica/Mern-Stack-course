//get all images
const imagesEl = document
  .getElementById("imageGallery")
  .querySelectorAll("img");

let imagesByAlice = [];

// use get attribute to filter images of alice
imagesEl.forEach((img) => {
  //console.log(img);

  const author = img.getAttribute("data-author");
  //console.log(author);
  if (author === "Alice") {
    imagesByAlice.push(img);
    // console.log(imagesByAlice);
  }
});
imagesByAlice.forEach((img) => console.log(img));
imagesByAlice.forEach((img) => {
  if (!imagesByAlice.includes(img)) {
    img.style.display = "none";
  }
});
