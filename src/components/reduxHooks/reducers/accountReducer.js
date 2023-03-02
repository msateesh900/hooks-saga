import { ACTIONS } from "../ACTIONS";

export const accountReducer = (state = 0, action) => {
  switch (action.type) {
    case ACTIONS.DEPOSIT: {
      return state + action.payload;
    }
    case ACTIONS.WITHDRAW: {
      return state - action.payload;
    }
    default:
      return state;
  }
};
