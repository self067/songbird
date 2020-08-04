
import React, { Component } from 'react';
import Header from '../header';
import List from '../list';
import Player from '../player';
import Selector from '../selector';
import Infocard from '../infocard';
import Footer from '../footer';
import './app.css';


export default class App extends Component {

  state = {
  //    animalService: new AnimalService(),
  };

  render() {

    return (
      <div className="container">
        <Header />
        <List />
        <Player />
        <Selector />
        <Infocard />
        <Footer />
      </div>
    );
  }
}
