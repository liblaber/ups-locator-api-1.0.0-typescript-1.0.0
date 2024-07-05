// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  requestTransactionReference,
  requestTransactionReferenceRequest,
  requestTransactionReferenceResponse,
} from './request-transaction-reference';

/**
 * The shape of the model inside the application code - what the users use
 */
export const locatorRequestRequest1 = z.object({
  transactionReference: requestTransactionReference.optional(),
  requestAction: z.string().min(13).max(13),
  requestOption: z.string().min(1).max(4),
});

/**
 * N/A
 * @typedef  {LocatorRequestRequest1} locatorRequestRequest1 - N/A - N/A
 * @property {RequestTransactionReference} - TransactionReference identifies transactions between client and server.
 * @property {string} - Indicates the action to be taken by the XML service. 
The only valid value is 'Locator'.
 * @property {string} - Indicates the type of request.
Valid values:
1-Locations (Drop Locations and Will call locations)
8-All available Additional Services
16-All available Program Types
24-All available Additional Services and Program types
32-All available Retail Locations
40-All available Retail Locations and Additional Services 
48-All available Retail Locations and Program Types 
56-All available Retail Locations, Additional Services and Program Types 
64-Search for UPS Access Point Locations.
 */
export type LocatorRequestRequest1 = z.infer<typeof locatorRequestRequest1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const locatorRequestRequest1Response = z
  .object({
    TransactionReference: requestTransactionReferenceResponse.optional(),
    RequestAction: z.string().min(13).max(13),
    RequestOption: z.string().min(1).max(4),
  })
  .transform((data) => ({
    transactionReference: data['TransactionReference'],
    requestAction: data['RequestAction'],
    requestOption: data['RequestOption'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const locatorRequestRequest1Request = z
  .object({
    transactionReference: requestTransactionReferenceRequest.nullish(),
    requestAction: z.string().nullish(),
    requestOption: z.string().nullish(),
  })
  .transform((data) => ({
    TransactionReference: data['transactionReference'],
    RequestAction: data['requestAction'],
    RequestOption: data['requestOption'],
  }));