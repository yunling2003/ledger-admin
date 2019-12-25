import fetch from './fetch';

export const getAllIssues = () => {
  return fetch.get('/issue');
};
