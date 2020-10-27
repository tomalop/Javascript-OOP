// s04e04 - The This Keyword

// In JS we have this mode called `strict`. When it is enabled, JS engine will be more "sensitive", so it will do more error
// checking if there are errors that silently fail, it is going tot turn them into exceptions and also it will change the
// behavior of the `this` keyword in functions.
// to enable it use this:
// 'use strict';

// `this` will then no longer by default point to the global object, it will be set to undefined, to prevent us from accidentally
// modifying the global object, because it is a bad practice in general.

// By default, classes (objects declared with Class) run in strict mode.

// Closer look on the `this` keyword.
const Circle = function() {
	this.draw = function() {
		console.log('this :', this);
	};
};

const c = new Circle();
// Method call
// Because we are calling a method on a object, `this` references to the object we are calling it from.
c.draw();

// Now instead of calling the `c.draw();` like this, we are going to get the reference to this method (without the `()`) and
// store it in the constant called draw.
const draw = c.draw;
console.log('draw :', draw);

// as you can see, instead of Circle object, the `draw();` returned the Window object.
// Function Call
// Because we are calling this like a standalone function that is not part of an object,
// when we call this method as a function, by default `this` will point to the global object which is the `window` in the browser
// and `global` in Node.
draw();
