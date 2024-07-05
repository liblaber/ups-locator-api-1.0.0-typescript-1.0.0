// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  privateNetworkListPrivateNetwork,
  privateNetworkListPrivateNetworkRequest,
  privateNetworkListPrivateNetworkResponse,
} from './private-network-list-private-network';

/**
 * The shape of the model inside the application code - what the users use
 */
export const accessPointInformationPrivateNetworkList = z.object({
  privateNetwork: z.array(privateNetworkListPrivateNetwork),
});

/**
 * Container to hold the list of private networks.
 * @typedef  {AccessPointInformationPrivateNetworkList} accessPointInformationPrivateNetworkList - Container to hold the list of private networks. - Container to hold the list of private networks.
 * @property {PrivateNetworkListPrivateNetwork[]} - Container to hold the private network details.

**NOTE:** For versions >= v2, this element will always be returned as an array. For requests using version = v1, this element will be returned as an array if there is more than one object and a single object if there is only 1.

 */
export type AccessPointInformationPrivateNetworkList = z.infer<typeof accessPointInformationPrivateNetworkList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const accessPointInformationPrivateNetworkListResponse = z
  .object({
    PrivateNetwork: z.array(privateNetworkListPrivateNetworkResponse),
  })
  .transform((data) => ({
    privateNetwork: data['PrivateNetwork'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const accessPointInformationPrivateNetworkListRequest = z
  .object({ privateNetwork: z.array(privateNetworkListPrivateNetworkRequest).nullish() })
  .transform((data) => ({
    PrivateNetwork: data['privateNetwork'],
  }));
