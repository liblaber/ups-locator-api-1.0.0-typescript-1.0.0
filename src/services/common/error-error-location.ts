// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const errorErrorLocation = z.object({
  errorLocationElementName: z.string().min(1).max(512).optional(),
  errorLocationAttributeName: z.string().min(1).max(50).optional(),
});

/**
 *
 * @typedef  {ErrorErrorLocation} errorErrorLocation
 * @property {string} - The Xpath name of the element in error. This is a valid Xpath pointing to an element in the request document.
 * @property {string} - The name of the attribute in error. This is the name of the attribute contained by the Error Location element.
 */
export type ErrorErrorLocation = z.infer<typeof errorErrorLocation>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const errorErrorLocationResponse = z
  .object({
    ErrorLocationElementName: z.string().min(1).max(512).optional(),
    ErrorLocationAttributeName: z.string().min(1).max(50).optional(),
  })
  .transform((data) => ({
    errorLocationElementName: data['ErrorLocationElementName'],
    errorLocationAttributeName: data['ErrorLocationAttributeName'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const errorErrorLocationRequest = z
  .object({ errorLocationElementName: z.string().nullish(), errorLocationAttributeName: z.string().nullish() })
  .transform((data) => ({
    ErrorLocationElementName: data['errorLocationElementName'],
    ErrorLocationAttributeName: data['errorLocationAttributeName'],
  }));