import {CASE_FETCH_SUCCESS, SINGLE_CASE_FETCH_SUCCESS} from '../Actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CASE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
