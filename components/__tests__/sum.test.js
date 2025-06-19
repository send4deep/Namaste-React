import { Sum } from "../Sum";
test("It should return sum of two numbers", () => {
  const sum = Sum(1, 2);
  expect(sum).toBe(3);
});
