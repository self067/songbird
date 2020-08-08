import React from 'react';
import './choicesList.css';
import Player from '../player';
import ChoiceItem from '../choiceItem';

const ChoicesList = ({
  choices
}) => {
  // mp3src
  const elements = choices.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <ChoiceItem
          {...itemProps}
          onClick={() => onChoiceClick(id)}
          />
      </li>
    )
  });

    return (
      <div className="row mb2">

        <div className="col-md-4">
          <ul className="item-list list-group">
            {elements}
          </ul>
        </div>


        <div className="col-md-8">

          <div className="animal-details card">
            <p className="instruction">
              <span>Послушайте плеер.</span>
              <span>Выберите животное из списка</span>
            </p>
          <div className="card-body">
            <img className="animal-image" src="https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg" alt="Синица"/>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h4>Синица</h4>
                </li>
                <li className="list-group-item">
                  <span>Parus major</span>
                </li>
                <li className="list-group-item">
                  <Player mp3src={mp3src}/>

                </li>
              </ul>
          </div>
            <span className="animal-description">
              В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, 
              немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.
            </span>
          </div>
      </div>
    </div>
  );
};

export default ChoicesList;
