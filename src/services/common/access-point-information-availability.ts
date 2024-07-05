// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  availabilityShippingAvailability,
  availabilityShippingAvailabilityRequest,
  availabilityShippingAvailabilityResponse,
} from './availability-shipping-availability';
import {
  availabilityDcrAvailability,
  availabilityDcrAvailabilityRequest,
  availabilityDcrAvailabilityResponse,
} from './availability-dcr-availability';

/**
 * The shape of the model inside the application code - what the users use
 */
export const accessPointInformationAvailability = z.object({
  shippingAvailability: availabilityShippingAvailability.optional(),
  dcrAvailability: availabilityDcrAvailability.optional(),
});

/**
 * Container to hold the status of shipping or DRC/DCO availability of a UPS Access Point.
 * @typedef  {AccessPointInformationAvailability} accessPointInformationAvailability - Container to hold the status of shipping or DRC/DCO availability of a UPS Access Point. - Container to hold the status of shipping or DRC/DCO availability of a UPS Access Point.
 * @property {AvailabilityShippingAvailability} - Holds status of shipping availability.
 * @property {AvailabilityDcrAvailability} - Holds status of DCR/DCO availability.
 */
export type AccessPointInformationAvailability = z.infer<typeof accessPointInformationAvailability>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const accessPointInformationAvailabilityResponse = z
  .object({
    ShippingAvailability: availabilityShippingAvailabilityResponse.optional(),
    DCRAvailability: availabilityDcrAvailabilityResponse.optional(),
  })
  .transform((data) => ({
    shippingAvailability: data['ShippingAvailability'],
    dcrAvailability: data['DCRAvailability'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const accessPointInformationAvailabilityRequest = z
  .object({
    shippingAvailability: availabilityShippingAvailabilityRequest.nullish(),
    dcrAvailability: availabilityDcrAvailabilityRequest.nullish(),
  })
  .transform((data) => ({
    ShippingAvailability: data['shippingAvailability'],
    DCRAvailability: data['dcrAvailability'],
  }));