import React from 'react';
import './choiceDetail.css';
import Player from '../player';

// const ChoiceDetail = ({id, name, species, description, image, audio }) => {
const imgPrefix = 'images/quest/';
const audioPrefix = 'audio/quest/';

const ChoiceDetail = ({currentDetail, isShow}) => {
  const { name, species, description, image, audio } = currentDetail;
  const playerStop = true;
  return (
    <div className="animal-details card">
      { isShow

        ? (
          <div className="instruction">
            <span>Послушайте плеер. </span>
            <span>Выберите животное из списка</span>
          </div>
        ) : (
          <div>
            <div className="card-body">
              <img className="animal-image" src={imgPrefix+image} alt={name}/>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h4>{name}</h4>
                </li>
                <li className="list-group-item">
                  <span>{species}</span>
                </li>
                <li className="list-group-item">
                  <Player mp3src={audioPrefix+audio} playerStop={playerStop}/>
                </li>
            </ul>
          </div>
          <span className="animal-description">{description}</span>
          </div>

        )
      }
    </div>
  );
};

export default ChoiceDetail;
