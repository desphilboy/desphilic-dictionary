import { takeLatest } from 'redux-saga/effects';
import { lookupStart } from '../look-up/look-up.reducer.js';
import { fetchWord } from './fetch-word.js';


export function* rootSaga() {
  yield takeLatest(lookupStart, fetchWord);
}

export default rootSaga;
