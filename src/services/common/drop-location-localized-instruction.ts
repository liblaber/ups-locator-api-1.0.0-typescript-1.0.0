// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dropLocationLocalizedInstruction = z.object({
  locale: z.string().min(5).max(5),
  last50ftInstruction: z.string().min(1).max(750),
});

/**
 *
 * @typedef  {DropLocationLocalizedInstruction} dropLocationLocalizedInstruction
 * @property {string} - Locale
 * @property {string} - Holds the additional instructions. Text will be displayed in English or the locale given in the request. The max length of the additional instruction text is 750 characters.
 */
export type DropLocationLocalizedInstruction = z.infer<typeof dropLocationLocalizedInstruction>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dropLocationLocalizedInstructionResponse = z
  .object({
    Locale: z.string().min(5).max(5),
    Last50ftInstruction: z.string().min(1).max(750),
  })
  .transform((data) => ({
    locale: data['Locale'],
    last50ftInstruction: data['Last50ftInstruction'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dropLocationLocalizedInstructionRequest = z
  .object({ locale: z.string().nullish(), last50ftInstruction: z.string().nullish() })
  .transform((data) => ({
    Locale: data['locale'],
    Last50ftInstruction: data['last50ftInstruction'],
  }));
