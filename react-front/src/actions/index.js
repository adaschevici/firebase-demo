import * as actionTypes from './types';

export function fetchUserId() {
  return {
    type: actionTypes.USER_GET_UUID,
  };
}

export function userJoined(userId) {
  return {
    type: actionTypes.USER_JOINED,
    userId,
  };
}

export function userClapped() {
  return {
    type: actionTypes.USER_CLAPPED,
  };
}

export function userClapSuccess() {
  return {
    type: actionTypes.USER_CLAPPED_SUCCESS,
  };
}

export function listenHubData() {
  return {
    type: actionTypes.LISTEN_HUB_DATA,
  };
}

export function updateUsers(users) {
  return {
    type: actionTypes.UPDATE_USERS,
    users,
  };
}
