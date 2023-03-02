import { ACTIONS } from "./actions";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_USERS_REQUESTED:
      return { ...state, loading: true };
    case ACTIONS.GET_USERS_SUCCESS:
      return { ...state, users: action.users, loading: false };
    case ACTIONS.GET_USERS_FAILURE:
      return { ...state, loading: false, error: action.message };

    default:
      return state;
  }
};

export default users;
