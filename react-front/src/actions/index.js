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
  return {
    type: actionTypes.USER_CLAPPED,
  };
}

export function userClapSuccess() {
  console.log('User clapped successfuly');
  return {
    type: actionTypes.USER_CLAPPED_SUCCESS,
  };
}
