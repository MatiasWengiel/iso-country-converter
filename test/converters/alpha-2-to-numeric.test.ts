import { alpha2ToNumeric } from '../../src/index';

describe('alpha2ToNumeric', () => {
  test('converts from AR to 32', () => {
    const converted = alpha2ToNumeric('AR');

    expect(converted).toBe(32);
  });

  describe('enableErrors is false', () => {
    test('returns undefined for an unknown country code', () => {
      const converted = alpha2ToNumeric('ZZ');

      expect(converted).toBeUndefined();
    });

    test('returns undefined if the passed string is not two characters in length', () => {
      const shortConverted = alpha2ToNumeric('A');
      const longConverted = alpha2ToNumeric('ARG');

      expect(shortConverted).toBeUndefined();
      expect(longConverted).toBeUndefined();
    });
  });

  describe('enableErrors is true', () => {
    const converterOptions = { enableErrors: true };

    test('throws an error for an unknown country code', () => {
      expect(() => alpha2ToNumeric('ZZ', converterOptions)).toThrowError(
        new Error('Unable to map country code, no matching result found')
      );
    });

    test('throws an error for a single character input', () => {
      expect(() => alpha2ToNumeric('A', converterOptions)).toThrowError(
        new Error('Country code does not match expected length')
      );
    });

    test('throws an error for an input that is too long', () => {
      expect(() => alpha2ToNumeric('ABC', converterOptions)).toThrowError(
        new Error('Country code does not match expected length')
      );
    });
  });
});
