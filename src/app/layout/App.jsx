import React, { Component, Fragment } from 'react';

import './App.css';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from './NavBar/NavBar';
import { Container } from 'semantic-ui-react';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <Container className="main">
          <EventDashboard/>
        </Container>
      </Fragment>
    );
  }
}

export default App;
