import React from "react";
import { buttonStyles, labelStyles } from "./styles";
const initialState = {
  lapse: 0,
  started: null,
};

function reducer(state, { now, type }) {
  const { lapse, started } = state;

  switch (type) {
    case "start":
      return { ...state, now, started: now };
    case "tick":
      return { ...state, now };
    case "stop":
      return { ...state, started: null, lapse: lapse + (now - started) };
    case "clear":
      return { ...state, started: null, lapse: 0 };
    default:
      throw new Error();
  }
}

export const UseEffectBug = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { started, lapse, now } = state;
  const current = started ? now - started : 0;
  const total = lapse + current;

  React.useEffect(() => {
    if (started) {
      const tick = () => dispatch({ type: "tick", now: Date.now() });
      const intervalId = setInterval(tick, 0);
      return () => clearInterval(intervalId);
    }
  }, [started]);

  return (
    <div>
      <label style={labelStyles}>{total}ms</label>
      <button
        style={buttonStyles}
        onClick={() => {
          dispatch({
            type: started ? "stop" : "start",
            now: Date.now(),
          });
        }}
      >
        {started ? "Stop" : "Start"}
      </button>
      <button style={buttonStyles} onClick={() => dispatch({ type: "clear" })}>
        Clear
      </button>
    </div>
  );
};
