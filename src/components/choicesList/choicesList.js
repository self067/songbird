import React from 'react';
import './choicesList.css';

const ChoicesList = ({
  choices, onClickChoice
}) => {
  const elements = choices.animals.map((item) => {
    const { id, error, success, name } = item;
    let classNames = 'list-group-item';
    if (error) classNames += ' error';
    if (success) classNames += ' success';

    return (
      <li key={id} className={classNames} onClick={() => onClickChoice(id)}>
        <span className="li-btn" />
        { name }
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {elements}
    </ul>
  );
};

export default ChoicesList;
