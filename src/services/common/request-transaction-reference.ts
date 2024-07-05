// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const requestTransactionReference = z.object({
  customerContext: z.string().optional(),
});

/**
 * TransactionReference identifies transactions between client and server.
 * @typedef  {RequestTransactionReference} requestTransactionReference - TransactionReference identifies transactions between client and server. - TransactionReference identifies transactions between client and server.
 * @property {string} - The client uses CustomerContext to synchronize request/response pairs. The client establishes CustomerContext, which can contain any information client want, as long as it is valid XML; it is echoed back by the server
 */
export type RequestTransactionReference = z.infer<typeof requestTransactionReference>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const requestTransactionReferenceResponse = z
  .object({
    CustomerContext: z.string().optional(),
  })
  .transform((data) => ({
    customerContext: data['CustomerContext'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const requestTransactionReferenceRequest = z
  .object({ customerContext: z.string().nullish() })
  .transform((data) => ({
    CustomerContext: data['customerContext'],
  }));
