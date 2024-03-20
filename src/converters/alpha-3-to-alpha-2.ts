import { alpha3ToAlpha2Map } from "../maps/maps";
import { baseConverter } from "./base-converter";
import { ConverterOptions } from "./types/base-converter.types";

export const alpha3ToAlpha2 = (countryCode: string, options?: ConverterOptions): string | undefined => {
  return baseConverter<string, string>(countryCode, alpha3ToAlpha2Map, options);
};
