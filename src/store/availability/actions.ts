import { createPrefix, withMatcher } from "../../utils/actionUtils";
import { Availability } from "./types";

const ACTION_PREFIX = "MOCK_ACTION_PREFIX_";

const withPrefix = createPrefix(ACTION_PREFIX);

export const setCurrentAvailabilityAction = withMatcher(
  (availability: Availability) => ({
    type: withPrefix("SET_CURRENT_AVAILABILITY"),
    availability,
  })
);

export const setTimeLeftAction = withMatcher((timeLeft: Date) => ({
  type: withPrefix("SET_TIME_LEFT"),
  timeLeft,
}));
