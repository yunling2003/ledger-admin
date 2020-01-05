import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import MainLayout from './Layout';

const Dashboard = lazy(() => import('./components/Dashboard'));
const IssueList = lazy(() => import('./components/IssueList'));
const EditIssue = lazy(() => import('./components/EditIssue'));
const AddIssue = lazy(() => import('./components/AddIssue'));

export default function Root() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <MainLayout path="/" exact component={Dashboard} />
        <MainLayout path="/issues" exact component={IssueList} />
        <MainLayout path="/issues/add" component={AddIssue} />
        <MainLayout path="/issue/:id" component={EditIssue} />
      </Switch>
    </Suspense>
  );
}
