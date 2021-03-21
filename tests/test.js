import { isNumber } from "../src/utils/isNumber";
import { isString } from "../src/utils/isString";
import { getType } from "../src/utils/getType";
import { isPersian } from "../src/packages/isPersian";

test("isNumber", () => {
  expect(isNumber([])).toBeFalsy();
  expect(isNumber(2)).toBeTruthy();
});

test("isString", () => {
  expect(isString(true)).toBeFalsy();
  expect(isString("")).toBeTruthy();
});

test("getType", () => {
  expect(getType("")).toBe("string");
  expect(getType([])).toBe("array");
});

test("isPersian", () => {
  expect(isPersian("abcd")).toBeFalsy();
  expect(isPersian(".سلام")).toBeTruthy();
  expect(isPersian("۱۳۴۳")).toBeTruthy();
  expect(() => isPersian(343)).toThrow();
  expect(() => isPersian([23])).toThrow();
  expect(isPersian('')).toBeFalsy();
});
