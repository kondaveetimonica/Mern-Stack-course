const persons = {
  Name: "Alice",
  Age: 25,
  occupation: "Engineer",
};
persons.isMarried = false;

//console.log(persons);

persons.country = "usa";
persons["hobby"] = "coding";
persons["courses"] = ["javaScript", "Nodejs", "HTML"];
//dot notation
const personName = persons.name;
const personAge = persons.age;
const personCourses = persons.courses;
//console.log(personCourses);
//bracket notation
const personHobby = persons["hobby"];
//console.log(personHobby);
//Object.keys
const keys = Object.keys(persons);
//console.log(keys.length);
//object.values
const car = {
  brand: "Honda",
  model: "accord",
  year: "2025",
};
const values = Object.values(car);
//console.log(values);

//object has own property
const hasProperty = car.hasOwnProperty("make");
//console.log(hasProperty);
//object.assign
const targetobj = { name: "thomas" };
const sourceobj = { age: 30, country: "USA" };
const result = Object.assign(targetobj, sourceobj);
//console.log(result);
//delete operator
delete car.brand;
//console.log(car);
//object.freeze make object immutable
//Object.freeze(car);

car.make = "Nissa";
//console.log(car);

//Nesting Objects
const user = {
  name: "prince",
  age: 30,
  address: {
    street: "123 main st",
    city: "newyork",
    country: {
      name: "usa",
      code: "Us",
    },
  },
};
//console.log(user);

//Accesss nested object properties
const userName = user.name;
const userAddress = user.address;
const userStreet = user.address.street;
//console.log(userName);
//console.log(userAddress);
//console.log(userStreet);
const coutryName = user["address"]["country"]["name"];

//objects in an array
const usersObject = [
  { name: "alice", age: 30, city: "new york" },
  { name: "bob", age: 25, city: "chicago" },
  { name: "charlie", age: 26, city: "sans" },
];
console.log(usersObject);
//Accesing properties
const firstUser = usersObject[0];
console.log(firstUser);

//Add new user to userobject
usersObject.unshift({ name: "david", age: 28, city: "Accra" });
//modify arrays of objects
usersObject[0].name = "cici";
console.log(usersObject);
