import { Reducer } from "redux";
import { clearCatFactAction, setCurrentFactAction } from "./actions";

export type CatState = {
  fact: string | undefined;
};

const initialState: CatState = {
  fact: undefined,
};

export const catReducer: Reducer<CatState> = (state = initialState, action) => {
  if (setCurrentFactAction.match(action)) {
    return {
      ...state,
      fact: action.fact,
    };
  }

  if (clearCatFactAction.match(action)) {
    return {
      ...state,
      fact: undefined,
    };
  }
  return state;
};
