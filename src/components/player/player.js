import React, { PureComponent } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './player.css';

export default class Player extends PureComponent {

  render() {
    const { mp3src } = this.props;
    const Player = () => (
      <AudioPlayer
        autoPlay={false}
        src={mp3src}
        // onPlay={e => console.log("onPlay")}
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
      <Player />
);
  }
}
