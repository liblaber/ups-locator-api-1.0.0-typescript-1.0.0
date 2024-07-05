// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  availableLocationAttributesOptionType,
  availableLocationAttributesOptionTypeRequest,
  availableLocationAttributesOptionTypeResponse,
} from './available-location-attributes-option-type';
import {
  availableLocationAttributesOptionCode,
  availableLocationAttributesOptionCodeRequest,
  availableLocationAttributesOptionCodeResponse,
} from './available-location-attributes-option-code';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchResultsAvailableLocationAttributes = z.object({
  optionType: availableLocationAttributesOptionType,
  optionCode: availableLocationAttributesOptionCode,
});

/**
 *
 * @typedef  {SearchResultsAvailableLocationAttributes} searchResultsAvailableLocationAttributes
 * @property {AvailableLocationAttributesOptionType} - OptionType is a container that indicates the type of the location attribute that are available. For example if the Option Type is RetailLocation the list of all available retail locations will be returned in 1 or many corresponding OptionCodes.
 * @property {AvailableLocationAttributesOptionCode} - Option code is a container that contains the information of a particular retail location type or additional service or program type that is available currently. One or more of this container will be returned to give all the available codes for Retail Type or Additional Services or Program Type.
 */
export type SearchResultsAvailableLocationAttributes = z.infer<typeof searchResultsAvailableLocationAttributes>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchResultsAvailableLocationAttributesResponse = z
  .object({
    OptionType: availableLocationAttributesOptionTypeResponse,
    OptionCode: availableLocationAttributesOptionCodeResponse,
  })
  .transform((data) => ({
    optionType: data['OptionType'],
    optionCode: data['OptionCode'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchResultsAvailableLocationAttributesRequest = z
  .object({
    optionType: availableLocationAttributesOptionTypeRequest.nullish(),
    optionCode: availableLocationAttributesOptionCodeRequest.nullish(),
  })
  .transform((data) => ({
    OptionType: data['optionType'],
    OptionCode: data['optionCode'],
  }));
