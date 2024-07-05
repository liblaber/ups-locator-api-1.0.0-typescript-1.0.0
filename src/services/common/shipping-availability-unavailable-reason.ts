// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const shippingAvailabilityUnavailableReason = z.object({
  code: z.string().min(2).max(2),
  description: z.string().min(1).max(35),
});

/**
 * Container to hold shipping unavailable reason.
 * @typedef  {ShippingAvailabilityUnavailableReason} shippingAvailabilityUnavailableReason - Container to hold shipping unavailable reason. - Container to hold shipping unavailable reason.
 * @property {string} - Code for shipping unavailability. Code for DCR/DCO unavailability.

Valid values:
- 01 - Temporarily Unavailable
- 02 - Location Full
- 03 - Unavailable
- 04 - Weather

 * @property {string} - Description for shipping unavailability.
 */
export type ShippingAvailabilityUnavailableReason = z.infer<typeof shippingAvailabilityUnavailableReason>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const shippingAvailabilityUnavailableReasonResponse = z
  .object({
    Code: z.string().min(2).max(2),
    Description: z.string().min(1).max(35),
  })
  .transform((data) => ({
    code: data['Code'],
    description: data['Description'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const shippingAvailabilityUnavailableReasonRequest = z
  .object({ code: z.string().nullish(), description: z.string().nullish() })
  .transform((data) => ({
    Code: data['code'],
    Description: data['description'],
  }));
