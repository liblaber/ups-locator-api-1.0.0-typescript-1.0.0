// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  businessClassificationListBusinessClassification,
  businessClassificationListBusinessClassificationRequest,
  businessClassificationListBusinessClassificationResponse,
} from './business-classification-list-business-classification';

/**
 * The shape of the model inside the application code - what the users use
 */
export const accessPointInformationBusinessClassificationList: any = z.lazy(() => {
  return z.object({
    businessClassification: z.array(businessClassificationListBusinessClassification),
  });
});

/**
 * Container to hold list for business classification.
 * @typedef  {AccessPointInformationBusinessClassificationList} accessPointInformationBusinessClassificationList - Container to hold list for business classification. - Container to hold list for business classification.
 * @property {BusinessClassificationListBusinessClassification[]} - Container to hold Business classification of UPS access point.

**NOTE:** For versions >= v2, this element will always be returned as an array. For requests using version = v1, this element will be returned as an array if there is more than one object and a single object if there is only 1.

 */
export type AccessPointInformationBusinessClassificationList = z.infer<
  typeof accessPointInformationBusinessClassificationList
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const accessPointInformationBusinessClassificationListResponse: any = z.lazy(() => {
  return z
    .object({
      BusinessClassification: z.array(businessClassificationListBusinessClassificationResponse),
    })
    .transform((data) => ({
      businessClassification: data['BusinessClassification'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const accessPointInformationBusinessClassificationListRequest: any = z.lazy(() => {
  return z
    .object({ businessClassification: z.array(businessClassificationListBusinessClassificationRequest).nullish() })
    .transform((data) => ({
      BusinessClassification: data['businessClassification'],
    }));
});
