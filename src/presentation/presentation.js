import React, { Component } from 'react';
import avatar from './img/img_avatar.png';
import styles from './presentation.css';

class Presentation extends Component {
    render() {
        return (
            <div className={Presentation}>
                <h1>Presentation</h1>
                <h2>L'histoire de notre association</h2>
                <p>L’ARBRE DE L’ESPOIR (ADE) est une association loi 1901. L’ADE a été créée en décembre 2018 par un groupe d'amis sensible à la situation des migrants en France et la précarité en Afrique. L’ADE a pour objectif d’aider les personnes à vivre dignement dans leur environnement tout en assurant une perspective d’avenir pour eux même et leurs enfants.</p>
                <h2>Les différents membres de l'association</h2>
                <div className={ styles.cards }>
                    <div className={ styles.card }>
                        <img className={ styles.card } src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img className={ styles.card } src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img className={ styles.card } src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img className={ styles.card } src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                </div>
                <h2>Mission de l'arbre de l'espoir</h2>
                <ul>
                    <li>AGIR pour le respect du droit à une éducation et l’accès aux soin</li>
                    <li>SENSIBILISER, mobiliser et influer pour que l’éducation soit un droit acquis</li>
                    <li>ACCOMPAGNER les populations, maîtres d’œuvre de leurs projets éducatifs</li>
                    <li>PARTICIPER à l’éducation et l’émancipation des populations</li>
                    <li>CREER les conditions d’une croissance économique pour l’amélioration des</li>
                    conditions de vie
                    <li>PROMOUVOIR une éducation ouverte sur le monde, sa diversité et ses cultures</li>
                    <li>DÉVELOPPER le principe de solidarité et d’échange</li>
                </ul>
            </div>
        );
    }
}

export default Presentation;