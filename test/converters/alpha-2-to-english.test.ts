import { alpha2ToEnglish } from "../../src/index";

describe("alpha2ToEnglish", () => {
  test("converts from AR to Argentina", () => {
    const converted = alpha2ToEnglish("AR");

    expect(converted).toBe("Argentina");
  });

  describe("enableErrors is false", () => {
    test("returns undefined for an unknown country code", () => {
      const converted = alpha2ToEnglish("ZZ");

      expect(converted).toBeUndefined();
    });

    test("returns undefined if the passed string is not two characters in length", () => {
      const shortConverted = alpha2ToEnglish("A");
      const longConverted = alpha2ToEnglish("ARG");

      expect(shortConverted).toBeUndefined();
      expect(longConverted).toBeUndefined();
    });
  });

  describe("enableErrors is true", () => {
      const converterOptions = {enableErrors: true}

    test("throws an error for an unknown country code", () => {
      expect(() => alpha2ToEnglish("ZZ", converterOptions)).toThrowError(
        new Error("Unable to map country code, no matching result found")
      );
    });

    test("throws an error for a single character input", () => {
      expect(() => alpha2ToEnglish("A", converterOptions)).toThrowError(new Error("Country code does not match expected length"));
    });

    test("throws an error for an input that is too long", () => {
      expect(() => alpha2ToEnglish("ABC", converterOptions)).toThrowError(new Error("Country code does not match expected length"));
    });
  });
});
