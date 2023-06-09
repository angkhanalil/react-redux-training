import { legacy_createStore as createStore } from "redux";

const initState = {
  counter: 1,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INC":
      return state;
    case "DEC":
      return state;

    default:
      break;
  }
};

export const store = createStore(reducer);
