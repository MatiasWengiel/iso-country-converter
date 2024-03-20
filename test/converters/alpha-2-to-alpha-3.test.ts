import { alpha2ToAlpha3 } from '../../src/index';

describe('alpha2ToAlpha3', () => {
  test('converts from AR to ARG', () => {
    const converted = alpha2ToAlpha3('AR');

    expect(converted).toBe('ARG');
  });

  describe('enableErrors is false', () => {
    test('returns undefined for an unknown country code', () => {
      const converted = alpha2ToAlpha3('XY');

      expect(converted).toBeUndefined();
    });

    test('returns undefined if the passed string is not two characters in length', () => {
      const shortConverted = alpha2ToAlpha3('A');
      const longConverted = alpha2ToAlpha3('WYZ');

      expect(shortConverted).toBeUndefined();
      expect(longConverted).toBeUndefined();
    });
  });

  describe('enableErrors is true', () => {
    const converterOptions = { enableErrors: true };
    test('throws an error for an unknown country code', () => {
      expect(() => alpha2ToAlpha3('ZZ', converterOptions)).toThrowError(
        new Error('Unable to map country code, no matching result found')
      );
    });

    test('throws an error for a too-short input', () => {
      expect(() => alpha2ToAlpha3('A', converterOptions)).toThrowError(
        new Error('Country code does not match expected length')
      );
    });

    test('throws an error for an input that is too long', () => {
      expect(() => alpha2ToAlpha3('ABC', converterOptions)).toThrowError(
        new Error('Country code does not match expected length')
      );
    });
  });
});
