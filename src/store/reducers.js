import { combineReducers } from 'redux';
import { ISSUE_RECEIVED } from './actions';

export function issues(state = {}, action) {
  let newState;
  switch (action.type) {
    case ISSUE_RECEIVED:
      newState = Object.assign({}, state, {
        items: action.issues,
        totalCount: action.issues.length
      });
      break;
    default:
      newState = Object.assign({}, state);
  }

  return newState;
}

const rootReducer = combineReducers({
  issues
});

export default rootReducer;
