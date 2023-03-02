import { all } from "redux-saga/effects";

import watcherUserSaga from "./handlers/userHandlers";

export default function* rootSaga() {
  yield all([watcherUserSaga()]);
}
