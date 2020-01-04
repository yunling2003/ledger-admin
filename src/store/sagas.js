import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  ISSUE_GET,
  receiveIssues,
  ISSUE_GETBYID,
  receiveIssue
} from './actions';
import * as API from '../services/index';

function* fetchAllIssues() {
  const res = yield call(API.getAllIssues);
  if (res) {
    yield put(receiveIssues(res.data));
  } else {
    console.error('Fetch Issues Error!');
  }
}

function* fetchIssueById() {
  const res = yield call(API.getIssueById);
  if (res) {
    yield put(receiveIssue(res.data));
  } else {
    console.error('Fetch Issue Error!');
  }
}

function* fetchAllIssuesAsync() {
  yield takeEvery(ISSUE_GET, fetchAllIssues);
}

function* fetchIssueByIdAsync() {
  yield takeEvery(ISSUE_GETBYID, fetchIssueById);
}

export default function* rootSaga() {
  yield all([fetchAllIssuesAsync(), fetchIssueByIdAsync()]);
}
