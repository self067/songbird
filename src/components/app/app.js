import React, { useState, useEffect } from 'react';
import Header from '../header';
import Categories from '../categories';
import Questcard from '../questcard';
import ChoicesList from '../choicesList';
import ChoiceDetail from '../choiceDetail';
import Footer from '../footer';
import './app.css';

const getNextRandom = () => {
  return Math.round(Math.random()*5+1);
};

const App = () => {
  
  const url = 'animals.json';

  const [remain, setRemain] = useState( 5);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const [score, setScore] = useState(0);
  const [animalTitle, setAnimalTitle] = useState('*****');

  const [error, setError] = useState(null);

  const [rightChoice, setRightChoice ] = useState(getNextRandom());
  const [rightChoiceId, setRightChoiceId ] = useState(-1);

  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentDetail, setCurrentDetail] = useState({ });
  const [currentList, setCurrentList] = useState({});

  const [categories, setCategories] = useState([]);
  const [animals, setAnimals] = useState([]);

  const [mp3src, setMp3src] = useState('https://self067-songbird.lmaa.ru/g1.mp3');

  const getCurrentDetail = (id) => {
    const de = animals[currentGroup].animals.find((element, index, array)=>{
      return element.id === id;
    });
    return de;
  };

  const onNextLevel = () => {
    console.log('nextLevel');
    setNextActive(false);

    setRightChoiceId( animals[currentGroup+1].animals[rightChoice].id);
    console.log(animals[currentGroup+1].animals[rightChoice].name);
    setCurrentList( animals[currentGroup+1].animals.map((item) => {
      const { id, name } = item;
      return { id, name, error: false, success: false };
    }));


    setCurrentGroup(currentGroup+1);

    setRightChoice(getNextRandom());
    setRemain(5);
  // console.log(animals[currentGroup].animals[rightChoice].name);
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

    if (id === rightChoiceId) {
      if (!getProperty(currentList, id, 'success')) {
        // if( currentList)
        setCurrentList(toggleProperty(currentList, id, 'success'));

        // музыка
        // setRemain(remain-1);
        setNextActive(true);
        setScore(score + remain);
        setAnimalTitle(animals[currentGroup].animals[rightChoice].name);
      }
    } else
    if (!getProperty(currentList, id, 'error')) {
      // if( currentList)
      setCurrentList(toggleProperty(currentList, id, 'error'));
      // музыка
      setRemain(remain-1);
    }
  };

  useEffect(() => {
    // _apiBase = 'https://self067-songbird.lmaa.ru/';
    const apiBase = '';

    fetch(`${apiBase}${url}`, { mode: 'no-cors' })
      .then(response => response.json())
      .then(data => {
        // console.log('data', data);
        setAnimals(data);
        setCategories(data.map((item, i) => {
          const active = !i;
          const { groupName, gid } = item;
          return { active, groupName, gid };
        }));

        setRightChoiceId( data[0].animals[rightChoice].id);
        console.log(data[0].animals[rightChoice].name);
        setCurrentList( data[0].animals.map((item, i) => {
          const { id, name } = item;
          return { id, name, error: false, success: false };
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

    // console.log('currentGroup', currentGroup, 'currentList', currentList, rightChoiceId);

    return (
      <div className="container">
        <Header score={score} />
        <Categories categories={categories} />
        <Questcard mp3src={mp3src} animalTitle={animalTitle} />
        <div className="row mb2">
          <div className="col-md-4">
            <ChoicesList
              choices={ currentList }
              onClickChoice={ onClickChoice }
            />
          </div>
          <div className="col-md-8">
            <ChoiceDetail currentDetail={currentDetail} />
          </div>
        </div>
        {/* <ChoicesMain choices={ag} onClickChoice={onClickChoice} choiceDetail={choiceDetal}/> */}
        <Footer nextActive={nextActive} onNextLevel={onNextLevel}/>
      </div>
    );
  }

  if (error) {
    return <div>Could not fetch {url} status={error.status}</div>;
  }

  return <div>...Wait... please for data fetching....</div>;


};

export default App;
