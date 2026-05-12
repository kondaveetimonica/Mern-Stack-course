const productEl = document.getElementById("product1").querySelector("img");
//console.log(productEl);
productEl.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg"
);
productEl.setAttribute("alt", "my new product");
const productLinkEl = document.getElementById("product1").querySelector("a");
//console.log(productLinkEl);
productLinkEl.setAttribute("href", "new.html");
