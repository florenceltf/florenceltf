import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Layout from './Layout';
import GalleryContainer from './GalleryContainer';
import InfoContainer from './InfoContainer';

const store = configureStore();

class Root extends Component {
  render() {
      return (
              <Provider store={store}>
              <Router>
              <Layout>
              <Route exact path="/" component={GalleryContainer} />
              <Route path="/information" component={InfoContainer} />
              </Layout>
              </Router>
              </Provider>
    );
  }
}

export default Root;
