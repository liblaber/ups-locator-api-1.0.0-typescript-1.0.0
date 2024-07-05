# SearchResultsAvailableLocationAttributes

**Properties**

| Name       | Type                                  | Required | Description                                                                                                                                                                                                                                                                                             |
| :--------- | :------------------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| optionType | AvailableLocationAttributesOptionType | ✅       | OptionType is a container that indicates the type of the location attribute that are available. For example if the Option Type is RetailLocation the list of all available retail locations will be returned in 1 or many corresponding OptionCodes.                                                    |
| optionCode | AvailableLocationAttributesOptionCode | ✅       | Option code is a container that contains the information of a particular retail location type or additional service or program type that is available currently. One or more of this container will be returned to give all the available codes for Retail Type or Additional Services or Program Type. |

<!-- This file was generated by liblab | https://liblab.com/ -->