// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const responseTransactionReference: any = z.lazy(() => {
  return z.object({
    customerContext: z.string().max(512).optional(),
    xpciVersion: z.string().min(6).max(6).optional(),
  });
});

/**
 * Container for customer provided data and the XPCI Version.
 * @typedef  {ResponseTransactionReference} responseTransactionReference - Container for customer provided data and the XPCI Version. - Container for customer provided data and the XPCI Version.
 * @property {string} - Customer provided data. If this data is present in the request, it is echoed back to the customer.
 * @property {string} - Identifies the version of the message. 
Current version is 1.0014
 */
export type ResponseTransactionReference = z.infer<typeof responseTransactionReference>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const responseTransactionReferenceResponse: any = z.lazy(() => {
  return z
    .object({
      CustomerContext: z.string().max(512).optional(),
      XpciVersion: z.string().min(6).max(6).optional(),
    })
    .transform((data) => ({
      customerContext: data['CustomerContext'],
      xpciVersion: data['XpciVersion'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const responseTransactionReferenceRequest: any = z.lazy(() => {
  return z.object({ customerContext: z.string().nullish(), xpciVersion: z.string().nullish() }).transform((data) => ({
    CustomerContext: data['customerContext'],
    XpciVersion: data['xpciVersion'],
  }));
});
