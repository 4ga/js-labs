import { describe, it, expect } from "vitest";
import { add, divide, isEven, isOdd, multiply, subtract } from "../src/math";

describe("math utils", () => {
  it("adds two positive numbers", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it("add negative and positive numbers", () => {
    const result = add(-2, 3);
    expect(result).toBe(1);
  });

  it("subtracts two numbers", () => {
    const result = subtract(10, 4);
    expect(result).toBe(6);
  });

  it("multiplies two numbers", () => {
    const result = multiply(3, 4);
    expect(result).toBe(12);
  });

  it("divides two numbers", () => {
    const result = divide(10, 2);
    expect(result).toBe(5);
  });

  it("divides negative numbers", () => {
    const result = divide(-9, 3);
    expect(result).toBe(-3);
  });

  it("returns null when dividing by zero", () => {
    const result = divide(10, 0);
    expect(result).toBeNull();
  });

  it("detects even numbers", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(0)).toBe(true);
  });

  it("detects odd numbers", () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-3)).toBe(true);
    expect(isEven(-3)).toBe(false);
  });
});
