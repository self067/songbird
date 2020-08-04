import React from 'react';
import './header.css';
import logo from './logo.svg';

const Header = () => {
  return (
    <div className="header-top-panel">
      <img src={logo} width="200" height="55" alt="" className="logo"/>
      <h5 className="header-score">
        Score: <span className="span">0</span>
      </h5>
    </div>

  );
};

export default Header;
