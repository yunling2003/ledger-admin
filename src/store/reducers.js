import { combineReducers } from 'redux';
import { ISSUES_RECEIVED, ISSUE_RECEIVED } from './actions';

export function issues(state = {}, action) {
  let newState;
  switch (action.type) {
    case ISSUES_RECEIVED:
      newState = Object.assign({}, state, {
        items: action.issues,
        totalCount: action.issues.length
      });
      break;
    case ISSUE_RECEIVED:
      if (state.items.length === 0) {
        newState = Object.assign({}, state, {
          items: [action.issue]
        });
      } else {
        newState = Object.assign({}, state, {
          items: state.items.map((item) => {
            if (item._id === action.issue.id) {
              return Object.assign({}, item, action.issue);
            }
            return item;
          })
        });
      }
      break;
    default:
      newState = state;
  }

  return newState;
}

const rootReducer = combineReducers({
  issues
});

export default rootReducer;
