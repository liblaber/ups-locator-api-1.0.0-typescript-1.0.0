# OptionCodeTransportationPickUpSchedule

TransportationPickUpSchedule container contains details of Latest Drop Off time/Pickup Time for the transportation services (Ground/Air/Standard/Express/International) of the location.

**Properties**

| Name   | Type                                 | Required | Description                                                                                                                                                                                                                                                                                                                           |
| :----- | :----------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| pickUp | TransportationPickUpSchedulePickUp[] | ✅       | PickUp container contains details of day of week and corresponding pickup times for that service. **NOTE:** For versions >= v2, this element will always be returned as an array. For requests using version = v1, this element will be returned as an array if there is more than one object and a single object if there is only 1. |

<!-- This file was generated by liblab | https://liblab.com/ -->