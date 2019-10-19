import { createActions, combineActions, handleActions } from "redux-actions";

const LOOKUP_START = "LOOKUP_START";
const LOOKUP_SUCCESS = "LOOKUP_SUCCESS";
const LOOKUP_ERROR = "LOOKUP_ERROR";

export const { lookupStart, lookupSuccess, lookupError } = createActions({
	LOOKUP_START: ({ word }) => ({
		inProgress: true,
		error: false,
		data: false,
		word,
	}),
	LOOKUP_SUCCESS: (data) => ({ inProgress: false, error: false, data }),
	LOOKUP_ERROR: (error) => ({ inProgress: false, error, data: false }),
});

export const lookUpReducer = handleActions(
	{
		[combineActions(lookupStart, lookupSuccess, lookupError)]: (
			state,
			action
		) => ({
			...state,
			...action.payload,
		}),
	},
	{ inProgress: false, error: false, data: false }
);
