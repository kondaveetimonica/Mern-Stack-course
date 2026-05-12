const parentEL = document.getElementById("parent");
//console.log(parentEL.childNodes);
//parentEL.childNodes.forEach((element) => {  console.log(element.node)});
//console.log(parentEL.children);
const convertedHTMLCollection = Array.from(parentEL.children);
convertedHTMLCollection.forEach((e) => console.log(e));
