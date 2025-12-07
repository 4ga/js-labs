// tests/strings.test.js
import { describe, it, expect } from "vitest";
import {
  capitalize,
  toCamelCase,
  toSnakeCase,
  isEmpty,
  trimExtraSpaces,
} from "../src/strings";

describe("string utils", () => {
  describe("capitalize", () => {
    it("throws for non-string input", () => {
      expect(() => capitalize(123)).toThrow("Input must be a string");
    });

    it("capitalizes a lowercase word", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("capitalizes and lowercases the rest", () => {
      expect(capitalize("hELLO")).toBe("Hello");
    });

    it("returns empty string when given empty string", () => {
      expect(capitalize("")).toBe("");
    });
  });

  describe("toCamelCase", () => {
    it("throws for non-string input", () => {
      expect(() => toCamelCase(123)).toThrow("Input must be a string");
    });

    it("returns the same string for a single word (lowercased)", () => {
      expect(toCamelCase("hello")).toBe("hello");
    });

    it("converts space separated words to camelCase", () => {
      expect(toCamelCase("hello world")).toBe("helloWorld");
    });

    it("trims extra spaces and converts to camelCase", () => {
      expect(toCamelCase("   hello   world  ")).toBe("helloWorld");
    });
  });

  describe("toSnakeCase", () => {
    it("throws for non-string input", () => {
      expect(() => toSnakeCase(123)).toThrow("Input must be a string");
    });

    it("converts space separated words to snake_case", () => {
      expect(toSnakeCase("hello world")).toBe("hello_world");
    });

    it("trims extra spaces and lowercases the result", () => {
      expect(toSnakeCase("  Hello   WORLD ")).toBe("hello_world");
    });
  });

  describe("isEmpty", () => {
    it("throws for non-string input", () => {
      expect(() => isEmpty(123)).toThrow("Input must be a string");
    });

    it("returns true for empty string", () => {
      expect(isEmpty("")).toBe(true);
    });

    it("returns true for string with only spaces", () => {
      expect(isEmpty("   ")).toBe(true);
    });

    it("returns false for non-empty string", () => {
      expect(isEmpty("a")).toBe(false);
    });
  });

  describe("trimExtraSpaces", () => {
    it("throws for non-string input", () => {
      expect(() => trimExtraSpaces(123)).toThrow("Input must be a string");
    });

    it("trims spaces at start and end", () => {
      expect(trimExtraSpaces("  hello ")).toBe("hello");
    });

    it("collapses multiple internal spaces into a single space", () => {
      expect(trimExtraSpaces("a   b    c")).toBe("a b c");
    });

    it("returns empty string when only spaces are provided", () => {
      expect(trimExtraSpaces("   ")).toBe("");
    });
  });
});
