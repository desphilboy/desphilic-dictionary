import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form'
import { lookUpReducer as lookUp } from './look-up/look-up.reducer.js';
import 'core-js';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux-sagas/root-saga';

const initialState = {
	lookUp: {
		inProgress: false,
		data: false,
		error: false,
	},
};

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
	lookUp,
	form,
});

export const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);