/* global it */
const { assert } = require('chai');
const timeshift = require('..');

const OriginalDate = Date;

it('travels throught time', () => {

  const frenchRevolution = new Date('1789-07-14');

  timeshift('1789-07-14');

  // 5 ms margin error for slow machines
  assert.approximately(new Date().getTime(), frenchRevolution.getTime(), 5);
});

it('can come back safe', () => {

  timeshift();

  assert.strictEqual(Date, OriginalDate);
});

// Test Date constructor with arguments after shifting
it('knows what happended last summer', () => {

  const lastSummer = new Date('2016-07-14');

  // 1 hour until the new millenium, best party ever
  timeshift('2999-12-31T23:00:00');

  assert.strictEqual(new Date('2016-07-14').getTime(), lastSummer.getTime());

  timeshift();
});

// Test Date.now after shifting
it('savours the moment', () => {
  // 1970-01-01 the begining of JavaScript time
  timeshift(0);

  // Let us witness the big bang of JavaScript
  assert.approximately(Date.now(), 0, 5);

  timeshift();
});
