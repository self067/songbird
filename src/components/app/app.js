import React, { useState, useEffect } from 'react';
import Header from '../header';
import Categories from '../categories';
import Questcard from '../questcard';
import ChoicesList from '../choicesList';
import ChoiceDetail from '../choiceDetail';
import Footer from '../footer';
import Gra from '../gra';
import './app.css';

const getNextRandom = () => {
  return Math.round(Math.random() * 5);
};
let rightChoice = getNextRandom();
let rightChoiceId = -1;
let currentGroup = 0;
let remain=5; 

const imgPrefix = 'images/quest/';
// const audioPrefix = 'audio/quest/';
const audio = new Audio('');
const playSound = (sound: string) => {
  // audio.pause();
  audio.src = `audio/${sound}.mp3`;
  audio.play();
};

const App = () => {
  // audio.pause();
  const url = 'animals.json';

  // const [remain, setRemain] = useState( 5);

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const [playerStop, setPlayerStop] = useState(false);

  const [score, setScore] = useState(0);
  const [animalTitle, setAnimalTitle] = useState('*****');
  const [animalImage, setAnimalImage] = useState("images/siluet.jpg");

  const [error, setError] = useState(null);


  const [currentDetail, setCurrentDetail] = useState({ });
  const [currentList, setCurrentList] = useState({});

  const [categories, setCategories] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [isShow, setIsShow] = useState(true);

  const getCurrentDetail = (id) => {
    const de = animals[currentGroup].animals.find((element, index, array)=>{
      return element.id === id;
    });
    return de;
  };


  const onBegin = () => {
    playSound('nextlevel');
    console.log('begin');
    currentGroup = 0;

    rightChoice = getNextRandom();
    rightChoiceId = animals[currentGroup].animals[rightChoice].id;
    // Right
    console.log(animals[currentGroup].animals[rightChoice].name);

    setCurrentList(animals[currentGroup].animals.map((item) => {
      const { id, name } = item;
      return { id, name, error: false, success: false };
    }));

    setCategories(animals.map((item, i) => {
      const active = currentGroup === i ;
      const { groupName, gid } = item;
      return { active, groupName, gid };
    }));

    setScore(0);
    remain = 5;

  };

  const onNextLevel = () => {

    setNextActive(false);
    setIsShow(true);
    setAnimalTitle('*****');
    setAnimalImage('images/siluet.jpg');
    currentGroup++;
    setPlayerStop(true);

    if (currentGroup < 6) {
      playSound('nextlevel');
      rightChoice = getNextRandom();
      rightChoiceId = animals[currentGroup].animals[rightChoice].id;
      console.log(animals[currentGroup].animals[rightChoice].name);
      setCurrentList(animals[currentGroup].animals.map((item) => {
        const { id, name } = item;
        return { id, name, error: false, success: false };
      }));

      setCategories(animals.map((item, i) => {
        const active = currentGroup === i ;
        const { groupName, gid } = item;
        return { active, groupName, gid };
      }));

      remain = 5;
    } else {
      playSound('fire');
    }



  };

  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1),
    ];
  };

  const getProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    return oldItem[propName];
  };

  const onClickChoice = (id) => {
    const de = getCurrentDetail(id);
    setCurrentDetail(de);
    setIsShow(false);
    if (id === rightChoiceId) {
      if (!getProperty(currentList, id, 'success')) {
        // if( currentList)
        setCurrentList(toggleProperty(currentList, id, 'success'));

        setPlayerStop(true);
        // музыка
        playSound('success');
        setNextActive(true);
        setScore(score + remain);
        setAnimalTitle(animals[currentGroup].animals[rightChoice].name);
        setAnimalImage( imgPrefix+animals[currentGroup].animals[rightChoice].image);
      }
    } else
    if (!getProperty(currentList, id, 'error') && !nextActive) {
      // if( currentList)
      setCurrentList(toggleProperty(currentList, id, 'error'));

      remain--;
      // музыка
      playSound('error');

    }
  };

  useEffect(() => {
    // _apiBase = 'https://self067-songbird.lmaa.ru/';
    const apiBase = '';

    fetch(`${apiBase}${url}`, { mode: 'no-cors' })
      .then(response => response.json())
      .then(data => {

        setAnimals(data);
        setCategories(data.map((item, i) => {
          const active = !i;
          const { groupName, gid } = item;
          return { active, groupName, gid };
        }));

        rightChoiceId = data[0].animals[rightChoice].id;
        // Right
        console.log(data[0].animals[rightChoice].name);

        setCurrentList( data[0].animals.map((item, i) => {
          const { id, name } = item;
          return { id, i, name, error: false, success: false };
        }));

        setIsDataLoaded(true);
      },
      (reason)=> {console.log('rejected ', reason)})
      .catch(e => {
        console.log(e);
        setError(e);
      });
  },[]);

  if (isDataLoaded) {
    if (currentGroup > 5) {
      return (
        <Gra score={score} onBegin={onBegin}/>
      );
    }

    let messNext = 'Next Level';
    if (currentGroup > 4) messNext = 'See Results';
    const mp3src = 'audio/quest/' + animals[currentGroup].animals[rightChoice].audio;

    return (
      <div className="container">
        <Header score={score} />
        <Categories categories={categories} />
        <Questcard mp3src={mp3src} animalTitle={animalTitle} animalImage={animalImage}/>
        <div className="row mb2">
          <div className="col-md-4">
            <ChoicesList
              choices={ currentList }
              onClickChoice={ onClickChoice }
            />
          </div>
          <div className="col-md-8">
            <ChoiceDetail currentDetail={currentDetail} isShow={isShow} />
          </div>
        </div>
        <Footer nextActive={nextActive} onNextLevel={onNextLevel} messNext={messNext}/>
      </div>
    );
  }

  if (error) {
    return <div>Could not fetch {url} status={error.status}</div>;
  }

  return <div>...Wait... please for data fetching....</div>;


};

export default App;
