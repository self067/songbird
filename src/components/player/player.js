import React, { PureComponent } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './player.css';

const SAMPLE_MP3_URL='http://songbird.lmaa.ru/gavrilina.mp3';
export default class Player extends PureComponent {

  render() {
    
    const Player = () => (
      <AudioPlayer
        autoPlay={false}
        src={SAMPLE_MP3_URL}
        onPlay={e => console.log("onPlay")}
        showJumpControls={false} 
        // customAdditionalControls={[]}
        // layout="horizontal-reverse"

        customProgressBarSection={
          [
            RHAP_UI.MAIN_CONTROLS,
            RHAP_UI.PROGRESS_BAR,
          ]
        }

        customControlsSection={
          [
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.VOLUME_CONTROLS,
            RHAP_UI.DURATION,
          ]
        }
      />
    );

    return (
      <div className="random-bird">
        <img src="images/dark-bird.jpg" width="200" height="155" alt="" className="bird-image"/>
        <div className="group-ctrls">
          <h3 className="hidden-name">******</h3>

        <Player />

        </div>
      </div>
);
  }
}
