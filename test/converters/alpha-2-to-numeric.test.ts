import { alpha2ToNumeric } from "../../src/index";

describe("alpha2ToNumeric", () => {
  test("converts from AR to 32", () => {
    const converted = alpha2ToNumeric("AR");

    expect(converted).toBe(32);
  });

  test("returns undefined for an unknown country code", () => {
    const converted = alpha2ToNumeric("ZZ");

    expect(converted).toBeUndefined();
  });

  test("returns undefined if the passed string is not two characters in length", () => {
    const shortConverted = alpha2ToNumeric("A");
    const longConverted = alpha2ToNumeric("ARG");

    expect(shortConverted).toBeUndefined();
    expect(longConverted).toBeUndefined();
  });
});
