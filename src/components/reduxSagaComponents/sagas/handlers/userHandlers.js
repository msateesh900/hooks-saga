import { ACTIONS } from "../../actions";
import fetchUsers from "../requests/fetchUsers";
import { call, put, takeLatest } from "redux-saga/effects";

function* GetUserHandlers() {
  try {
    const users = yield call(fetchUsers);
    // console.log(users);
    yield put({ type: ACTIONS.GET_USERS_SUCCESS, users: users });
  } catch (error) {
    yield put({ type: ACTIONS.GET_USERS_FAILURE, error: error.message });
  }
}

function* watcherUserSaga() {
  yield takeLatest(ACTIONS.GET_USERS_REQUESTED, GetUserHandlers);
}

export default watcherUserSaga;
