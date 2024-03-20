import { alpha2ToAlpha3Map } from '../maps/maps';
import { baseConverter } from './base-converter';
import { ConverterOptions } from './types/base-converter.types';

export const alpha2ToAlpha3 = (
  countryCode: string,
  options?: ConverterOptions
): string | undefined => {
  return baseConverter<string, string>(countryCode, alpha2ToAlpha3Map, options);
};
