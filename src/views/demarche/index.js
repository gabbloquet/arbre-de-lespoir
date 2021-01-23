import React from 'react';
import './demarche.scss';

const Demarche = () => {
    return (
        <section className='demarche'>
            <h1>Notre démarche</h1>
            <div className='card'>
                <p>Nous pensons que ce sont les populations elles-mêmes qui détiennent les solutions à leurs problèmes. C’est pourquoi, nous adoptons une démarche d’écoute et d’accompagnement des acteurs locaux.</p>
                <p>Nos projets sont menés par des relais bénévoles et des partenaires locaux originaires des pays d’intervention et sont appuyés par des associations partenaires locales. Le but : favoriser l’autonomie des populations et celle de l’ensemble des acteurs qui gravitent autour d’eux (associations locales, parents d’élèves, enseignants, collectivités…)</p>
                <p>Nous appliquons ce principe d’échange et de partenariat au sein même de notre structure : L’ARBRE DE L’ESPOIR, c’est avant tout un réseau d’hommes et de femmes qui mettent en commun leurs moyens, idées et compétences.</p>
            </div>
            <h1>Nos valeurs</h1>
            <div className='card'>
                <div className='valeurs'>
                    <div className='valeur'>Le respect et la solidarité</div>
                    <div className='valeur'>L’innovation</div>
                    <div className='valeur'>L’intégrité</div>
                    <div className='valeur'>L’autonomie</div>
                    <div className='valeur'>La mutualisation des ressources</div>
                </div>
            </div>
        </section>
    );
}

export default Demarche;
