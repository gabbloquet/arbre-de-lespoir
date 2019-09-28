import React, { Component } from 'react';

import navbar from "../navigation.css";
import item from "./item.module.css";
import {Link} from "react-router-dom";

class Item extends Component {

    constructor(props) {
        super(props);
        this.name = props.name;
        this.link = props.link
    }

    render() {
        return (
            <li className={ navbar.item }>
                <Link to={ this.link } className={ item.link }> { this.name }</Link>
            </li>
        )
    }
}

export default Item;
