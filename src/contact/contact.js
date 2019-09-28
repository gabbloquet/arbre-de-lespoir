import React, { Component } from 'react';
import styles from './contact.module.css';
import arbreLogo from '../assets/img/arbre_logo.png';

class Contact extends Component {
    render() {
        return (
            <div className={ Contact }>
                <h1>Nous contactez</h1>
                <div className={ styles.card }>
                    <img className={ styles.logo } src={ arbreLogo} alt="Arbre de l'espoir"/>
                    <div className={ styles.informations }>
                        <h2>Courriel : <a href="mailto:larbredelespoir@gmail.com">larbredelespoir@gmail.com</a></h2>
                        <h2>Numero du secrétaire générale  : +33 6 42 55 83 49</h2>
                        <h2>Numero de téléphone : +33 7 82 94 62 13</h2>
                        <h2>Website : <a href="https://www.arbredelespoir.com/">Arbre de l'espoir</a></h2>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;
