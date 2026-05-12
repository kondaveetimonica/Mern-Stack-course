const btne1 = document.querySelector(".btn1");
const btne2 = document.querySelector(".btn2");
const btne3 = document.querySelector(".btn3");
const title1 = document.querySelector(".title");
const bodyel = document.querySelector("body");

btne1.addEventListener("click", () => {
  bodyel.style.backgroundColor = "yellow";
});

btne2.addEventListener("click", () => {
  title1.style.fontSize = "90px";
});
btne3.addEventListener("click", () => {
  title1.style.fontSize = "";
  bodyel.style.backgroundColor = "";
});
