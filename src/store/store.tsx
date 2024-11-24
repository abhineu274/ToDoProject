import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from "../redux/sagas/rootSaga";
import { reducer } from "../redux/reducers";

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
    reducer,
    composeWithDevTools(
    applyMiddleware(sagaMiddleWare)),
)

sagaMiddleWare.run(rootSaga)