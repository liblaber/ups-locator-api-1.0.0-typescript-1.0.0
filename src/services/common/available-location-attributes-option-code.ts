// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  availableLocationAttributesOptionCodeTransportationPickUpSchedule,
  availableLocationAttributesOptionCodeTransportationPickUpScheduleRequest,
  availableLocationAttributesOptionCodeTransportationPickUpScheduleResponse,
} from './available-location-attributes-option-code-transportation-pick-up-schedule';

/**
 * The shape of the model inside the application code - what the users use
 */
export const availableLocationAttributesOptionCode: any = z.lazy(() => {
  return z.object({
    code: z.string(),
    description: z.string(),
    name: z.string().optional(),
    category: z.string().optional(),
    transportationPickUpSchedule: availableLocationAttributesOptionCodeTransportationPickUpSchedule.optional(),
  });
});

/**
 * Option code is a container that contains the information of a particular retail location type or additional service or program type that is available currently. One or more of this container will be returned to give all the available codes for Retail Type or Additional Services or Program Type.
 * @typedef  {AvailableLocationAttributesOptionCode} availableLocationAttributesOptionCode - Option code is a container that contains the information of a particular retail location type or additional service or program type that is available currently. One or more of this container will be returned to give all the available codes for Retail Type or Additional Services or Program Type. - Option code is a container that contains the information of a particular retail location type or additional service or program type that is available currently. One or more of this container will be returned to give all the available codes for Retail Type or Additional Services or Program Type.
 * @property {string} - The valid list of codes and description for Retail Locations or Additional Services or Pro-gram Types that are currently available in the database. This can be obtained by a separate type of request (Request Option 8, 16, 24, 32, 40, 48 and 56).
 * @property {string} - Description is only applicable for Program types and Additional Services. It is not provided with Location detail. It is only provided when the request is for All available additional ser-vices or all available Program types. Text will be displayed in the locale requested.
 * @property {string} - Name will indicate the name of Location/Retail Location or Additional Services or Program Types depending on the option code. Text will be displayed in the locale requested.
 * @property {string} - N/A
 * @property {AvailableLocationAttributesOptionCodeTransportationPickUpSchedule} - Container to hold information regarding pickup details for each day of the week.
 */
export type AvailableLocationAttributesOptionCode = z.infer<typeof availableLocationAttributesOptionCode>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const availableLocationAttributesOptionCodeResponse: any = z.lazy(() => {
  return z
    .object({
      Code: z.string(),
      Description: z.string(),
      Name: z.string().optional(),
      Category: z.string().optional(),
      TransportationPickUpSchedule:
        availableLocationAttributesOptionCodeTransportationPickUpScheduleResponse.optional(),
    })
    .transform((data) => ({
      code: data['Code'],
      description: data['Description'],
      name: data['Name'],
      category: data['Category'],
      transportationPickUpSchedule: data['TransportationPickUpSchedule'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const availableLocationAttributesOptionCodeRequest: any = z.lazy(() => {
  return z
    .object({
      code: z.string().nullish(),
      description: z.string().nullish(),
      name: z.string().nullish(),
      category: z.string().nullish(),
      transportationPickUpSchedule: availableLocationAttributesOptionCodeTransportationPickUpScheduleRequest.nullish(),
    })
    .transform((data) => ({
      Code: data['code'],
      Description: data['description'],
      Name: data['name'],
      Category: data['category'],
      TransportationPickUpSchedule: data['transportationPickUpSchedule'],
    }));
});
