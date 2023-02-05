const { describe, it } = require("node:test");
const assert  = require("node:assert");
const add = require("../index.js");
describe("synchronous passing test", (t) => {
  it("should pass", () => {
    assert.strictEqual(1, 1);
  });
});

describe('add should be defined', () => {
    it('should be defined', () => {
        assert.strictEqual(typeof add, 'function');
    });
    it('should add two numbers', () => { 
        assert.strictEqual(add(1, 2), 3);
    })
 })