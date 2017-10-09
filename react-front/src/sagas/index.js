import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { userJoined, userClapSuccess } from '../actions';
import { fetchUserId, postUserClap } from './api-calls';
import * as actionTypes from '../actions/types';

const getUUID = state => state.common.userId;

function* userJoinedSaga() {
  console.log('User joined saga');
  const userId = yield call(fetchUserId);
  yield put(userJoined(userId.data.user_uuid));
}

function* userClappedSaga() {
  console.log('User clapped saga');
  const userId = yield select(getUUID);
  yield call(postUserClap, userId);
  yield put(userClapSuccess());
}

export default function* saga() {
  console.log('Saga for join called');
  yield takeEvery(actionTypes.USER_GET_UUID, userJoinedSaga);
  yield takeEvery(actionTypes.USER_CLAPPED, userClappedSaga);
}

