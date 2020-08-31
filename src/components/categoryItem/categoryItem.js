/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {PureComponent} from 'react';

import './categoryItem.css';

export default class CategoryItem extends PureComponent {
  render() {
    const { groupName, active } = this.props;

    let classNames = 'page-item ';
    if (active) classNames += ' active';

    return (
      <li className={classNames}>
        <a className="page-link"> {groupName} </a>
      </li>
    );
  }
}
