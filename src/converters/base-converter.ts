import {
  ConverterOptions,
  PossibleReturnTypes,
} from './types/base-converter.types';

export const baseConverter = <T extends string, O extends PossibleReturnTypes>(
  countryCode: T,
  map: Map<string, O>,
  options: ConverterOptions = {
    enableErrors: false,
  }
): O => {
  const { enableErrors } = options;
  const expectedLength = map.keys().next().value.length;

  if (countryCode.length !== expectedLength) {
    if (enableErrors) {
      throw new Error('Country code does not match expected length', {
        cause: `Received a country code of ${countryCode.length} length. Expected a length of ${expectedLength}`,
      });
    }

    return undefined;
  }

  const converted = map.get(countryCode);

  if (!converted && enableErrors) {
    throw new Error('Unable to map country code, no matching result found');
  }

  return converted;
};
