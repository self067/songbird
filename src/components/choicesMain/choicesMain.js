import React from 'react';
import ChoicesList from '../choicesList';
import ChoiceDetail from '../choiceDetail';

const ChoicesMain = (
) => {
  return (
    <div className="row mb2">
      <div className="col-md-4">
        <ChoicesList />
      </div>

      <div className="col-md-8">
        <ChoiceDetail />
      </div>
    </div>
  );
};

export default ChoicesMain;
