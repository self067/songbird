import React from 'react';
import './gra.css';

const Gra = ({score, onBegin}) => {

  let className = 'section_congratulation';
  if( score === 30) className += ' section_congratulation-big';

  return (
    <div className={className}>
      {/* <div className="container"> */}
      <div className="text_congratulation">поздравляем!</div>
      { score === 30
        ? (
          <div className="text-block-2">
            Вы набрали максимальные <span className="score_text_span">{score}</span>&nbsp;баллов
          </div>
        )
        : (
          <div className="text-block-2">
            Вы набрали <span className="score_text_span">{score} </span>
            из <span className="score_text_span">30</span> баллов
          </div>
        ) }

      <button
        type="button"
          className="button gra_button"
          onClick={onBegin}
      >
        Сыграть ещё раз
      </button>
      {/* </div> */}
    </div>
  );

};

export default Gra;
