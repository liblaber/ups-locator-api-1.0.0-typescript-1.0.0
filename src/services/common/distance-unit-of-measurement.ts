// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const distanceUnitOfMeasurement = z.object({
  code: z.string(),
  description: z.string().min(5).max(10).optional(),
});

/**
 * The unit of measurement the user will see for the distance is based on the user input provided in the search request.
 * @typedef  {DistanceUnitOfMeasurement} distanceUnitOfMeasurement - The unit of measurement the user will see for the distance is based on the user input provided in the search request. - The unit of measurement the user will see for the distance is based on the user input provided in the search request.
 * @property {string} - The distance unit of measurement code. The unit of measurement used in the search request is returned. 

Valid values: MI-Miles or KM-Kilometers
 * @property {string} - May return the description of the unit of measure specified in the request.
 */
export type DistanceUnitOfMeasurement = z.infer<typeof distanceUnitOfMeasurement>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const distanceUnitOfMeasurementResponse = z
  .object({
    Code: z.string(),
    Description: z.string().min(5).max(10).optional(),
  })
  .transform((data) => ({
    code: data['Code'],
    description: data['Description'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const distanceUnitOfMeasurementRequest = z
  .object({ code: z.string().nullish(), description: z.string().nullish() })
  .transform((data) => ({
    Code: data['code'],
    Description: data['description'],
  }));
