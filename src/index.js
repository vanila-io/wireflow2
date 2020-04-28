import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './views/App';
import * as serviceWorker from './serviceWorker';

import './index.css';

function Container() {
  return (
    <Router>
      <App />
    </Router>
  );
}

ReactDOM.render(<Container />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./views/App', () => {
    ReactDOM.render(<Container />, document.getElementById('root'));
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
