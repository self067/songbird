import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        AnimalsSound
      </h3>
      <ul className="d-flex">
        <li>
          People
        </li>
      </ul>

      <button
          className="btn btn-primary btn-sm">
        Change Service
      </button>
    </div>
  );
};

export default Header;
