// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dropLocationPromotionInformation = z.object({
  locale: z.string().min(5).max(5),
  promotion: z.string().min(1).max(100),
});

/**
 *
 * @typedef  {DropLocationPromotionInformation} dropLocationPromotionInformation
 * @property {string} - Locale (language/ dialect) for the promotion code.
 * @property {string} - Promotion text for the given location.
 */
export type DropLocationPromotionInformation = z.infer<typeof dropLocationPromotionInformation>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dropLocationPromotionInformationResponse = z
  .object({
    Locale: z.string().min(5).max(5),
    Promotion: z.string().min(1).max(100),
  })
  .transform((data) => ({
    locale: data['Locale'],
    promotion: data['Promotion'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dropLocationPromotionInformationRequest = z
  .object({ locale: z.string().nullish(), promotion: z.string().nullish() })
  .transform((data) => ({
    Locale: data['locale'],
    Promotion: data['promotion'],
  }));
