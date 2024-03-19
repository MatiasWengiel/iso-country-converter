import { alpha3ToAlpha2 } from "../../src/index";

describe("alpha3ToAlpha2", () => {
  test("converts from ARG to AR", () => {
    const converted = alpha3ToAlpha2("ARG");

    expect(converted).toBe("AR");
  });

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
