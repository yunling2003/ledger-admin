import fetch from './fetch';

export const getAllIssues = () => {
  return fetch.get('/issues');
};

export const getIssueById = (id) => {
  return fetch.get(`/issue/${id}`);
};
