// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const geocodeCandidateAddressKeyFormat = z.object({
  consigneeName: z.string().optional(),
  addressLine: z.string(),
  politicalDivision3: z.string().optional(),
  politicalDivision2: z.string(),
  politicalDivision1: z.string(),
  postcodePrimaryLow: z.string(),
  postcodeExtendedLow: z.string().optional(),
  countryCode: z.string(),
});

/**
 * Contains all of the basic information about candidate address.
 * @typedef  {GeocodeCandidateAddressKeyFormat} geocodeCandidateAddressKeyFormat - Contains all of the basic information about candidate address. - Contains all of the basic information about candidate address.
 * @property {string} - Name. Not relevant for candidate list.
 * @property {string} - Address Line Information. The address level or Intersection information must be returned if provided in the request. The AddressLine will be a combination of up to 3 separate address lines, each separated by a new line character.
 * @property {string} - Subdivision within a City. e.g., a Barrio.
 * @property {string} - City.
 * @property {string} - State/Province.
 * @property {string} - Postal Code.
 * @property {string} - 4 Digit postal code extension. Valid for US only.
 * @property {string} - A country or territory code. Valid values for candidates to be returned are: US-United States (meaning US 50)
 */
export type GeocodeCandidateAddressKeyFormat = z.infer<typeof geocodeCandidateAddressKeyFormat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const geocodeCandidateAddressKeyFormatResponse = z
  .object({
    ConsigneeName: z.string().optional(),
    AddressLine: z.string(),
    PoliticalDivision3: z.string().optional(),
    PoliticalDivision2: z.string(),
    PoliticalDivision1: z.string(),
    PostcodePrimaryLow: z.string(),
    PostcodeExtendedLow: z.string().optional(),
    CountryCode: z.string(),
  })
  .transform((data) => ({
    consigneeName: data['ConsigneeName'],
    addressLine: data['AddressLine'],
    politicalDivision3: data['PoliticalDivision3'],
    politicalDivision2: data['PoliticalDivision2'],
    politicalDivision1: data['PoliticalDivision1'],
    postcodePrimaryLow: data['PostcodePrimaryLow'],
    postcodeExtendedLow: data['PostcodeExtendedLow'],
    countryCode: data['CountryCode'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const geocodeCandidateAddressKeyFormatRequest = z
  .object({
    consigneeName: z.string().nullish(),
    addressLine: z.string().nullish(),
    politicalDivision3: z.string().nullish(),
    politicalDivision2: z.string().nullish(),
    politicalDivision1: z.string().nullish(),
    postcodePrimaryLow: z.string().nullish(),
    postcodeExtendedLow: z.string().nullish(),
    countryCode: z.string().nullish(),
  })
  .transform((data) => ({
    ConsigneeName: data['consigneeName'],
    AddressLine: data['addressLine'],
    PoliticalDivision3: data['politicalDivision3'],
    PoliticalDivision2: data['politicalDivision2'],
    PoliticalDivision1: data['politicalDivision1'],
    PostcodePrimaryLow: data['postcodePrimaryLow'],
    PostcodeExtendedLow: data['postcodeExtendedLow'],
    CountryCode: data['countryCode'],
  }));
