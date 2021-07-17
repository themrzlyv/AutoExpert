import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, LazyImportDelay));
  return import('@src/views/Home/Home');
});
const NotFound = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, LazyImportDelay));
  return import('@src/views/NotFound/NotFound');
});
const Profile = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, LazyImportDelay));
  return import('@src/views/Profile');
});

import PrivateRoute from '@src/components/PrivateRoute/PrivateRoute';
import Unauthorized from '@src/views/Unauthorized';
import { mainRoutes } from '@views/mainRoutes';
import Preloader from '@components/Preloader';
import { LazyImportDelay } from '@infrastructure/data/constants';

const MainPages: React.FC = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <PrivateRoute exact path={mainRoutes.profile} component={Profile} />
        <Route exact path={mainRoutes.home} component={Home} />
        <Route exact path={mainRoutes.unauthorized} component={Unauthorized} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default MainPages;
