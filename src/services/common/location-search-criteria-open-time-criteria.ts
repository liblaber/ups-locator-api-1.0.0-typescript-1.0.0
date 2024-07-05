// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const locationSearchCriteriaOpenTimeCriteria = z.object({
  dayOfWeekCode: z.string().min(1).max(1).optional(),
  fromTime: z.string().min(4).max(4).optional(),
  toTime: z.string().min(4).max(4).optional(),
});

/**
 * Container to hold open times of the Location.
 * @typedef  {LocationSearchCriteriaOpenTimeCriteria} locationSearchCriteriaOpenTimeCriteria - Container to hold open times of the Location. - Container to hold open times of the Location.
 * @property {string} - Day Of week Code.
Valid values:
1-Sunday
2-Monday
3-Tuesday
4-Wednesday
5-Thursday
6-Friday
7-Saturday
 * @property {string} - From time. Time Format HHMM.
 * @property {string} - To Time. Time Format HHMM
 */
export type LocationSearchCriteriaOpenTimeCriteria = z.infer<typeof locationSearchCriteriaOpenTimeCriteria>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const locationSearchCriteriaOpenTimeCriteriaResponse = z
  .object({
    DayOfWeekCode: z.string().min(1).max(1).optional(),
    FromTime: z.string().min(4).max(4).optional(),
    ToTime: z.string().min(4).max(4).optional(),
  })
  .transform((data) => ({
    dayOfWeekCode: data['DayOfWeekCode'],
    fromTime: data['FromTime'],
    toTime: data['ToTime'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const locationSearchCriteriaOpenTimeCriteriaRequest = z
  .object({ dayOfWeekCode: z.string().nullish(), fromTime: z.string().nullish(), toTime: z.string().nullish() })
  .transform((data) => ({
    DayOfWeekCode: data['dayOfWeekCode'],
    FromTime: data['fromTime'],
    ToTime: data['toTime'],
  }));