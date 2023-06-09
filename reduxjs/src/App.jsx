import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Hello = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const World = () => {
  return (
    <div>
      <h1>World</h1>
      <hr />
      <Hello />
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const counter = useSelector((counter) => counter);
  console.log(state, counter);

  const action = {
    type: "INC",
  };

  const actionCreator = (step = 1) => {
    return {
      type: "INC",
      payload: { step },
    };
  };
  return (
    <div>
      App
      <World />
      <button type="button" onClick={() => dispatch(actionCreator(5))}>
        update ++
      </button>
      <p>{counter.counter}</p>
    </div>
  );
};

export default App;
