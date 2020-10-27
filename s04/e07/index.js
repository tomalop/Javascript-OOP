// s04e07 - Getters and setters

// Task: make radius a property with private set and public read (1)

console.log('Hello');

// here in this example we still use the WeakMap from previous lecture.
const _radius = new WeakMap();

class Circle {
	constructor(radius) {
		_radius.set(this, radius);
	}
	// (1) we create something like a method, with the name of the public property and in front we put either get or set.
	// The result looks like a method, but we can access it as a property.
	get radius() {
		return _radius.get(this);
	}
	set radius(value) {
		// here we can perform the usual validation
		if (value <= 0) throw new Error("Invalid radius");
		// and now we set the value, same way like in the constructor
		_radius.set(this, value);
	}
}

const c = new Circle(1);
console.log('c :', c);
console.log('c.radius :', c.radius);
c.radius = 10;
console.log('c.radius :', c.radius);
try {
	c.radius = -1;
}
catch (error) {
	console.error(error);
}
console.log('c.radius :', c.radius);