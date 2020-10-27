// s04e01 - ES6 Classes

// In ES6 (ECMAScript 2015) there is a new way how to add objects and implement inheritance and that is using Classes.
// However, these classes are not like the classes we have in Java, C#, etc. They are essentialy a syntactic sugar over
// prototypical inheritance, which we need to understand first.

// oldschool constructor function, which we are going to overwrite with ES6.
// function Circle(radius) {
// 	this.radius = radius;
// 	this.draw = function () {
// 		console.log("draw");
// 	};
// }

class Circle {
	constructor(radius) {
		this.radius = radius; // Primitive (value) property declaration
		this.move = function() {}; // (1) method declaration on constructor (each object will contain a copy of it).
	}
	// Method declaration on prototype
	// All methods we define here, will end up on the prototype of the Circle object.
	// If you do not want a method on the prototype, then you need to define it ihe constructor (1).
	draw() {
		console.log('draw');
	}
}

const c = new Circle(1);
