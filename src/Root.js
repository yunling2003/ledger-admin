import React from 'react';
import { Switch } from 'react-router-dom';
import MainLayout from './Layout';
import IssueList from './components/IssueList';

export default function Root() {
  return (
    <Switch>
      <MainLayout path="/" exact component={IssueList} />
    </Switch>
  );
}
