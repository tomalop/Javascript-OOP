// s03e10 - Exercise - Polymorphism

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

function HtmlSelectElement(...items) {
	console.log("items :", items);
	HtmlElement.call(this);
	this.items = items;

	this.addItem = function (item) {
		this.items.push(item);
	};
	this.removeItem = function (item) {
		this.items.splice(this.items.indexOf(item), 1);
	};
}
extend(HtmlSelectElement, HtmlElement);
const canRender = {
	render: function () {
		let result = "<select>\n";
		this.items.forEach((item) => {
			result += `<option>${item}</option>\n`;
		});
		result += "</select>";
		return result;
		// One line solution using Array.map();
		// return `<select>${this.items
		// 	.map((item) => `<option>${item}</option>`)
		// 	.join("")}</select>`;
	},
};
Object.assign(HtmlSelectElement.prototype, canRender);

function HtmlImageElement(src) {
	this.src = src;
}
extend(HtmlImageElement, HtmlElement);
Object.assign(HtmlImageElement.prototype, canRender);
HtmlImageElement.prototype.render = function () {
	let result = `<img src="${this.src}" />`;
	return result;
};

const s = new HtmlSelectElement(1);
s.addItem(4);
s.addItem(2);
s.addItem(3);
s.removeItem(4);
console.log("s :", s);
console.log("s.render() :\n", s.render());

const elements = [
	new HtmlSelectElement(1, 2, 3),
	new HtmlImageElement("http://example.com"),
];
// what is the difference between for-of and for-in?
// for-in is used to loop over an enumerable. Preciesely it loops over the enumerable properties of an object.
// for-of is used to loop over iterable. It loops over data structures that are iterable, like arrays, strings, maps.
for (const element of elements) console.log(element.render());
