'use strict';

// s05e05 - Babel

// Commands to initialize:
// `npm init --yes` intializes npm with default values
// `npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev` CLI for commands, Core for setup, preset is a
// pack of JS features specification. --save-dev is `npm install` flag that says it is used only in dev, not on production.
// then we also add the following to the package.json NPM file:
//  "scripts": {"babel": "babel --presets env index.js -o build/index.js"}

var x = 1;
