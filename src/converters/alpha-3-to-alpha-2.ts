import { alpha3ToAlpha2Map } from "../maps/maps";
import { baseConverter } from "./base-converter";

export const alpha3ToAlpha2 = (countryCode: string, enableErrors?: boolean): string | undefined => {
  return baseConverter<string, string>(countryCode, alpha3ToAlpha2Map, enableErrors);
};
