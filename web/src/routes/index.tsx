import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Article from '../pages/Article';
import Main from '../pages/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/articles/:id" component={Article} />
  </Switch>
);

export default Routes;
