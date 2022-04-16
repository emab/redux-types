import { useDispatch, useSelector } from "react-redux";
import {
  currentAvailabilitySelector,
  timeLeftSelector,
} from "./store/availability/selectors";
import { Availability } from "./store/availability/types";
import {
  setCurrentAvailabilityAction,
  setTimeLeftAction,
} from "./store/availability/actions";
import { getCatFactAsync } from "./store/cats/thunks";
import { catFactSelector } from "./store/cats/selectors";
import { clearCatFactAction } from "./store/cats/actions";

export const App = () => {
  const dispatch = useDispatch();

  const availability = useSelector(currentAvailabilitySelector);
  const timeLeft = useSelector(timeLeftSelector);

  const catFact = useSelector(catFactSelector);

  const toggleAvailability = () => {
    dispatch(
      setCurrentAvailabilityAction(
        availability === Availability.UNAVAILABLE
          ? Availability.AVAILABLE
          : Availability.UNAVAILABLE
      )
    );
  };

  const randomizeTime = () => {
    dispatch(setTimeLeftAction(new Date(Math.random() * Date.now())));
  };

  const getCatFact = () => {
    dispatch(getCatFactAsync());
  };

  const clearCatFact = () => {
    dispatch(clearCatFactAction());
  };

  return (
    <div>
      <p>
        Based on advice from{" "}
        <a href="https://phryneas.de/redux-typescript-no-discriminating-union">
          this blog post
        </a>{" "}
        written by the author of{" "}
        <a href="https://github.com/reduxjs/redux-toolkit">redux-toolkit</a>.
      </p>
      <p>Availability: {availability}</p>
      <p>
        <button onClick={toggleAvailability}>Toggle availability</button>
      </p>
      <p>Time left: {timeLeft.toDateString()}</p>
      <p>
        <button onClick={randomizeTime}>Randomise time</button>
      </p>
      <p>
        <button onClick={getCatFact}>Get cat fact</button>
        <button onClick={clearCatFact}>Clear fact</button>
        <p>{catFact}</p>
      </p>
    </div>
  );
};
