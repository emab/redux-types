import { Selector } from "react-redux";
import { AvailabilityState } from "./reducers";
import { State } from "../store";
import { createSelector } from "reselect";

const availabilitySelector: Selector<State, AvailabilityState> = (state) =>
  state.availability;

export const currentAvailabilitySelector = createSelector(
  availabilitySelector,
  (state) => state.currentAvailability
);

export const timeLeftSelector = createSelector(availabilitySelector, (state) =>
  !!state.timeLeft ? state.timeLeft : new Date()
);
