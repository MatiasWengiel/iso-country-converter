import { alpha2ToNumericMap } from "../maps/maps";

export const alpha2ToNumeric = (countryCode: string): number | undefined => {
  if (countryCode.length !== 2) return undefined;

  return alpha2ToNumericMap.get(countryCode);
};
