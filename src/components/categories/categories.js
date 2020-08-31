import React from 'react';
import CategoryItem from '../categoryItem';
import './categories.css';

const Categories = ({ categories }) => {
  const elements = categories.map((item) => {
    const { gid, ...itemProps } = item;
    // console.log(itemProps);
    return (
      <CategoryItem
        key={gid}
        {...itemProps}
      />
    );
  });

  return (
    <ul className="sb-list pagination">
      {elements}
    </ul>
  );
};

export default Categories;
