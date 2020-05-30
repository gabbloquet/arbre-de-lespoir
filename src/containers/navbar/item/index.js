import React from 'react';

import "./item.css";
import {Link} from "react-router-dom";

const Item = ({name, link}) => {
    return (
        <li>
            <Link to={ link } className="link"> { name }</Link>
        </li>
    )
}

export default Item;
