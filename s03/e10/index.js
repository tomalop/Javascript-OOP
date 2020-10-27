// s03e10 - Exercise - Prototypical Inheritance

function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function HtmlElement() {
	this.click = function () {
		console.log("clicked");
	};
}
HtmlElement.prototype.focus = function () {
	console.log("focusing");
};
// ! CodeWithMosh is wrong here, suggested `items = []` in argument declaration means that if `items` is empty, it sets to empty array as default value.
// * The correct solution is to use `...args` since it always passes arguments as array.
function HtmlSelectElement(...items) {
	HtmlElement.call(this); // constructor chaining, which enables access to inherited members.
	console.log("args :", items);
	console.log("typeof items :", typeof items);
	this.items = items;

	this.addItem = function (item) {
		this.items.push(item);
	};
	this.removeItem = function (item) {
		this.items.splice(this.items.indexOf(item), 1);
	};
}
// this can also be solved by using `HtmlSelectElement.prototype = new HtmlElement();`
extend(HtmlSelectElement, HtmlElement); // extension of a prototype by parent's prototype with `this` reset.

const e = new HtmlElement();
console.log("e :", e);
const s = new HtmlSelectElement(1);
s.addItem(2);
s.addItem(3);
s.removeItem(2);
console.log("s :", s);
