/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';

import './choiceItem.css';

export default class ChoiceItem extends PureComponent {
  render() {
    const { name, success, error, onChoiceClick } = this.props;

    let classNames = 'list-group-item';
    if (error) classNames += ' error';
    if (success) classNames += ' success';

    return (
      <li
        className={classNames}
        onClick={onChoiceClick}
        >
        <span className="li-btn" />
        { name }
      </li>
    );
  }
}
