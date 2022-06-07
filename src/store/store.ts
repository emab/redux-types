import {
  availabilityReducer,
  AvailabilityState,
} from "./availability/reducers";
import { combineReducers } from "redux";
import { catReducer, CatState } from "./cats/reducers";

export type State = {
  availability: AvailabilityState;
  cat: CatState;
};

export const rootReducer = combineReducers<State>({
  availability: availabilityReducer,
  cat: catReducer,
});
