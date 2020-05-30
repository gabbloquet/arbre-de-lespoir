import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

import './navigation.css'

import Home from '../../views/home'
import Presentation from "../../views/presentation";
import Actions from "../../views/actions";
import Partenaires from "../../views/partenaires";
import Dons from "../../views/dons";
import Contact from "../../views/contact";
import Demarche from "../../views/demarche";
import Equipe from "../../views/equipe";
import Item from "./item";
import Lead from "./lead";

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu_class: '',
        }
    }

    setToggleTopMenuClass = () => {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled',
            })
        } else {
            this.setState({
                menu_class: '',
            })
        }
    };


    render() {
        let top_menu_class = `top-menu ${this.state.menu_class}`;
        return (
            <Router>
                <div>
                    <div className={top_menu_class}>
                        <Lead text="L'arbre de l'espoir" />
                        <div className="right">
                            <Item link='/' name='Accueil'/>
                            <Item link='/presentation' name='Presentation'/>
                            <Item link='/demarche' name='Notre demarche'/>
                            <Item link='/equipe' name="L'équipe"/>
                            {/*<Item link='/actions' name='Nos actions'/>*/}
                            {/*<Item link='/partenaires' name='Nos partenaires'/>*/}
                            <Item link='/dons' name='Nous rejoindre / Faire un don'/>
                            <Item link='/contact' name='Contactez-nous'/>
                        </div>
                        <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
                        <div className='clear-fix' />
                    </div>
                    <Switch>
                        <Route exact path='/' component={ Home } />
                        <Route path='/presentation' component={ Presentation } />
                        <Route path='/demarche' component={ Demarche } />
                        <Route path='/equipe' component={ Equipe } />
                        <Route path='/actions' component={ Actions } />
                        <Route path='/partenaires' component={ Partenaires } />
                        <Route path='/dons' component={ Dons } />
                        <Route path='/contact' component={ Contact } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Navigation;
