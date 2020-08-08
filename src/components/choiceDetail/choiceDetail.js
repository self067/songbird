import React from 'react';
import './choiceDetail.css';
import Player from '../player';

// const ChoiceDetail = ({id, name, species, description, image, audio }) => {

const ChoiceDetail = ({currentDetail}) => {
  const {id, name, species, description, image, audio} = currentDetail;
console.log('cdetail ',id, name, species, description, image, audio);
  return (
    <div className="animal-details card">
      <p className="instruction">
        <span>Послушайте плеер.</span>
        <span>Выберите животное из списка</span>
      </p>
      <div className="card-body">
        <img className="animal-image" src={image} alt={name}/>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4>{name}</h4>
          </li>
          <li className="list-group-item">
            <span>{species}</span>
          </li>
          <li className="list-group-item">
            <Player mp3src={audio}/>
          </li>
        </ul>

        <span className="animal-description">{description}</span>

      </div>
    </div>
  );
};

export default ChoiceDetail;
