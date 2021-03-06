import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { store } from '@src/app/Store';
import App from '@src/App';

import '@src/themes/main.scss';

import { AuthProvider } from '@infrastructure/services/context/AuthContext';
import ErrorBoundary from '@views/components/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ToastProvider autoDismissTimeout={2000}>
        <AuthProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </AuthProvider>
      </ToastProvider>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
