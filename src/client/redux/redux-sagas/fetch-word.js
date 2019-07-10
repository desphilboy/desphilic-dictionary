import { call, put } from 'redux-saga/effects';
import { fetchWord } from '../../apis/fetch-word.js';
import {  lookupSuccess, lookupError } from '../look-up/look-up.reducer.js';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchWord(action) {
   try {
     fetchWord(action.payload).then(word => {
     	yield put(lookupSuccess(word));

     })
   } catch (e) {
      yield put(lookupError(e));
   }
}
