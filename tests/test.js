const assert = require('assert');
const sumOfOther = require('../src/sumOfOther.js');
const make = require('../src/make.js').make;
const recursion = require('../src/recursion.js');

describe('sumOfOther', () => {
  it('1', () => {
    const res = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(res, [8, 7, 6, 9]);
  });

  it('2', () => {
    const res = sumOfOther([2]);
    assert.deepEqual(res, [0]);
  });

  it('3', () => {
    const res = sumOfOther([0, 0, 0, 1]);
    assert.deepEqual(res, [1, 1, 1, 0]);
  });

  it('4', () => {
    const res = sumOfOther([121, 1580, 55]);
    assert.deepEqual(res, [1635, 176, 1701]);
  });

  it('5', () => {
    const res = sumOfOther([1234, 0, 15, 67, 1, 122]);
    assert.deepEqual(res, [205, 1439, 1424, 1372, 1438, 1317]);
  });
});

function sum(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return Math.floor(a / b);
}

describe('make', () => {
  it('1', () => {
    const count = make(15)(34, 21, 666)(41)(sum);
    assert.equal(count, 777);
  });

  it('2', () => {
    const count = make(5, 4)(1, 25, 8, 10)(mult);
    assert.equal(count, 40000);
  });

  it('3', () => {
    const count = make(285, 3)(1)(4, 5)(div);
    assert.equal(count, 4);
  });

  it('4', () => {
    const count = make(5, 0)(div);
    assert.equal(count, Infinity);
  });

  it('5', () => {
    const count = make()(mult);
    assert.equal(count, undefined);
  });
});

const tree1 = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
const tree2 = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120}};
const tree3 = {"value":100,"left":{"value":90,"right":{"value":99}},"right":{"value":120,"left":{"value":110}}};
const tree4 = {"value":1};
const tree5 = {};

describe('recursion', () => {
  it('1', () => {
    const res = recursion(tree1);
    assert.deepEqual(res, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('2', () => {
    const res = recursion(tree2);
    assert.deepEqual(res, [[100], [90, 120], [70, 99]]);
  });

  it('3', () => {
    const res = recursion(tree3);
    assert.deepEqual(res, [[100], [90, 120], [99, 110]]);
  });

  it('4', () => {
    const res = recursion(tree4);
    assert.deepEqual(res, [[1]]);
  });

  it('5', () => {
    const res = recursion(tree5);
    assert.deepEqual(res, [[undefined]]);
  });
});
