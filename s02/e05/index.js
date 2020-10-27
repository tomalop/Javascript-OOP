// OOP in JavaScript - s02e05 - Constructor Properties

// Every constructor has a prototype property.
// ALso please note that __proto__ is a deprecated property.
// We can access object's prtototype by:
// A) Using `object.prototype`
// B) Using Object.getPrototypeOf(object)

function Circle(radius) {
	this.radius = radius;
}

let obj = {};
console.log("let obj = {};");
console.log("obj.__proto__ :", obj.__proto__);
console.log("Object.prototype :", Object.prototype);
console.log(
	"obj.__proto__ === Object.prototype is",
	obj.__proto__ === Object.prototype
);
console.log("");

let array = [];
console.log("let array = [];");
console.log("array.__proto__ :", array.__proto__);
console.log("Array.prototype :", Array.prototype);
console.log(
	"array.__proto__ === Array.prototype is",
	array.__proto__ === Array.prototype
);
console.log("");

const circle = new Circle(1);
console.log("const circle = new Circle(1);");
console.log(circle);
console.log("circle.__proto__ :", circle.__proto__);
console.log("Circle.prototype :", Circle.prototype);
console.log(
	"circle.__proto__ === Circle.prototype is",
	circle.__proto__ === Circle.prototype
);
