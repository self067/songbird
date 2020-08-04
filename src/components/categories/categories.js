import React from 'react';

import './categories.css';

const Categories = () => {
  return (
    <ul className="sb-list pagination" >
      <li className="page-item active">
        <a href="#" className="page-link"> Разминка </a> 
      </li>
      <li className="page-item">
        <a href="#" className="page-link"> Воробьиные </a>
      </li>
      <li className="page-item">
        <a href="#" className="page-link">Лесные птицы</a>
      </li>
      <li className="page-item">
        <a href="#" className="page-link"> Певчие птицы </a>
      </li>
      <li className="page-item">
        <a href="#" className="page-link">Хищные птицы</a>
      </li>
      <li className="page-item">
        <a href="#" className="page-link"> Морские птицы </a>
      </li>
    </ul>
  );
};

export default Categories;
