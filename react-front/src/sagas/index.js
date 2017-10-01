import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';


function* userJoined() {
  yield put({
    type: actionTypes.USER_JOINED,
  });
}

export default function* saga() {
  yield* takeEvery(actionTypes.USER_JOINED, userJoined);
}

