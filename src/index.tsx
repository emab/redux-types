import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import createStore from "./utils/createStore";
import { Provider } from "react-redux";
import { Availability } from "./store/availability/types";
import { rootReducer, State } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const initialState: State = {
  availability: {
    currentAvailability: Availability.AVAILABLE,
  },
  cat: {
    fact: undefined,
  },
};

const store = createStore(rootReducer, initialState);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
