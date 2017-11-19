import _ from 'lodash';
import * as actionTypes from '../actions/types';


const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_JOINED:
      return { ...state, userId: action.userId };
    case actionTypes.USER_CLAPPED_SUCCESS:
      return state;
    case actionTypes.UPDATE_USERS: {
      const users = _.keys(action.users).map(userId => userId)
        .map(userId => ({
          id: userId,
          claps: action.users[userId].claps,
          colorValue: action.users[userId].colorValue,
        }));
      return { ...state, users };
    }
    default:
      return state;
  }
};
