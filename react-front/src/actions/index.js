import * as actionTypes from './types';

export function userJoined() {
  console.log('Dispatching user_joined');
  return {
    type: actionTypes.USER_JOINED,
  };
}

export function userClapped() {
  console.log('User clapped');
  return {
    type: actionTypes.USER_CLAPPED,
  };
}
