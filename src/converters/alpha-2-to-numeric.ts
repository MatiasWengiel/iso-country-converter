import { alpha2ToNumericMap } from "../maps/maps";
import { baseConverter } from "./base-converter";

export const alpha2ToNumeric = (countryCode: string, enableErrors?: boolean): number | undefined => {
  return baseConverter<string, number>(countryCode, alpha2ToNumericMap, enableErrors);
};
