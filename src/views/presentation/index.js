import React from 'react';
import equipe from "../../assets/img/portraits/equipe-min.JPG";
import './presentation.scss'

const Presentation = () => {
    return (
        <div className='presentation'>
            <h1>Presentation</h1>
            <p className='descriptif' >Axel, comme tous les jeunes migrants rencontrés ont quitté leurs pays à la quête d’un avenir meilleur et surtout pour subvenir aux besoins de leurs familles malgré les risques.</p>
            <p className='descriptif' >Ensemble, nous avons décidé de planter L’ARBRE DE L’ESPOIR pour accompagner ces jeunes migrants dans leur insertion sociale. L’ADE a pour vocation de lutter contre la précarité.</p>
            <img src={ equipe } alt="equipe"/>
        </div>
    );
}

export default Presentation;
