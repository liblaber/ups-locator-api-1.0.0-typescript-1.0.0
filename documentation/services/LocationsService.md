# LocationsService

A list of all methods in the `LocationsService` service. Click on the method name to view detailed information about that method.

| Methods             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Locator](#locator) | The Locator API allows you to find UPS locations - such as drop-off points, retail locations, and UPS access points (third-party retail locations that offer UPS package drop-off, or delivery services). The API provides capabilities to search by location, services offered, program types, and related criteria. You can also retrieve hours of operation, location details, and additional UPS services offered at specific locations. |

## Locator

The Locator API allows you to find UPS locations - such as drop-off points, retail locations, and UPS access points (third-party retail locations that offer UPS package drop-off, or delivery services). The API provides capabilities to search by location, services offered, program types, and related criteria. You can also retrieve hours of operation, location details, and additional UPS services offered at specific locations.

- HTTP Method: `POST`
- Endpoint: `/locations/{version}/search/availabilities/{reqOption}`

**Parameters**

| Name           | Type                                                        | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :------------- | :---------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body           | [LocatorRequestWrapper](../models/LocatorRequestWrapper.md) | ✅       | The request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| version        | string                                                      | ✅       | Version of API Valid values: - v2                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| reqOption      | string                                                      | ✅       | Indicates the type of request. Valid values: 1-Locations (Drop Locations and Will call locations) 8-All available Additional Services 16-All available Program Types 24-All available Additional Services and Program types 32-All available Retail Locations 40-All available Retail Locations and Additional Services 48-All available Retail Locations and Program Types 56-All available Retail Locations, Additional Services and Program Types 64-Search for UPS Access Point Locations. |
| locale         | string                                                      | ❌       | Locale of request                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| transId        | string                                                      | ❌       | An identifier unique to the request. Length 32                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| transactionSrc | string                                                      | ❌       | An identifier of the client/source application that is making the request.Length 512                                                                                                                                                                                                                                                                                                                                                                                                           |

**Return Type**

`LocatorResponseWrapper`

**Example Usage Code Snippet**

```typescript
import { LocatorRequest, LocatorRequestWrapper, UpsLocator } from 'ups_locator';

(async () => {
  const upsLocator = new UpsLocator({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
  });

  const requestTransactionReference: RequestTransactionReference = {
    customerContext: 'CustomerContext',
  };

  const locatorRequestRequest1: LocatorRequestRequest1 = {
    transactionReference: requestTransactionReference,
    requestAction: 'qui veniamcom',
    requestOption: 'ipsu',
  };

  const originAddressGeocode: OriginAddressGeocode = {
    latitude: 'dolor laborum m',
    longitude: 'aute enim adnis',
  };

  const originAddressAddressKeyFormat: OriginAddressAddressKeyFormat = {
    consigneeName: 'proident dolor deserunt',
    addressLine: 'velit',
    addressLine2: 'volup',
    addressLine3: 'est',
    politicalDivision3: 'elit ut eiusmod consectetur',
    politicalDivision2: 'irure ut sunt conse',
    politicalDivision1: 'officia incididunt et ea ve',
    postcodePrimaryLow: 'cu',
    postcodeExtendedLow: 'e',
    countryCode: 'vo',
    singleLineAddress: 'SingleLineAddress',
  };

  const locatorRequestOriginAddress: LocatorRequestOriginAddress = {
    geocode: originAddressGeocode,
    addressKeyFormat: originAddressAddressKeyFormat,
    maximumListSize: 'U',
  };

  const locatorRequestTranslate: LocatorRequestTranslate = {
    locale: 'nostr',
  };

  const locatorRequestUnitOfMeasurement: LocatorRequestUnitOfMeasurement = {
    code: 'Code',
  };

  const searchOptionOptionType: SearchOptionOptionType = {
    code: 'mo',
  };

  const searchOptionOptionCode: SearchOptionOptionCode = {
    code: 'paria',
  };

  const searchOptionRelation: SearchOptionRelation = {
    code: 'no',
  };

  const locationSearchCriteriaSearchOption: LocationSearchCriteriaSearchOption = {
    optionType: searchOptionOptionType,
    optionCode: [searchOptionOptionCode],
    relation: searchOptionRelation,
  };

  const serviceSearchServiceCode: ServiceSearchServiceCode = {
    code: 'ex',
  };

  const serviceSearchServiceOptionCode: ServiceSearchServiceOptionCode = {
    code: 'al',
  };

  const locationSearchCriteriaServiceSearch: LocationSearchCriteriaServiceSearch = {
    time: 'aliq',
    serviceCode: [serviceSearchServiceCode],
    serviceOptionCode: [serviceSearchServiceOptionCode],
  };

  const freightWillCallSearchFacilityAddress: FreightWillCallSearchFacilityAddress = {
    slic: 'irure',
    addressLine: ['AddressLine'],
    city: 'quis ex est',
    postalCodePrimaryLow: 'est',
    postalCodeExtendedLow: 'exercit',
    state: 'ipsum esse veniam Lorem dolor',
    countryCode: 'ad',
  };

  const locationSearchCriteriaFreightWillCallSearch: LocationSearchCriteriaFreightWillCallSearch = {
    freightWillCallRequestType: 'c',
    facilityAddress: [freightWillCallSearchFacilityAddress],
    originOrDestination: 'cu',
    formatPostalCode: 'qu',
    dayOfWeekCode: 'u',
  };

  const includeCriteriaMerchantAccountNumberList: IncludeCriteriaMerchantAccountNumberList = {
    merchantAccountNumber: ['ullamco'],
  };

  const includeCriteriaSearchFilter: IncludeCriteriaSearchFilter = {
    dcrIndicator: 'DCRIndicator',
    shippingAvailabilityIndicator: 'ShippingAvailabilityIndicator',
    shipperPreparationDelay: 'c',
    clickAndCollectSortWithDistance: 'sin',
  };

  const serviceOfferingListServiceOffering: ServiceOfferingListServiceOffering = {
    code: 'ips',
    description: 'i',
  };

  const includeCriteriaServiceOfferingList: IncludeCriteriaServiceOfferingList = {
    serviceOffering: [serviceOfferingListServiceOffering],
  };

  const accessPointSearchIncludeCriteria: AccessPointSearchIncludeCriteria = {
    merchantAccountNumberList: includeCriteriaMerchantAccountNumberList,
    searchFilter: includeCriteriaSearchFilter,
    serviceOfferingList: includeCriteriaServiceOfferingList,
  };

  const postalCodeListPostalCode: PostalCodeListPostalCode = {
    primaryPostalCode: 'Duis',
    secondaryPostalCode: 'd',
  };

  const excludeFromResultPostalCodeList: ExcludeFromResultPostalCodeList = {
    postalCode: [postalCodeListPostalCode],
  };

  const accessPointSearchExcludeFromResult: AccessPointSearchExcludeFromResult = {
    businessClassificationCode: ['in '],
    businessName: 'a',
    radius: 'd',
    postalCodeList: excludeFromResultPostalCodeList,
  };

  const locationSearchCriteriaAccessPointSearch: LocationSearchCriteriaAccessPointSearch = {
    publicAccessPointId: 's',
    accessPointStatus: 'ex',
    accountNumber: 'ipsum L',
    includeCriteria: accessPointSearchIncludeCriteria,
    excludeFromResult: accessPointSearchExcludeFromResult,
    exactMatchIndicator: 'ExactMatchIndicator',
    existIndicator: 'ExistIndicator',
  };

  const locationSearchCriteriaOpenTimeCriteria: LocationSearchCriteriaOpenTimeCriteria = {
    dayOfWeekCode: 'a',
    fromTime: 'ulla',
    toTime: 'in p',
  };

  const locatorRequestLocationSearchCriteria: LocatorRequestLocationSearchCriteria = {
    searchOption: [locationSearchCriteriaSearchOption],
    maximumListSize: 'cu',
    searchRadius: 'do',
    serviceSearch: locationSearchCriteriaServiceSearch,
    freightWillCallSearch: locationSearchCriteriaFreightWillCallSearch,
    accessPointSearch: locationSearchCriteriaAccessPointSearch,
    openTimeCriteria: locationSearchCriteriaOpenTimeCriteria,
    brexitFilter: 'cupida',
  };

  const locatorRequestSortCriteria: LocatorRequestSortCriteria = {
    sortType: 'cu',
  };

  const locatorRequestServiceGeoUnit: LocatorRequestServiceGeoUnit = {
    serviceCode: 'sed',
    geoPoliticalUnit: 'euc',
  };

  const locatorRequest: LocatorRequest = {
    request: locatorRequestRequest1,
    originAddress: locatorRequestOriginAddress,
    translate: locatorRequestTranslate,
    unitOfMeasurement: locatorRequestUnitOfMeasurement,
    locationId: ['LocationID'],
    locationSearchCriteria: locatorRequestLocationSearchCriteria,
    sortCriteria: locatorRequestSortCriteria,
    allowAllConfidenceLevels: 'AllowAllConfidenceLevels',
    searchOptionCode: 'de',
    serviceGeoUnit: locatorRequestServiceGeoUnit,
    freightIndicator: 'FreightIndicator',
  };

  const input: LocatorRequestWrapper = {
    locatorRequest: locatorRequest,
  };

  const { data } = await upsLocator.locations.locator('v2', 'labo', input, {
    locale: 'en_US',
    transId: 'transId',
    transactionSrc: 'testing',
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
