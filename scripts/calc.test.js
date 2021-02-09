const {test, expect} = require("@jest/globals");
import { Calculator } from "./calc.js";

let calc;

beforeAll(() => {
    calc = new Calculator();
});

afterAll(() => {
    calc = null;
});

test("can add 1 + 2?", () => {
    let calc = new Calculator;
    expect(calc.add(1,2)).toBe(3);
});

test("can subtract 1 from 2?", () => {
    let calc = new Calculator;
    expect(calc.subtract(2,1)).toBe(1);
});

test("can multiply 10 by 20?", () => {
    let calc = new Calculator;
    expect(calc.multiply(10,20)).toBe(200);
});

test("can divide 20 by 10?", () => {
    let calc = new Calculator;
    expect(calc.divide(20,10)).toBe(2);
});