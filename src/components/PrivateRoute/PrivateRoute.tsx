import { useAuth } from '@src/infrastructure/services/context/AuthContext';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export interface iPrivateRoute {
  exact?: boolean;
  path?: string;
  component: React.FunctionComponent;
}

const PrivateRoute:React.FC<iPrivateRoute> = ({ exact, path, component }) => {
  const value = useAuth();

  if(value?.currentUser){
    <Route exact={exact} path={path} component={component} />;
  }

  return <Redirect to="/unauthorized" />;
};

export default PrivateRoute;