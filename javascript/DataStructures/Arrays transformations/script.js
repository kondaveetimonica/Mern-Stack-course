//ForEach()
//let numbers = [1, 2, 3];

//numbers.forEach(function (num) {
//const doubled = num * 2;
//console.log(doubled);
//});

//products.forEach((individualProduct) => {
//console.log(
//  `product:${individualProduct.name},stock:${individualProduct.stock}`
//);
//});

//!map()
//it returns an newarray
let numbers = [1, 2, 3, 4];
const doubledArray = numbers.map(function (num) {
  return num * 2;
});
console.log(doubledArray);
const products = [
  { name: "laptop", stock: 5, price: 1000 },
  { name: "phone", stock: 10, price: 500 },
  { name: "watch", stock: 3, price: 300 },
];
const newproducts = products.map(function (product) {
  return {
    name: product.name,
    stock: product.stock,
    price: product.price - product.price * 0.1,
  };
});
console.log(newproducts);

//reduce()
//it returns a single value
const numbers2 = [1, 2, 3, 4, 5, 6, 7];
const totalSum = numbers2.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 10);
console.log(totalSum);
const products2 = [
  { name: "laptop", stock: 5, price: 1000 },
  { name: "phone", stock: 10, price: 500 },
  { name: "watch", stock: 3, price: 300 },
];
const totalvalue = products2.reduce(function (acc, product) {
  return acc + product.stock * product.price;
}, 0);
console.log(totalvalue);
//find()
const numbers3 = [1, 2, 3, 4, 5, 6];
const foundnumbers = numbers3.filter(function (num) {
  return num > 3;
});
console.log(foundnumbers);
