import { CatState } from "./reducers";
import { State } from "../store";
import { Selector } from "react-redux";
import { createSelector } from "reselect";

const catSelector: Selector<State, CatState> = (state) => state.cat;

export const catFactSelector = createSelector(
  catSelector,
  (state) => state.fact
);
