// s04e09 - Method Overriding

// Task: Override move method from Shape in Circle.

class Shape {
	move() {
		console.log('move');
	}
}

class Circle extends Shape {
	// We override the method by re-implementing it in this derived class
	move() {
		console.log('circle move');
	}
}

const c = new Circle();
console.log('c :', c);
console.log('c.move :', c.move);