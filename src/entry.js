import { Route, HashRouter } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import Status from './components/status';
import Schedule from './components/schedule';
import CheckConnection from './components/check_connection';
import App from './app';

import '../static/sass/main.scss';

window.location.hash = 'status';

class MainComponent extends React.Component {
  render() {
    return <HashRouter>
        <Route path="/status" component={App}>
          <Route exact path="/" component={Status} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/check_connection" component={CheckConnection} />
        </Route>
      </HashRouter>;
  }
}

render(<MainComponent />, document.getElementById('react-root'));
