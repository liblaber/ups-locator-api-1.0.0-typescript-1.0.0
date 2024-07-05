// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  serviceOfferingListServiceOffering,
  serviceOfferingListServiceOfferingRequest,
  serviceOfferingListServiceOfferingResponse,
} from './service-offering-list-service-offering';

/**
 * The shape of the model inside the application code - what the users use
 */
export const includeCriteriaServiceOfferingList = z.object({
  serviceOffering: z.array(serviceOfferingListServiceOffering),
});

/**
 * Container to hold end point service offering List for UPS Access point. Applicable only when a UPS Access Point candidate list is obtained in search by address or geocode search.
 * @typedef  {IncludeCriteriaServiceOfferingList} includeCriteriaServiceOfferingList - Container to hold end point service offering List for UPS Access point. Applicable only when a UPS Access Point candidate list is obtained in search by address or geocode search. - Container to hold end point service offering List for UPS Access point. Applicable only when a UPS Access Point candidate list is obtained in search by address or geocode search.
 * @property {ServiceOfferingListServiceOffering[]}
 */
export type IncludeCriteriaServiceOfferingList = z.infer<typeof includeCriteriaServiceOfferingList>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const includeCriteriaServiceOfferingListResponse = z
  .object({
    ServiceOffering: z.array(serviceOfferingListServiceOfferingResponse),
  })
  .transform((data) => ({
    serviceOffering: data['ServiceOffering'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const includeCriteriaServiceOfferingListRequest = z
  .object({ serviceOffering: z.array(serviceOfferingListServiceOfferingRequest).nullish() })
  .transform((data) => ({
    ServiceOffering: data['serviceOffering'],
  }));