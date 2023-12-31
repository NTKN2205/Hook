import { INCREMENT, DECREMENT } from "../action/counterAction";
const INITIAL_STATE = {
  count: 5,
  name: "Ninh",
};
const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count * 2,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
