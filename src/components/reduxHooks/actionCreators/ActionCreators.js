import { ACTIONS } from "../ACTIONS";

export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.WITHDRAW,
      payload: amount,
    });
  };
};
