import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import * as serviceWorker from './serviceWorker';
import {GoogleApiWrapper } from 'google-maps-react';

export default GoogleApiWrapper({
  apiKey: "AIzaSyB5UcwUUe4l2aXDcZbKvHZmcxi4rb04k8c",
  language: "ES"
})(App);

ReactDOM.render(
  <React.Fragment>
     <HashRouter>
        <ScrollToTop>
          <App />
      </ScrollToTop>
    </HashRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
