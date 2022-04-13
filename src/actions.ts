import { createPrefix, withMatcher } from "./actionUtils";
import { Availability } from "./types";

const ACTION_PREFIX = "MOCK_ACTION_PREFIX_";

const withPrefix = createPrefix(ACTION_PREFIX);

export const setCurrentAvailability = withMatcher(
  (availability: Availability) => ({
    type: withPrefix("SET_CURRENT_AVAILABILITY"),
    availability,
  })
);

export const setTimeLeft = withMatcher((timeLeft: Date) => ({
  type: withPrefix("SET_TIME_LEFT"),
  timeLeft,
}));
