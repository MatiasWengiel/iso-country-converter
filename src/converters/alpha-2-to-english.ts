import { alpha2ToEnglishMap } from '../maps/maps';
import { baseConverter } from './base-converter';
import { ConverterOptions } from './types/base-converter.types';

export const alpha2ToEnglish = (
  countryCode: string,
  options?: ConverterOptions
): string | undefined => {
  return baseConverter<string, string>(
    countryCode,
    alpha2ToEnglishMap,
    options
  );
};
