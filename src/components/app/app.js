import React, { Component } from 'react';
import Header from '../header';
import Categories from '../categories';
import Questcard from '../questcard';
import ChoicesMain from '../choicesMain';

import Footer from '../footer';
import './app.css';
import AnimalData from '../../services/animalData';

export default class App extends Component {

  state = {
    score: 0,
    nextActive: true,
    animalData: new AnimalData(), //.getAllAnimals().then(alert),
    categories: [],
    animals: [],
    mp3src: 'https://self067-songbird.lmaa.ru/g1.mp3',
    rightAnimal: '*****',

  };

  // !!!!!!!!!!!!!!!!!!!!!!?
  // .getAllAnimals()
  componentDidMount() {
    this.state.animalData.getAllAnimals()
      .then((data) => {
        this.setState({ animals: data });
        this.setState({ categories: data.map((item, i) => {
          const active = !i;
          const { groupName, gid } = item;

          return { active, groupName, gid };
        }),
        });
        // console.log('animals', this.state.animals);
      },
      (reason)=> {console.log('rejected ', reason)});

    // this.setState({categories: ans});
  }

  onClickNextLevel() {
    console.log('next');
  }

  onSelectAnswer() {
    console.log('onSelectAnswer');
  }


  render() {
    const { score, nextActive, mp3src, rightAnimal, categories } = this.state;

    return (
      <div className="container">
        <Header score={score} />
        <Categories categories={categories}/>
        <Questcard mp3src={mp3src} title={rightAnimal}/>
        <ChoicesMain mp3src={mp3src} onSelectAnswer={this.onSelectAnswer}/>
        <Footer nextActive={nextActive} onClickNextLevel={this.onClickNextLevel}/>
      </div>
    );
  }
}
