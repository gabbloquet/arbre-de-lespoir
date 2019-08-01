import React, { Component } from 'react';
import avatar from './img/img_avatar.png';
import styles from './presentation.module.css';

class Presentation extends Component {
    render() {
        return (
            <div className={ styles.presentation }>
                <h1>Presentation</h1>
                <h2>L'histoire de notre association</h2>
                <p>L’ARBRE DE L’ESPOIR (ADE) est une association loi 1901. L’ADE a été créée en décembre 2018 par un groupe d'amis sensible à la situation des migrants en France et la précarité en Afrique. L’ADE a pour objectif d’aider les personnes à vivre dignement dans leur environnement tout en assurant une perspective d’avenir pour eux même et leurs enfants.</p>
                <div className={ styles.cards }>
                    <div className={ styles.card }>
                        <h2>L'icône de l'association</h2>
                        <img src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>LY Aly Sileymane</b></h4>
                            <p>Icône</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <h2>Soutien de l'association</h2>
                        <img  src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>ADJOVI BOCO Jimmy</b></h4>
                            <p>Ex footballeur professionnel, Président d'association & Membre du CPA</p>
                        </div>
                    </div>
                </div>
                <h2>Les autres membres de l'association</h2>
                <div className={ styles.cards }>
                    <div className={ styles.card }>
                        <img  src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>LY Moustapha</b></h4>
                            <p>Président</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img  src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4>SANKARA Issa</h4>
                            <p>Secrétaire Général</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img  src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>KABA Fatoumata</b></h4>
                            <p>Trésorière</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img  src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>SOW Banel</b></h4>
                            <p>Chargée de communication</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img  src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>ROBLEH FARAH Hassan</b></h4>
                            <p>Chargé de projets</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img  src={ avatar } alt="Avatar"/>
                        <div className={ styles.container }>
                            <h4><b>BLOQUET Gabin</b></h4>
                            <p>Chargé de communication externe & Développeur</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Presentation;
