const { describe, test, expect } = await import('vitest');
const arrayPlusArray = require('../js/app');

describe("Basic test", () => {
    test("Sum of [1, 2, 3] and [4, 5, 6] should be 21", () => {
        expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21);
    });

    test("Sum of [-1, -2, -3] and [-4, -5, -6] should be -21", () => {
        expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21);
    });

    test("Sum of [0, 0, 0] and [4, 5, 6] should be 15", () => {
        expect(arrayPlusArray([0, 0, 0], [4, 5, 6])).toBe(15);
    });

    test("Sum of [100, 200, 300] and [400, 500, 600] should be 2100", () => {
        expect(arrayPlusArray([100, 200, 300], [400, 500, 600])).toBe(2100);
    });
});
