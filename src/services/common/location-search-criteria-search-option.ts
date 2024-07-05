// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  searchOptionOptionType,
  searchOptionOptionTypeRequest,
  searchOptionOptionTypeResponse,
} from './search-option-option-type';
import {
  searchOptionOptionCode,
  searchOptionOptionCodeRequest,
  searchOptionOptionCodeResponse,
} from './search-option-option-code';
import {
  searchOptionRelation,
  searchOptionRelationRequest,
  searchOptionRelationResponse,
} from './search-option-relation';

/**
 * The shape of the model inside the application code - what the users use
 */
export const locationSearchCriteriaSearchOption = z.object({
  optionType: searchOptionOptionType,
  optionCode: z.array(searchOptionOptionCode),
  relation: searchOptionRelation.optional(),
});

/**
 * SearchOption contains the information that forms the basis of the location search, It contains the criteria for search by Locations, Retail Locations, Additional Services, or Program Types.

There should be one container for each type of search the user may wish to do. The user can specify either search by Locations or Retail Locations, but not both.

If this container is missing, the default search would be for The UPS Store, UPS Center, UPS Drop Box, and Authorized Shipping Outlet location types.

 * @typedef  {LocationSearchCriteriaSearchOption} locationSearchCriteriaSearchOption - SearchOption contains the information that forms the basis of the location search, It contains the criteria for search by Locations, Retail Locations, Additional Services, or Program Types.

There should be one container for each type of search the user may wish to do. The user can specify either search by Locations or Retail Locations, but not both.

If this container is missing, the default search would be for The UPS Store, UPS Center, UPS Drop Box, and Authorized Shipping Outlet location types.
 - SearchOption contains the information that forms the basis of the location search, It contains the criteria for search by Locations, Retail Locations, Additional Services, or Program Types.

There should be one container for each type of search the user may wish to do. The user can specify either search by Locations or Retail Locations, but not both.

If this container is missing, the default search would be for The UPS Store, UPS Center, UPS Drop Box, and Authorized Shipping Outlet location types.

 * @property {SearchOptionOptionType} - OptionType is a container that indicates the type of search for locations. There are 5 types of search. They are search by: Location, Retail Location, Additional Services, Program Type, and a Service Level Option. 
If search criteria by Location or Retail Location is not provided the default search of The UPS Store, UPS Center, UPS Drop Box, and Authorized Shipping Outlet location types will be performed.
 * @property {SearchOptionOptionCode[]} 
 * @property {SearchOptionRelation} - The relation container will contain the relation parameter (And/Or) that has to be used among multiple option codes in the location search. 

This is only applicable to option type Additional Services and Program Types. If this container is not present for Additional Services and Program Types, the default relation of And is used.
 */
export type LocationSearchCriteriaSearchOption = z.infer<typeof locationSearchCriteriaSearchOption>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const locationSearchCriteriaSearchOptionResponse = z
  .object({
    OptionType: searchOptionOptionTypeResponse,
    OptionCode: z.array(searchOptionOptionCodeResponse),
    Relation: searchOptionRelationResponse.optional(),
  })
  .transform((data) => ({
    optionType: data['OptionType'],
    optionCode: data['OptionCode'],
    relation: data['Relation'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const locationSearchCriteriaSearchOptionRequest = z
  .object({
    optionType: searchOptionOptionTypeRequest.nullish(),
    optionCode: z.array(searchOptionOptionCodeRequest).nullish(),
    relation: searchOptionRelationRequest.nullish(),
  })
  .transform((data) => ({
    OptionType: data['optionType'],
    OptionCode: data['optionCode'],
    Relation: data['relation'],
  }));