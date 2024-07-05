// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const originAddressGeocode = z.object({
  latitude: z.string().min(15).max(15),
  longitude: z.string().min(15).max(15),
});

/**
 * Geocode is the latitude and longitude of the origin address.
 * @typedef  {OriginAddressGeocode} originAddressGeocode - Geocode is the latitude and longitude of the origin address. - Geocode is the latitude and longitude of the origin address.
 * @property {string} - The latitude of the origin address or the center point of the area code.
 * @property {string} - The longitude of the origin address or the center point of the area code.
 */
export type OriginAddressGeocode = z.infer<typeof originAddressGeocode>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const originAddressGeocodeResponse = z
  .object({
    Latitude: z.string().min(15).max(15),
    Longitude: z.string().min(15).max(15),
  })
  .transform((data) => ({
    latitude: data['Latitude'],
    longitude: data['Longitude'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const originAddressGeocodeRequest = z
  .object({ latitude: z.string().nullish(), longitude: z.string().nullish() })
  .transform((data) => ({
    Latitude: data['latitude'],
    Longitude: data['longitude'],
  }));
