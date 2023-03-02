import { ACTIONS } from "./actions";

export const getUsers = () => {
  return {
    type: ACTIONS.GET_USERS_REQUESTED,
  };
};
