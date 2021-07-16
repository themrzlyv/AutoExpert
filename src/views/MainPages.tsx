import Home from '@src/views/Home/Home';
import NotFound from '@src/views/NotFound/NotFound';
import Profile from '@src/views/Profile';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '@src/components/PrivateRoute/PrivateRoute';
import Unauthorized from '@src/views/Unauthorized';

const MainPages: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/profile" component={Profile} />
      <Route exact path="/" component={Home} />
      <Route exact path="/unauthorized" component={Unauthorized} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default MainPages;
