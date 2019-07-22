import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './navigation.css'

import Home from '../home/home'
import Presentation from "../presentation/presentation";
import Actions from "../actions/actions";
import Partenaires from "../partenaires/partenaires";
import Dons from "../dons/dons";
import Contact from "../contact/contact";

class Navigation extends Component {

    render() {

        return (
            <Router>
                <div>
                    <nav className="">
                        <ul className="nav-items">
                            <li><Link to={'/'} className="nav-link"> Accueil </Link></li>
                            <li><Link to={'/presentation'} className="nav-link">Presentation</Link></li>
                            <li><Link to={'/actions'} className="nav-link">Nos actions</Link></li>
                            <li><Link to={'/partenaires'} className="nav-link">Nos partenaires</Link></li>
                            <li><Link to={'/dons'} className="nav-link">Faire un don</Link></li>
                            <li><Link to={'/contact'} className="nav-link">Contactez-nous</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={ Home } />
                        <Route path='/presentation' component={ Presentation } />
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