import { alpha3ToAlpha2Map } from "../maps/maps";
import { baseConverter } from "./base-converter";

export const alpha3ToAlpha2 = (countryCode: string, enableErrors: boolean = false): string | undefined | Error => {
  return baseConverter<string>(countryCode, enableErrors, alpha3ToAlpha2Map);
};
