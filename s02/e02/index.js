// OOP in JavaScript - s02e02 - Prototypes and Prototypical Inheritance

const varToString = varObj => Object.keys(varObj)[0];

let x = {};
let nejm = "haf";
console.log("x is", x);
let y = {};
console.log("y is", y);
console.log("x.toString() is", x.toString());
console.log(
	"Object.getPrototypeOf(x) === Object.getPrototypeOf(y) is",
	Object.getPrototypeOf(x) === Object.getPrototypeOf(y)
);
console.log("x.__proto__ === y.__proto__ is", x.__proto__ === y.__proto__);
