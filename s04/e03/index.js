// s04e03 - Static Methods

// In classical OOP we have two types of methods - Instance methods (1) and Static methods (2).
// Instance methods are available on the instance of an object. Whereas Static methods are avaliable on the class itself.
// We often use static methods to create utility functions that are not specific to a given object.
// Static is declared with `static` keyword on the front.

class Circle {
	constructor(radius) {
		this.radius = radius;
	}
	// Instance method - draw is specific to a circle object,
	draw() {}

	// Static method
	static parse(str) {
		const radius = JSON.parse(str).radius;
		return new Circle(radius);
	}
}

const circle = Circle.parse('{"radius": 1}');
console.log('circle :', circle);

class Math2 {
	static abs(value) {
		// ...
	}
}
// as you can see, we are not working with a particular object but with the class itself.
Math2.abs();
