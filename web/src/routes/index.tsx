import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Article from '../pages/Article';
import Contact from '../pages/Contact';
import Main from '../pages/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/articles/:id" component={Article} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
