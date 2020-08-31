import React, { PureComponent } from 'react';
import Player from '../player';
// import 'react-h5-audio-player/lib/styles.css';
import './questcard.css';

export default class Questcard extends PureComponent {
  render() {
    const { mp3src, animalTitle, animalImage, playerStop } = this.props;
     
    return (
      <div className="random-animal">
        <img src={animalImage} width="200" height="155" alt="" className="animal-image"/>
        <div className="group-ctrls">
          <h3 className="hidden-name">
            {animalTitle}
          </h3>
          <Player mp3src={mp3src} playerStop={playerStop}/>
        </div>
      </div>
);
  }
}
