export const ISSUE_GET = 'ISSUE_GET';
export const ISSUES_RECEIVED = 'ISSUES_RECEIVED';
export const ISSUE_GETBYID = 'ISSUE_GETBYID';
export const ISSUE_RECEIVED = 'ISSUE_RECEIVED';

export function requestFetchIssues() {
  return {
    type: ISSUE_GET
  };
}

export function receiveIssues(issues) {
  return {
    type: ISSUES_RECEIVED,
    issues
  };
}

export function requestFetchIssueById(id) {
  return {
    type: ISSUE_GETBYID,
    id
  };
}

export function receiveIssue(issue) {
  return {
    type: ISSUE_RECEIVED,
    issue
  };
}
