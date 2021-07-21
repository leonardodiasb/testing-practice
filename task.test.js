const functions = require('./task');

test('test stringLength function', () => {
    expect(functions.stringLength('hola')).toBe(4);
});
test("reverseString test 1", () => {
    expect(functions.reverseString("leonardo")).toBe("odranoel");
});

describe("Add tests", () => {
    test("2 + 3 = 5", () => {
      expect(functions.calc.add(2, 3)).toBe(5);
    });
  
    test("-1 + -3 = -4", () => {
      expect(functions.calc.add(-1, -3)).toBe(-4);
    });
  
    test("-1 + '3' != 2", () => {
      expect(functions.calc.add(-1, "3")).not.toBe(2);
    });
});

describe("Subtract tests", () => {
    test("2 - 3 = -1", () => {
      expect(functions.calc.subtract(2, 3)).toBe(-1);
    });
  
    test("-1 - -3 = 2", () => {
      expect(functions.calc.subtract(-1, -3)).toBe(2);
    });
  
    test("-1 - '3' != -4", () => {
      expect(functions.calc.subtract(-1, "3")).toBeUndefined();
    });
});

describe("Divide tests", () => {
    test("6 / 3 = 2", () => {
        expect(functions.calc.divide(6, 3)).toBe(2);
    });

    test("-9 / -3 = 3", () => {
        expect(functions.calc.divide(-9, -3)).toBe(3);
    });

    test("10 / 0 = undefined", () => {
        expect(functions.calc.divide(10, 0)).toBeUndefined();
    });
});

describe("Multiply tests", () => {
    test("2 * 3 = 6", () => {
        expect(functions.calc.multiply(2, 3)).toBe(6);
    });

    test("-1 + -3 = -4", () => {
        expect(functions.calc.multiply(-1, -3)).toBe(3);
    });

    test("-1 + '3' = -4", () => {
        expect(functions.calc.multiply(-1, "3")).toBeUndefined();
    });
});

test("leo = Leo", () => {
    expect(functions.capitalize("leo")).toBe("Leo");
});