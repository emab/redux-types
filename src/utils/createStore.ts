import { applyMiddleware, createStore, PreloadedState, Reducer } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const createStoreModified = <State>(
  reducers: Reducer<State>,
  initialState: PreloadedState<State>
) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default createStoreModified;
