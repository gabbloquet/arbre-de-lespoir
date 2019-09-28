import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import navbar from './navigation.module.css'

import Home from '../home/home'
import Presentation from "../presentation/presentation";
import Actions from "../actions/actions";
import Partenaires from "../partenaires/partenaires";
import Dons from "../dons/dons";
import Contact from "../contact/contact";
import Demarche from "../demarche/demarche";
import Equipe from "../equipe/equipe";

class Navigation extends Component {

    render() {

        return (
            <Router>
                <div>
                    <nav className="">
                        <ul className={ navbar.items }>
                            <li id="active"><Link to={'/'} className={ navbar.link }> Accueil </Link></li>
                            <li><Link to={'/presentation'} className={ navbar.link }>Presentation</Link></li>
                            <li><Link to={'/demarche'} className={ navbar.link }>Notre demarche</Link></li>
                            <li><Link to={'/equipe'} className={ navbar.link }>L'équipe</Link></li>
                            {/*<li><Link to={'/actions'} className={ navbar.link }>Nos actions</Link></li>*/}
                            {/*<li><Link to={'/partenaires'} className={ navbar.link }>Nos partenaires</Link></li>*/}
                            <li><Link to={'/dons'} className={ navbar.link }>Nous rejoindre / Faire un don</Link></li>
                            <li><Link to={'/contact'} className={ navbar.link }>Contactez-nous</Link></li>
                        </ul>
                    </nav>
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
