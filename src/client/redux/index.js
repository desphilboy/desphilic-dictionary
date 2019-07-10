import { createStore, compose } from 'redux';
import { lookUpReducer } from './look-up/look-up.reducer.js';

const initialState = {
	lookupWord: {
		inProgress: false,
		data: false,
		error: false,
	},
};

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(lookUpReducer, initialState, composeEnhancers());
