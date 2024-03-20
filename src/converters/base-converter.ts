type PossibleReturnTypes = string | undefined;

export const baseConverter = <T extends string>(
  countryCode: T,
  enableErrors: boolean = false,
  map: Map<string, string>
): PossibleReturnTypes => {
  const expectedLength = map.keys().next().value.length;

  if (countryCode.length !== expectedLength) {
    if (enableErrors) {
      throw new Error("Country code does not match expected length", {
        cause: `Received a country code of ${countryCode.length} length. Expected a length of ${expectedLength}`,
      });
    }

    return undefined;
  }
  return map.get(countryCode);
};
