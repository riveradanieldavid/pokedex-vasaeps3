import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';
import configureStore from './configureStore';
// import * as serviceWorker from './serviceWorker';

const store = configureStore();

const renderApp = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  (module as any).hot.accept('./App', renderApp)
}

renderApp();

// serviceWorker.unregister();