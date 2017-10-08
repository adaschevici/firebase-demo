import * as actionTypes from './types';

export function userJoined() {
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
