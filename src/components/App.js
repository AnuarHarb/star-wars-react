import React, { Component, Fragment } from 'react';
import Header from './Header';
import GameContainer from './GameContainer';
import '../assets/css/app.css';
import logo from '../assets/images/starwars-logo.jpg';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header logo={logo}/>
        <GameContainer />
      </Fragment>
    );
  }
}

export default App;
