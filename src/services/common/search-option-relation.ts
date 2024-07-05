// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOptionRelation = z.object({
  code: z.string().min(2).max(2),
});

/**
 * The relation container will contain the relation parameter (And/Or) that has to be used among multiple option codes in the location search. 

This is only applicable to option type Additional Services and Program Types. If this container is not present for Additional Services and Program Types, the default relation of And is used.
 * @typedef  {SearchOptionRelation} searchOptionRelation - The relation container will contain the relation parameter (And/Or) that has to be used among multiple option codes in the location search. 

This is only applicable to option type Additional Services and Program Types. If this container is not present for Additional Services and Program Types, the default relation of And is used. - The relation container will contain the relation parameter (And/Or) that has to be used among multiple option codes in the location search. 

This is only applicable to option type Additional Services and Program Types. If this container is not present for Additional Services and Program Types, the default relation of And is used.
 * @property {string} - Applicable for Additional Services and Program Types.

Valid values:

- 01 - And (Default)
- 02 - Or

 */
export type SearchOptionRelation = z.infer<typeof searchOptionRelation>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOptionRelationResponse = z
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
export const searchOptionRelationRequest = z.object({ code: z.string().nullish() }).transform((data) => ({
  Code: data['code'],
}));
