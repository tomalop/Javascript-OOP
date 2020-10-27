// s03e07 - When to use inheritance

// While inheritance is a great tool to solving the problem of code reuse.
// We have to be really careful about using it, because it can make your source code complex and fragile.
// So do not use inheritance just for the sake of using it, especially in small projects.
// the KISS (Keep It Simple, Stupid) rule applies here:
// Start with Simple objects and then if you see a number of these objects share similar features, then perhaps you can
// encapsulate those features inside of a generic object and use inheritance. But remember, inheritance is not the only solution
// to enable code reuse. There is another another technique called **composition**. See the problem with inheritance(1):

// (1) Here we have this animal object with two methods: Eat() and Walk()
function Animal() {
	console.log("Animal created", this);
}

Animal.prototype.eat = function () {
	console.log("Eating...");
};
Animal.prototype.walk = function () {
	console.log("Walking...");
};

// and we have two objects, that derive from animal. Person and dog.
const person = new Animal();
const dog = new Animal();

console.log("person:", person);
console.log("dog:", dog);

// If we were to introduce a new object, called goldfish, that derives from animal, our hierarchy is broken, why?
// Because goldfish cannot walk, they can swim. This becomes hierarchy issue that we need to solve.
const goldfish = new Animal();
console.log("goldfish:", goldfish);

// The obvious, however usually wrong solution to this might be introducing more inheritance hierarchies, so that we would have
// Animal object with eat method and introduce Fish and Mammal, this might seem like a solution from the real world, but
// our code should not often reflect how we think real world works like. Imagine if we were to introduce ten different types
// of animals? The hierarchy would get more and more complex and difficult to maintain. We should avoid creating inheritance
// hierarchies, because they are very fragile. If you want to use inheritance, try to keep it to one level, do not go more
// than one level of inheritance.
// "Favor Composition over Inheritance"
// With **Composition**, instead of having complex hierarchy like this (Animal>(Mammal>person, dog),(Fish>goldfish)) we can compose
// a few objects together to create a new object. This technique gives us a great flexibility.
// Instead of using inheritance, we can define various features for our animals as **independent objects**.
// So we can have three objects, like: canWalk, canEat and canSwim. Each of these objects are plain JS objects, with certain
// properties and methods. Now if we want to have a cat object we simply compose -> canWalk, canEat. As a result, we do not have
// a complex hierarchy and we can come up with any combination.

// In JS we can **use Mixins to achieve composition**.
