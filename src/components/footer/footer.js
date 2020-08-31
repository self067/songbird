import React, { PureComponent } from 'react';
import './footer.css';

export default class Footer extends PureComponent {
  render() {
    let classes = 'btn btn-def ';
    const { nextActive, onNextLevel, messNext } = this.props;
    let btnDisabled = false;
    if (nextActive) classes += ' btn-next';
    else btnDisabled = true;

    return (
      <button 
        type='button'
        disabled={btnDisabled}
        className={classes}
        onClick={onNextLevel}>
          {messNext}
      </button>
    );
  }
}
