// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  locationAttributeOptionType,
  locationAttributeOptionTypeRequest,
  locationAttributeOptionTypeResponse,
} from './location-attribute-option-type';
import {
  locationAttributeOptionCode,
  locationAttributeOptionCodeRequest,
  locationAttributeOptionCodeResponse,
} from './location-attribute-option-code';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dropLocationLocationAttribute: any = z.lazy(() => {
  return z.object({
    optionType: locationAttributeOptionType,
    optionCode: z.array(locationAttributeOptionCode),
  });
});

/**
 * LocationAttribute is a container that contains the information about the location's Location Type, Retail Location Type, Additional Services, or Program Type.
 * @typedef  {DropLocationLocationAttribute} dropLocationLocationAttribute - LocationAttribute is a container that contains the information about the location's Location Type, Retail Location Type, Additional Services, or Program Type. - LocationAttribute is a container that contains the information about the location's Location Type, Retail Location Type, Additional Services, or Program Type.
 * @property {LocationAttributeOptionType} 
 * @property {LocationAttributeOptionCode[]} - Option code is a container that contains the information of a particular type of Location or retail location or additional service or program type that the drop location contains.

If the OptionType is Location or Retail Location Type there will be one code since each location has only one location type or retail location type.

If the Option type is additional services or program types there can be one or more option codes.

**NOTE:** For versions >= v2, this element will always be returned as an array. For requests using version = v1, this element will be returned as an array if there is more than one object and a single object if there is only 1.

 */
export type DropLocationLocationAttribute = z.infer<typeof dropLocationLocationAttribute>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dropLocationLocationAttributeResponse: any = z.lazy(() => {
  return z
    .object({
      OptionType: locationAttributeOptionTypeResponse,
      OptionCode: z.array(locationAttributeOptionCodeResponse),
    })
    .transform((data) => ({
      optionType: data['OptionType'],
      optionCode: data['OptionCode'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dropLocationLocationAttributeRequest: any = z.lazy(() => {
  return z
    .object({
      optionType: locationAttributeOptionTypeRequest.nullish(),
      optionCode: z.array(locationAttributeOptionCodeRequest).nullish(),
    })
    .transform((data) => ({
      OptionType: data['optionType'],
      OptionCode: data['optionCode'],
    }));
});
