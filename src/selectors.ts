import { Selector } from "react-redux";
import { AvailabilityState } from "./reducers";
import { Availability } from "./types";

export const currentAvailabilitySelector: Selector<
  AvailabilityState,
  Availability
> = (state) => state.currentAvailability;

export const timeLeftSelector: Selector<AvailabilityState, Date> = (state) =>
  !!state.timeLeft ? state.timeLeft : new Date();
