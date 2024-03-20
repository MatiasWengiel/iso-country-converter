import { alpha2ToNumericMap } from '../maps/maps';
import { baseConverter } from './base-converter';
import { ConverterOptions } from './types/base-converter.types';

export const alpha2ToNumeric = (
  countryCode: string,
  options?: ConverterOptions
): number | undefined => {
  return baseConverter<string, number>(
    countryCode,
    alpha2ToNumericMap,
    options
  );
};
