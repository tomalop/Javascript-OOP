// OOP in JavaScript - s02e04 - Property Descriptors

let person = { name: "Mosh" };
console.log("person :", person);

for (const key in person) {
	console.log(key);
}
console.log(Object.keys(person));

// How come, we cannot iterate over all theese objects and methods definted in objectBase?
// In JavaScript our properties have some attributes attached to them. Sometimes these attributes
// prevent a property from being enumerated.

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
	writable: false,
	enumerable: false,
	configurable: false
});
person.name = "John";
console.log("person :", person);
console.log(Object.keys(person));

delete person.name;

console.log("person :", person);
