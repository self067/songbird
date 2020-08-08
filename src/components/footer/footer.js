import React, { PureComponent } from 'react';
import './footer.css';

export default class Footer extends PureComponent {
  render() {
    let classes = 'btn btn-def '; 
    const { nextActive, onClickNextLevel } = this.props;
    let btnDisabled = false;
    if (nextActive) classes += ' btn-next'; 
    else btnDisabled = true;

    return (
      <button 
        disabled={btnDisabled}
        className={classes}
        onClick={onClickNextLevel}>
          Next Level
      </button>
    );
  }
}
