export const ISSUE_GET = 'ISSUE_GET';
export const ISSUE_RECEIVED = 'ISSUE_RECEIVED';

export function requestFetchIssues() {
  return {
    type: ISSUE_GET
  };
}

export function receiveIssues(issues) {
  return {
    type: ISSUE_RECEIVED,
    issues
  };
}
