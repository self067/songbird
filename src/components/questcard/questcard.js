import React, { PureComponent } from 'react';
import Player from '../player';
// import 'react-h5-audio-player/lib/styles.css';
import './questcard.css';

export default class Questcard extends PureComponent {
  render() {
    return (
      <div className="random-animal">
        <img src="images/dark-bird.jpg" width="200" height="155" alt="" className="animal-image"/>
        <div className="group-ctrls">
          <h3 className="hidden-name">
            ******
          </h3>
          <Player />
        </div>
      </div>
);
  }
}
