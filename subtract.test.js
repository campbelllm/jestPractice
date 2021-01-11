const { test, expect } = require("@jest/globals");
const subtract = require("./subtracts");

test("properly subtracts", () => {
  expect(subtract(1, 2)).toBe(-1);
});
