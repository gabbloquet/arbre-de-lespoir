import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ name, link }) => {
  return (
    <li>
      <Link to={link} className="link">
        {' '}
        {name}
      </Link>
    </li>
  );
};

export default Item;
