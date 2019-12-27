import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ISSUE_GET, receiveIssues } from './actions';
import * as API from '../services/index';

function* fetchAllIssues() {
  const res = yield call(API.getAllIssues);
  if (res) {
    yield put(receiveIssues(res.data));
  } else {
    console.error('Fetch Issues Error!');
  }
}

function* fetchAllIssuesAsync() {
  yield takeEvery(ISSUE_GET, fetchAllIssues);
}

export default function* rootSaga() {
  yield all([fetchAllIssuesAsync()]);
}
