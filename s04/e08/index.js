// s04e08 - Inheritance

// Task: Make Circle inherit from shape, add constructor chaining to pass arguments.

class Shape {
	constructor(color) {
		this.color = color;
	}
	move() {
		console.log('move');
	}
}
// to have the circle inherit from the shape class, we use `extends` and that's it.
class Circle extends Shape {
	// here we need to call the "lower" constructor by using `Super()` to intialize base object (in this case the Shape 
	// object) and pass it the arguments the super constructor needs, we do this from our constructor.
	constructor(color, radius) {
		super(color);
		this.radius = radius;
	}
	draw() {
		console.log('draw');
	}
}

const c = new Circle("red", 1);
console.log('c :', c);