// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const privateNetworkListPrivateNetwork: any = z.lazy(() => {
  return z.object({
    networkId: z.string().min(1).max(10),
    networkDescription: z.string().min(1).max(50),
  });
});

/**
 *
 * @typedef  {PrivateNetworkListPrivateNetwork} privateNetworkListPrivateNetwork
 * @property {string} - Value of networkID.
 * @property {string} - Description of the Network.
 */
export type PrivateNetworkListPrivateNetwork = z.infer<typeof privateNetworkListPrivateNetwork>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const privateNetworkListPrivateNetworkResponse: any = z.lazy(() => {
  return z
    .object({
      NetworkID: z.string().min(1).max(10),
      NetworkDescription: z.string().min(1).max(50),
    })
    .transform((data) => ({
      networkId: data['NetworkID'],
      networkDescription: data['NetworkDescription'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const privateNetworkListPrivateNetworkRequest: any = z.lazy(() => {
  return z.object({ networkId: z.string().nullish(), networkDescription: z.string().nullish() }).transform((data) => ({
    NetworkID: data['networkId'],
    NetworkDescription: data['networkDescription'],
  }));
});
