// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  freightWillCallSearchFacilityAddress,
  freightWillCallSearchFacilityAddressRequest,
  freightWillCallSearchFacilityAddressResponse,
} from './freight-will-call-search-facility-address';

/**
 * The shape of the model inside the application code - what the users use
 */
export const locationSearchCriteriaFreightWillCallSearch = z.object({
  freightWillCallRequestType: z.string().min(1).max(1),
  facilityAddress: z.array(freightWillCallSearchFacilityAddress),
  originOrDestination: z.string().min(2).max(2),
  formatPostalCode: z.string().min(2).max(3),
  dayOfWeekCode: z.string().min(1).max(1).optional(),
});

/**
 * Freight Will Call Search Container. Required if SearchOption is '05-Freight Will Call Search'
 * @typedef  {LocationSearchCriteriaFreightWillCallSearch} locationSearchCriteriaFreightWillCallSearch - Freight Will Call Search Container. Required if SearchOption is '05-Freight Will Call Search' - Freight Will Call Search Container. Required if SearchOption is '05-Freight Will Call Search'
 * @property {string} - Valid values are: 
1 - Postal Code
2 - Delivery SLIC
3 - Delivery City/State.
1: Freight Will Call Search based on Postal Code, this search is valid for Postal code countries. 2: Freight Will Call Search based on SLIC. 3: Freight Will Call Search based on City and/or State. This Search is valid for non-postal code Countries
 * @property {FreightWillCallSearchFacilityAddress[]} 
 * @property {string} - OriginOrDestination is required for FreightWillCallRequestType 1 and type 3 . Valid values:
01-Origin facilities
02-Destination facilities.
 * @property {string} - FormatPostalCode would be required in the request when FreightWillCallRequestType is 1. Valid values are:
NFR-No format requested
FR-format requested
FS-format and search
NVR-No validation requested.
 * @property {string} - Day Of week Code. Valid Values are 1 to 7. 
1-Sunday
2-Monday 
3-Tuesday 
4-Wednesday
5-Thursday
6-Friday
7-Saturday.
 */
export type LocationSearchCriteriaFreightWillCallSearch = z.infer<typeof locationSearchCriteriaFreightWillCallSearch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const locationSearchCriteriaFreightWillCallSearchResponse = z
  .object({
    FreightWillCallRequestType: z.string().min(1).max(1),
    FacilityAddress: z.array(freightWillCallSearchFacilityAddressResponse),
    OriginOrDestination: z.string().min(2).max(2),
    FormatPostalCode: z.string().min(2).max(3),
    DayOfWeekCode: z.string().min(1).max(1).optional(),
  })
  .transform((data) => ({
    freightWillCallRequestType: data['FreightWillCallRequestType'],
    facilityAddress: data['FacilityAddress'],
    originOrDestination: data['OriginOrDestination'],
    formatPostalCode: data['FormatPostalCode'],
    dayOfWeekCode: data['DayOfWeekCode'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const locationSearchCriteriaFreightWillCallSearchRequest = z
  .object({
    freightWillCallRequestType: z.string().nullish(),
    facilityAddress: z.array(freightWillCallSearchFacilityAddressRequest).nullish(),
    originOrDestination: z.string().nullish(),
    formatPostalCode: z.string().nullish(),
    dayOfWeekCode: z.string().nullish(),
  })
  .transform((data) => ({
    FreightWillCallRequestType: data['freightWillCallRequestType'],
    FacilityAddress: data['facilityAddress'],
    OriginOrDestination: data['originOrDestination'],
    FormatPostalCode: data['formatPostalCode'],
    DayOfWeekCode: data['dayOfWeekCode'],
  }));
