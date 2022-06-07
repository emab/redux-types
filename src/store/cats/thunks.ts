import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { State } from "../store";
import { Fact } from "./types";
import { setCurrentFactAction } from "./actions";

export const getCatFactAsync =
  (): ThunkAction<void, State, undefined, AnyAction> => async (dispatch) => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const facts: Fact[] = await response.json();

    dispatch(setCurrentFactAction(facts[Math.round(Math.random() * 5)].text));
  };
