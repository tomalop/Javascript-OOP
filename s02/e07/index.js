// OOP in JavaScript - s02e07 - Iterating Instance and Prototype Members

// Sidenote: In JavaScript, we often use the word "own" instead of "instance".
// -> own property vs prototype property

function Circle(radius) {
	this.radius = radius;

	this.move = function() {
		console.log("move");
	};
}

const c1 = new Circle(1);

Circle.prototype.draw = function() {
	this.move();
	console.log("draw");
};

c1.draw();

// How to iterate over instance vs protoype properties

// Object.keys() only returns instance members
console.log("Object.keys(c1) :", Object.keys(c1));

// for-in loop returns all members (instance + prototype)
for (const key in c1) {
	console.log(
		`c1 member key(name): ${key}, type: ${typeof c1[key]}, value:${
			typeof c1[key] === "function" ? "\n" : " "
		}${c1[key]}`
	);
}
