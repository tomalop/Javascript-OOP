// s03e08 - Mixins

// (3) Mixin
// Since we do not know how many agruments we are going to pass in, we use the ES6 rest operator `...` to collect all the
// arguments and turn them into array.
function mixin(target, ...sources) {
	// here we then use spread operator `...` (same syntax as before) to spread an array into multiple arguments.
	Object.assign(target, ...sources);
}

// Feature as an object
const canEat = {
	eat: function () {
		this.hunger--;
		console.log("eating");
	},
};
// another features
const canWalk = {
	walk: function () {
		console.log("walking");
	},
};
const canSwim = {
	swim: function () {
		console.log("swim");
	},
};

// We now compose these features together, to compose a person, that can eat and walk.

// We use E6 method `Object.assign()`, we can use this to copy properties and methods of one object to another
// Syntax: 1st argument is target, 2nd is object from which to copy properties (can be more than one).
// We use blank object `{}` as a target, since we are assigning this during the object inicialization.
const person1 = Object.assign({}, canEat, canWalk);
console.log("person1:", person1);

// We can also use this with constructor function:
function Person() {}
// Which modifies the prototype function and adds the capabilities/features (copied properties).
Object.assign(Person.prototype, canEat, canWalk);
const person2 = new Person();
console.log("person2:", person2);

// try with another
function Goldfish() {}
// to make this code more readable, we can extract this logic (this line) into mixin function(3).
// Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log("goldfish:", goldfish);
