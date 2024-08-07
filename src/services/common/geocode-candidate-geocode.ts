// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const geocodeCandidateGeocode: any = z.lazy(() => {
  return z.object({
    latitude: z.string(),
    longitude: z.string(),
  });
});

/**
 * Geocode is the latitude and longitude of the origin candidate.
 * @typedef  {GeocodeCandidateGeocode} geocodeCandidateGeocode - Geocode is the latitude and longitude of the origin candidate. - Geocode is the latitude and longitude of the origin candidate.
 * @property {string} - The latitude of the origin address, center point of the exchange, center point of the postal code, or center point of the city.
 * @property {string} - The longitude of the origin address, center point of the exchange, center point of the postal code, or center point of the city.
 */
export type GeocodeCandidateGeocode = z.infer<typeof geocodeCandidateGeocode>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const geocodeCandidateGeocodeResponse: any = z.lazy(() => {
  return z
    .object({
      Latitude: z.string(),
      Longitude: z.string(),
    })
    .transform((data) => ({
      latitude: data['Latitude'],
      longitude: data['Longitude'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const geocodeCandidateGeocodeRequest: any = z.lazy(() => {
  return z.object({ latitude: z.string().nullish(), longitude: z.string().nullish() }).transform((data) => ({
    Latitude: data['latitude'],
    Longitude: data['longitude'],
  }));
});
