
import React, { Component } from 'react';
import Header from '../header';
import Categories from '../categories';
import Questcard from '../questcard';
import Variants from '../variants';
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
        <Categories />
        <Questcard />
        <Variants />
        {/* <Infocard /> */}
        <Footer />
      </div>
    );
  }
}
