import * as actionTypes from './types';

export function fetchUserId() {
  return {
    type: actionTypes.USER_GET_UUID,
  };
}

export function userJoined(userId) {
  console.log('Dispatching user_joined');
  return {
    type: actionTypes.USER_JOINED,
    userId,
  };
}

export function userClapped() {
  console.log('User clapped');
  return {
    type: actionTypes.USER_CLAPPED,
  };
}
