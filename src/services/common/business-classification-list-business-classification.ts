// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const businessClassificationListBusinessClassification = z.object({
  code: z.string().min(1).max(3),
  description: z.string().max(35),
});

/**
 *
 * @typedef  {BusinessClassificationListBusinessClassification} businessClassificationListBusinessClassification
 * @property {string} - Business Classification code of UPS Access Point. Please refer to appendix D for a list of business classification.
 * @property {string} - Description of business classification.
 */
export type BusinessClassificationListBusinessClassification = z.infer<
  typeof businessClassificationListBusinessClassification
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const businessClassificationListBusinessClassificationResponse = z
  .object({
    Code: z.string().min(1).max(3),
    Description: z.string().max(35),
  })
  .transform((data) => ({
    code: data['Code'],
    description: data['Description'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const businessClassificationListBusinessClassificationRequest = z
  .object({ code: z.string().nullish(), description: z.string().nullish() })
  .transform((data) => ({
    Code: data['code'],
    Description: data['description'],
  }));