import * as actionTypes from '../actions/types';


const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_JOINED:
      return state;
    case actionTypes.USER_CLAPPED:
      console.log('Matched some action');
      return state;
    default:
      return state;
  }
};
