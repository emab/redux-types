import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AvailabilityState, reducer } from "./reducers";
import createStore from "./createStore";
import { Provider } from "react-redux";
import { Availability } from "./types";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const initialState: AvailabilityState = {
  currentAvailability: Availability.AVAILABLE,
};

const store = createStore(reducer, initialState);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
