import { alpha3ToAlpha2 } from "../../src/index";

describe("alpha3ToAlpha2", () => {
  test("converts from ARG to AR", () => {
    const converted = alpha3ToAlpha2("ARG");

    expect(converted).toBe("AR");
  });
});
