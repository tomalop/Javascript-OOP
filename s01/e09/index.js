// Enumerating Properties (and functions)

function Circle(radius) {
	// console.log("this", this);
	this.radius = radius;
	this.draw = () => {
		console.log("draw");
	};
}

const circle = new Circle(10);
for (const key in circle) {
	if (typeof circle[key] !== "function") {
		console.log(`key: ${key}\nvalue: ${circle[key]}`);
	}
}

console.log("circle keys:", Object.keys(circle));

// Check if object has given property
if ("radius" in circle) {
	console.log("Circle has a radius");
}
