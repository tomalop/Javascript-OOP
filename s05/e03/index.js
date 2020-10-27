// s05e03 - ES6 Modules

// By default, everything defined in a module is considered private, unless we explicitely export it using `export` keyword.
// When we import the circle module in the index module (here), we will have access to the circle class (marked with export).
// But we will not be able to work with radius WeakMap.

// Additionally, to import we need to either use WebPack (or similar) or add type="module" in our HTML script definition.

import { Circle } from './circle.js';

const c = new Circle(10);
c.draw();
