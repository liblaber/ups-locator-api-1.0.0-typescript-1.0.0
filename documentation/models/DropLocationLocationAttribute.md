# DropLocationLocationAttribute

LocationAttribute is a container that contains the information about the location's Location Type, Retail Location Type, Additional Services, or Program Type.

**Properties**

| Name       | Type                          | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :--------- | :---------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| optionType | LocationAttributeOptionType   | ✅       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| optionCode | LocationAttributeOptionCode[] | ✅       | Option code is a container that contains the information of a particular type of Location or retail location or additional service or program type that the drop location contains. If the OptionType is Location or Retail Location Type there will be one code since each location has only one location type or retail location type. If the Option type is additional services or program types there can be one or more option codes. **NOTE:** For versions >= v2, this element will always be returned as an array. For requests using version = v1, this element will be returned as an array if there is more than one object and a single object if there is only 1. |

<!-- This file was generated by liblab | https://liblab.com/ -->