import { add, mul } from ".";

test("add and multipy", () => {

  expect(add(1, 2, 3)).toEqual(6);

  expect(mul(4, 5, 6)).toEqual(120);

});
