import { call, put, select } from "redux-saga/effects";
import { fetchWordApi } from "../../apis/fetch-word.js";
import { lookupSuccess, lookupError } from "../look-up/look-up.reducer.js";
import { getLookupWord } from "../selectors/lookup-word.js";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchWord(action) {
	try {
		console.log("Hello from saga fetchWord", action);
		const apiResponse = yield call(fetchWordApi, action.payload.word);
		yield put(lookupSuccess(apiResponse));
	} catch (e) {
		yield put(lookupError(e));
	}
}
