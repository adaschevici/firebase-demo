import * as firebase from 'firebase';
import { takeEvery, eventChannel } from 'redux-saga';
import { take, call, put, select } from 'redux-saga/effects';

import { config, creds } from '../config/.config';
import { userJoined, userClapSuccess, updateUsers } from '../actions';
import { fetchUserId, postUserClap } from './api-calls';
import * as actionTypes from '../actions/types';

const getUUID = state => state.common.userId;

const app = firebase.initializeApp(config);
const login = firebase.auth().signInWithEmailAndPassword(creds.userEmail, creds.userPassword);
const database = firebase.database();

function createEventChannel() {
  const listener = eventChannel(
      (emit) => {
        database.ref('users')
          .on(
            'value',
            data => emit(data.val()),
        );
        return () => database.ref('users').off(listener);
      },
  );

  return listener;
}

function* updatedItemSaga() {
  const updateChannel = createEventChannel();
  while (true) {
    const users = yield take(updateChannel);
    yield put(updateUsers(users));
  }
}
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
  yield takeEvery(actionTypes.LISTEN_HUB_DATA, updatedItemSaga);
}

