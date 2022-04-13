import { useDispatch, useSelector } from "react-redux";
import { currentAvailabilitySelector, timeLeftSelector } from "./selectors";
import { Availability } from "./types";
import { setCurrentAvailability, setTimeLeft } from "./actions";

export const App = () => {
  const dispatch = useDispatch();

  const availability = useSelector(currentAvailabilitySelector);
  const timeLeft = useSelector(timeLeftSelector);

  const toggleAvailability = () => {
    dispatch(
      setCurrentAvailability(
        availability === Availability.UNAVAILABLE
          ? Availability.AVAILABLE
          : Availability.UNAVAILABLE
      )
    );
  };

  const randomizeTime = () => {
    dispatch(setTimeLeft(new Date(Math.random() * Date.now())));
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
    </div>
  );
};
