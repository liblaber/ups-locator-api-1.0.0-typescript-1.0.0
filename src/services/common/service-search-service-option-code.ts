// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const serviceSearchServiceOptionCode = z.object({
  code: z.string().min(2).max(2),
});

/**
 * Container for the optional service information such as Saturday Pick up.
 * @typedef  {ServiceSearchServiceOptionCode} serviceSearchServiceOptionCode - Container for the optional service information such as Saturday Pick up. - Container for the optional service information such as Saturday Pick up.
 * @property {string} - Code that defines the optional service.

Valid values:
- 01 - Saturday pickup.

Only valid for air service.

 */
export type ServiceSearchServiceOptionCode = z.infer<typeof serviceSearchServiceOptionCode>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const serviceSearchServiceOptionCodeResponse = z
  .object({
    Code: z.string().min(2).max(2),
  })
  .transform((data) => ({
    code: data['Code'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const serviceSearchServiceOptionCodeRequest = z.object({ code: z.string().nullish() }).transform((data) => ({
  Code: data['code'],
}));