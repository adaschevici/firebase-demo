import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { userJoined, userClapSuccess } from '../actions';
import { fetchUserId, postUserClap } from './api-calls';
import * as actionTypes from '../actions/types';

const getUUID = state => state.common.userId;

function* userJoinedSaga() {
  const userId = yield call(fetchUserId);
  yield put(userJoined(userId.data.user_uuid));
}

function* userClappedSaga() {
  const userId = yield select(getUUID);
  yield call(postUserClap, userId);
  yield put(userClapSuccess());
}

export default function* saga() {
  yield takeEvery(actionTypes.USER_GET_UUID, userJoinedSaga);
  yield takeEvery(actionTypes.USER_CLAPPED, userClappedSaga);
}

