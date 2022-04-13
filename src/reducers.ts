import { Reducer } from "redux";
import { setCurrentAvailability, setTimeLeft } from "./actions";
import { SecondaryReducer } from "./actionUtils";
import { Availability } from "./types";

export type AvailabilityState = {
  currentAvailability: Availability;
  timeLeft?: Date;
};

const initialState: AvailabilityState = {
  currentAvailability: Availability.UNAVAILABLE,
};

const timeLeftReducer: SecondaryReducer<
  AvailabilityState,
  typeof setTimeLeft
> = (state, action) => ({
  ...state,
  timeLeft: action.timeLeft,
});

export const reducer: Reducer<AvailabilityState> = (
  state = initialState,
  action
) => {
  if (setCurrentAvailability.match(action)) {
    return {
      ...state,
      currentAvailability: action.availability,
    };
  }

  if (setTimeLeft.match(action)) {
    return timeLeftReducer(state, action);
  }

  return state;
};
