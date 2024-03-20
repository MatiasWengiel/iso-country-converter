import { alpha2ToEnglishMap } from "../maps/maps";
import { baseConverter } from "./base-converter";

export const alpha2ToEnglish = (countryCode: string, enableErrors?: boolean): string | undefined => {
  return baseConverter<string, string>(countryCode, alpha2ToEnglishMap, enableErrors);
};
