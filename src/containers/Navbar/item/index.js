import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './item.css';

const Item = ({ name, link }) => {

  const location = useLocation();

  return (
    <li>
      <Link to={link} className={`link ${link === location.pathname && "active"}`}>
        {' '}
        {name}
      </Link>
    </li>
  );
};

export default Item;
