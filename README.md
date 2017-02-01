# Timeshift

[![npm version](https://badge.fury.io/js/timeshift.svg)](https://www.npmjs.com/package/timeshift)
[![Build Status](https://travis-ci.org/nelson-ai/timeshift.svg?branch=master)](https://travis-ci.org/nelson-ai/timeshift)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)

Time shifting in JavaScript.

This tiny no-dependency library modifies the global `Date` object to set the current time anywhere in the past or future. While ideal for testing time-dependant features, it works only in ES6 environments.

## Installation

`npm install timeshift`

## Usage

```js
// Let's build a time machine
const timeshift = require('timeshift');

// Ant go see what the French revolution was like
// Any valid Date constructor argument can be used
timeshift('1789-07-14');

/* or:
timeshift('1789-07-14T00:00:00.000Z');
timeshift(-5694969600000);
timeshift(new Date('1789-07-14'));

The return value is the original Date object
const OriginalDate = timeshift('1789-07-14');
*/

// Congratulations, you're in the past (or future, whatever)
new Date(); // 1789-07-14T00:00:00.001Z
Date.now(); // -5694969599999

// You can still work with fixed dates
new Date('1999-12-31T23:59:59.999Z'); // 1999-12-31T23:59:59.999Z

// To go back to the present, pass no argument, undefined or null
timeshift();

new Date(); // (Your current computer time)
```

## Contributing

Yes, thank you. Please lint, update/write tests and add your name to the package.json file before you PR.

## License

MIT
