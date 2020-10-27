// s05e06 - Webpack

// Commands to initialize:
// OLD:
// npm init -y
// `npm i -g webpack-cli@2.0.14`
// `webpack-cli init`
// NEW:
// npm init -y
// npm install webpack webpack-cli --save-dev
// ADD TO package.json : "scripts": { "build": "webpack --config webpack.config.js" } OR hot-reload { "build": "webpack -w" }
// npm run-script build

// ? Why do I need to specify in html script type "module" when Iam using wepack, so imports won't need file extension suffix.

import _ from 'lodash';
import { Circle } from './circle';
// tests webpack
function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ');

	return element;
}
document.body.appendChild(component());

// main code
const c = new Circle(10);
c.draw();

console.log('Changed');
