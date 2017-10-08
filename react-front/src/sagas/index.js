import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { userJoined } from '../actions';
import { fetchUserId } from './api-calls';
import * as actionTypes from '../actions/types';

function* userJoinedSaga() {
  console.log('fetching userId');
  const userId = yield call(fetchUserId);
  console.log(userId);
  yield put(userJoined(userId.data.user_uuid));
  // yield put({
  //   type: actionTypes.USER_JOINED,
  // });
}

export default function* saga() {
  console.log('Saga for join called');
  yield* takeEvery(actionTypes.USER_GET_UUID, userJoinedSaga);
}

