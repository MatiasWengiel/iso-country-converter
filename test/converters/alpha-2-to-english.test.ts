import { alpha2ToEnglish } from "../../src/index";

describe("alpha2ToEnglish", () => {
  test("converts from AR to Argentina", () => {
    const converted = alpha2ToEnglish("AR");

    expect(converted).toBe("Argentina");
  });

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
