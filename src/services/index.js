import fetch from './fetch';

export const getAllIssues = () => {
  return fetch.get('/issues');
};

export const getIssueById = (id) => {
  return fetch.get(`/issue/${id}`);
};

export const modifyIssue = (issue) => {
  return fetch.post(`/issue/update`, { issue });
};

export const addIssue = (issue) => {
  return fetch.post(`/issue/add`, { issue });
};

export const deleteIssue = (id) => {
  return fetch.post(`/issue/delete`, { id });
};

export const getIssueStatusReport = () => {
  return fetch.get('/issue/status/get');
};

export const getIssueIsNewReport = () => {
  return fetch.get('/issue/new/get');
};
