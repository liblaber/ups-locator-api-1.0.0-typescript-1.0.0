// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  accessPointInformationBusinessClassificationList,
  accessPointInformationBusinessClassificationListRequest,
  accessPointInformationBusinessClassificationListResponse,
} from './access-point-information-business-classification-list';
import {
  accessPointInformationAccessPointStatus,
  accessPointInformationAccessPointStatusRequest,
  accessPointInformationAccessPointStatusResponse,
} from './access-point-information-access-point-status';
import {
  accessPointInformationPrivateNetworkList,
  accessPointInformationPrivateNetworkListRequest,
  accessPointInformationPrivateNetworkListResponse,
} from './access-point-information-private-network-list';
import {
  accessPointInformationAvailability,
  accessPointInformationAvailabilityRequest,
  accessPointInformationAvailabilityResponse,
} from './access-point-information-availability';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dropLocationAccessPointInformation: any = z.lazy(() => {
  return z.object({
    publicAccessPointId: z.string().min(1).max(15).optional(),
    imageUrl: z.string().min(1).max(255).optional(),
    businessClassificationList: accessPointInformationBusinessClassificationList.optional(),
    accessPointStatus: accessPointInformationAccessPointStatus.optional(),
    facilitySlic: z.string().min(1).max(10).optional(),
    privateNetworkList: accessPointInformationPrivateNetworkList.optional(),
    availability: accessPointInformationAvailability.optional(),
  });
});

/**
 * Container for UPS Access Point specific parameters.
 * @typedef  {DropLocationAccessPointInformation} dropLocationAccessPointInformation - Container for UPS Access Point specific parameters. - Container for UPS Access Point specific parameters.
 * @property {string} - The Public Access Point ID associated with UPS access point.
 * @property {string} - Image URL associated with UPS access point.
 * @property {AccessPointInformationBusinessClassificationList} - Container to hold list for business classification.
 * @property {AccessPointInformationAccessPointStatus} - Container for UPS AccessPoint status.
 * @property {string} - Holds the value of facility SLIC of Access Point Location. Not implemented currently. For future use.
 * @property {AccessPointInformationPrivateNetworkList} - Container to hold the list of private networks.
 * @property {AccessPointInformationAvailability} - Container to hold the status of shipping or DRC/DCO availability of a UPS Access Point.
 */
export type DropLocationAccessPointInformation = z.infer<typeof dropLocationAccessPointInformation>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dropLocationAccessPointInformationResponse: any = z.lazy(() => {
  return z
    .object({
      PublicAccessPointID: z.string().min(1).max(15).optional(),
      ImageURL: z.string().min(1).max(255).optional(),
      BusinessClassificationList: accessPointInformationBusinessClassificationListResponse.optional(),
      AccessPointStatus: accessPointInformationAccessPointStatusResponse.optional(),
      FacilitySLIC: z.string().min(1).max(10).optional(),
      PrivateNetworkList: accessPointInformationPrivateNetworkListResponse.optional(),
      Availability: accessPointInformationAvailabilityResponse.optional(),
    })
    .transform((data) => ({
      publicAccessPointId: data['PublicAccessPointID'],
      imageUrl: data['ImageURL'],
      businessClassificationList: data['BusinessClassificationList'],
      accessPointStatus: data['AccessPointStatus'],
      facilitySlic: data['FacilitySLIC'],
      privateNetworkList: data['PrivateNetworkList'],
      availability: data['Availability'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dropLocationAccessPointInformationRequest: any = z.lazy(() => {
  return z
    .object({
      publicAccessPointId: z.string().nullish(),
      imageUrl: z.string().nullish(),
      businessClassificationList: accessPointInformationBusinessClassificationListRequest.nullish(),
      accessPointStatus: accessPointInformationAccessPointStatusRequest.nullish(),
      facilitySlic: z.string().nullish(),
      privateNetworkList: accessPointInformationPrivateNetworkListRequest.nullish(),
      availability: accessPointInformationAvailabilityRequest.nullish(),
    })
    .transform((data) => ({
      PublicAccessPointID: data['publicAccessPointId'],
      ImageURL: data['imageUrl'],
      BusinessClassificationList: data['businessClassificationList'],
      AccessPointStatus: data['accessPointStatus'],
      FacilitySLIC: data['facilitySlic'],
      PrivateNetworkList: data['privateNetworkList'],
      Availability: data['availability'],
    }));
});
