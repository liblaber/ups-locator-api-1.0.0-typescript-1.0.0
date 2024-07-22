// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const locationAttributeOptionType: any = z.lazy(() => {
  return z.object({
    code: z.string(),
    description: z.string().min(1).max(50),
  });
});

/**
 * 
 * @typedef  {LocationAttributeOptionType} locationAttributeOptionType   
 * @property {string} - Code for Option type. Valid values:
- 01 - Location
- 02 - Retail Location
- 03 - Additional Services
- 04 - Program Type

 * @property {string} - Description for Option type such as Location, RetailLocation, AdditionalServices and ProgramType.
 */
export type LocationAttributeOptionType = z.infer<typeof locationAttributeOptionType>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const locationAttributeOptionTypeResponse: any = z.lazy(() => {
  return z
    .object({
      Code: z.string(),
      Description: z.string().min(1).max(50),
    })
    .transform((data) => ({
      code: data['Code'],
      description: data['Description'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const locationAttributeOptionTypeRequest: any = z.lazy(() => {
  return z.object({ code: z.string().nullish(), description: z.string().nullish() }).transform((data) => ({
    Code: data['code'],
    Description: data['description'],
  }));
});
