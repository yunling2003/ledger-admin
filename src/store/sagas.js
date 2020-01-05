import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  ISSUE_GET,
  receiveIssues,
  ISSUE_GETBYID,
  receiveIssue,
  ISSUE_MODIFY
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

function* fetchIssueById(action) {
  const res = yield call(API.getIssueById, action.id);
  if (res) {
    yield put(receiveIssue(res.data));
  } else {
    console.error('Fetch Issue Error!');
  }
}

function* updateIssue(action) {
  const res = yield call(API.modifyIssue, action.issue);
  if (res) {
    yield put(receiveIssues(res.data));
  } else {
    console.error('Update Issue Error!');
  }
}

function* fetchAllIssuesAsync() {
  yield takeEvery(ISSUE_GET, fetchAllIssues);
}

function* fetchIssueByIdAsync() {
  yield takeEvery(ISSUE_GETBYID, fetchIssueById);
}

function* updateIssueAsync() {
  yield takeEvery(ISSUE_MODIFY, updateIssue);
}

export default function* rootSaga() {
  yield all([fetchAllIssuesAsync(), fetchIssueByIdAsync(), updateIssueAsync()]);
}
