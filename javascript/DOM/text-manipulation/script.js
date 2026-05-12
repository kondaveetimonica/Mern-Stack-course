//textContent
const blogTitleEL = document.getElementById("title");
blogTitleEL.textContent = "New BlogTitle";
blogTitleEL.style.background = "red";
blogTitleEL.style.color = "white";

//blogTitleEL.innerHTML = "New BlogTitle";
//blogTitleEL.style.background = "red";
//blogTitleEL.style.color = "white";
const paragraphEL = document.getElementById("paragraph");
//paragraphEL.innerHTML = "<h1>I have changed the pragraph to h1</h1>";
paragraphEL.innerHTML +=
  "<br> <strong> this is a new paragraph text with strong</strong>";

//inner text
const firstCommentEl = document
  .getElementById("comment1")
  .querySelector(".commentText");
console.log(firstCommentEl);
firstCommentEl.innerText = "updated first comment";
