# StandardHoursDayOfWeek

**Properties**

| Name                 | Type   | Required | Description                                                                                                                                                                                           |
| :------------------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| day                  | string | ✅       | Day of week. Valid values: 1-Sunday 2-Monday 3-Tuesday 4-Wednesday 5-Thursday 6-Friday 7-Saturday.                                                                                                    |
| openHours            | string | ❌       | Open time of a location in military format (HHMM) e.g. 930, 1700, 1845 etc. with exception for midnight. For midnight the time will be returned as 0.                                                 |
| closeHours           | string | ❌       | Close time of a location in military format (HHMM) e.g. 930, 1700, 1845 etc. with exception for midnight. For midnight the time will be returned as 0.                                                |
| latestDropOffHours   | string | ❌       | LatestDropOffHours for Hour Type 50. Latest Drop Off time of a location in military format (HHMM) e.g. 930, 1700, 1845 etc. with exception for midnight. For midnight the time will be returned as 0. |
| prepHours            | string | ❌       | PrepHours for Hour Type 51. Prep Hours of a location in military format (HHMM) e.g. 930, 1700, 1845 etc. with exception for midnight. For midnight the time will be returned as 0.                    |
| closedIndicator      | string | ❌       | Presence absence Indicator. Indicator present means location is closed.                                                                                                                               |
| open24HoursIndicator | string | ❌       | Presence/ Absence Indicator. Presence denotes for the given day, if the location is open 24 hours. Absence denotes the location is not open for 24 hours on the given day.                            |

<!-- This file was generated by liblab | https://liblab.com/ -->