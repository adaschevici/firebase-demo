import * as actionTypes from '../actions/types';


const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_JOINED:
      return { ...state, userId: action.userId };
    case actionTypes.USER_CLAPPED_SUCCESS:
      return state;
    case actionTypes.UPDATE_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};
