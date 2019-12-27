import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import MainLayout from './Layout';

const IssueList = lazy(() => import('./components/IssueList'));
const EditIssue = lazy(() => import('./components/EditIssue'));

export default function Root() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <MainLayout path="/" exact component={IssueList} />
        <MainLayout path="/issue/:id" component={EditIssue} />
      </Switch>
    </Suspense>
  );
}
