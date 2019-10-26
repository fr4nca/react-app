import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Secondary from './pages/Secondary';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/secondary" component={Secondary} />
      </Switch>
    </BrowserRouter>
  );
}
