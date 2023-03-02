import { applyMiddleware, createStore, compose } from "redux";
import users from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const SagaStore = createStore(users, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default SagaStore;
