function Circle(radius) {
	console.log("this", this);
	this.radius = radius;
	this.draw = () => {
		console.log("draw");
	};
}

const circle = new Circle(10);

// Add properties when we need them, not Ahead of (compilation) Time
circle.location = { x: 1 };
// Another notation to access a property - Bracket Notation
circle["location"] = { x: 1 };

const propertyName = "location";
circle[propertyName] = { x: 1 }; // Good e.g. when you want to dynamically access a property name

console.log("circle (added param location):", circle);
// Antoher usecase for bracket notation is when you are using the property names that are not
// valid identifiers (like with dash in name)

// We can also (dynamically) delete a property from an existing object.
// Real world use case for this is when you get a user object form a database and you want to return it
// to a client, but that user object has certain properties, you don't want to send to a client (password, credit card)

delete circle.location; // also possible with brackets: delete ciricle['location'];
console.log("circle (removed param location):", circle);
