import React, { useState, useEffect } from 'react';
import Header from '../header';
import Categories from '../categories';
import Questcard from '../questcard';
import ChoicesList from '../choicesList';
import ChoiceDetail from '../choiceDetail';

import Footer from '../footer';
import './app.css';
import AnimalData from '../../services/animalData';

const getNextRandom = () => {
  return Math.round(Math.random()*5+1);
};

const App = () => {
  const [score, setScore] = useState(0);
  const [animalTitle, setAnimalTitle] = useState('*****');
  const [rightChoice, setRightChoice] = useState(0);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentDetail, setCurrentDetail] = useState({


  });

  const [nextActive, setNextActive] = useState(true);

  const [categories, setCategories] = useState([]);
  const [animals, setAnimals] = useState([]);

  const [mp3src, setMp3src] = useState('https://self067-songbird.lmaa.ru/g1.mp3');

  const getCurrentDetail = (id) => {
    const de = animals[currentGroup].animals.find((element, index, array)=>{
      return element.id === id;
    });
    return de;
  };

  const getAnimals = () => {
    const animalData = new AnimalData();
    animalData.getAllAnimals()
      .then((data) => {
        setAnimals(data);
        setCategories(data.map((item, i) => {
          const active = !i;
          const { groupName, gid } = item;
          return { active, groupName, gid };
        }));
      },
      (reason)=> {console.log('rejected ', reason)});
  };

  const onClickNextLevel = () => {
    console.log('next');
  };

  const onClickChoice = (id) => {
    console.log('onClickChoice', id);
    const de = getCurrentDetail(id);
    console.log(de);
    setCurrentDetail(de);

  };

  useEffect(() => {
    getAnimals();
    setRightChoice(getNextRandom());
  }, []);

  // console.log('animals ', animals);

  const ag = animals[currentGroup]
    ? animals[currentGroup]
    : {
      gid: 999,
      groupName: '',
      animals: [],
    };



  return (
    <div className="container">
      <Header score={score} />
      <Categories categories={categories} />
      <Questcard mp3src={mp3src} animalTitle={animalTitle} />
      <div className="row mb2">
        <div className="col-md-4">
          <ChoicesList
            choices={ ag }
            onClickChoice={ onClickChoice }
          />
        </div>

        <div className="col-md-8">
          <ChoiceDetail currentDetail={currentDetail} />
        </div>
      </div>
      {/* <ChoicesMain choices={ag} onClickChoice={onClickChoice} choiceDetail={choiceDetal}/> */}
      <Footer nextActive={nextActive} onClickNextLevel={onClickNextLevel}/>
    </div>
  );
};

export default App;
