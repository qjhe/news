import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import PCIndex from './components/pc_index';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Route path="/" component={PCIndex}></Route>
      </Router>
      </div>
    );
  }
}

export default App;
