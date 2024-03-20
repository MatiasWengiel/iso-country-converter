import { alpha3ToAlpha2 } from "../../src/index";

describe("alpha3ToAlpha2", () => {
  test("converts from ARG to AR", () => {
    const converted = alpha3ToAlpha2("ARG");

    expect(converted).toBe("AR");
  });

  describe("enableErrors is false", () => {
    test("returns undefined for an unknown country code", () => {
      const converted = alpha3ToAlpha2("XYZ");

      expect(converted).toBeUndefined();
    });

    test("returns undefined if the passed string is not three characters in length", () => {
      const shortConverted = alpha3ToAlpha2("A");
      const longConverted = alpha3ToAlpha2("WXYZ");

      expect(shortConverted).toBeUndefined();
      expect(longConverted).toBeUndefined();
    });
  });

  describe("enableErrors is true", () => {
    const converterOptions = {enableErrors: true}
    test("throws an error for an unknown country code", () => {
      expect(() => alpha3ToAlpha2("ZZZ", converterOptions)).toThrowError(
        new Error("Unable to map country code, no matching result found")
      );
    });

    test("throws an error for a too-short input", () => {
      expect(() => alpha3ToAlpha2("A", converterOptions)).toThrowError(new Error("Country code does not match expected length"));
    });

    test("throws an error for an input that is too long", () => {
      expect(() => alpha3ToAlpha2("ABCD", converterOptions)).toThrowError(new Error("Country code does not match expected length"));
    });
  });
});
