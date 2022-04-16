import { Reducer } from "redux";
import { setCurrentAvailabilityAction, setTimeLeftAction } from "./actions";
import { SecondaryReducer } from "../../utils/actionUtils";
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
  typeof setTimeLeftAction
> = (state, action) => ({
  ...state,
  timeLeft: action.timeLeft,
});

export const availabilityReducer: Reducer<AvailabilityState> = (
  state = initialState,
  action
) => {
  if (setCurrentAvailabilityAction.match(action)) {
    return {
      ...state,
      currentAvailability: action.availability,
    };
  }

  if (setTimeLeftAction.match(action)) {
    return timeLeftReducer(state, action);
  }

  return state;
};
