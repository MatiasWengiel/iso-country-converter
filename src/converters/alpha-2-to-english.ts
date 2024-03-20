import { alpha2ToEnglishMap } from "../maps/maps";

export const alpha2ToEnglish = (countryCode: string): string | undefined => {
  if (countryCode.length !== 2) return undefined;

  return alpha2ToEnglishMap.get(countryCode);
};
