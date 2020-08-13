import React from 'react';
import './header.css';
import logo from './logo.svg';

const Header = (props) => {
  const { score } = props;
  return (
    <div className="header-top-panel">
      <img src={logo} width="200" height="55" alt="" className="logo"/>
      <h5 className="header-score">
        Score: <span className="span">{score}</span>
      </h5>
    </div>

  );
};

export default Header;
