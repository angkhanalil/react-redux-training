import { legacy_createStore as createStore } from "redux";

const initState = {
  counter: 1,
  users: [],
  spinner: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + action.payload.step };
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    case "GET_USES_START":
      return { ...state, users: [], spinner: true };
    case "GET_USES_SUCCESS":
      return { ...state, users: action.payload.users, spinner: false };
    default:
      return state;
  }
};

export const store = createStore(reducer);
