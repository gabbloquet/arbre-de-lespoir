import React from 'react';
import rib from "../../assets/img/rib.jpg";
import styles from './dons.module.css';

const Dons = () => {
    return (
        <div className={ styles.cards }>
            <div className={ styles.card }>
                <h1>Nous rejoindre</h1>
                <form>
                    <p>Je soussignée Mme –M. Nom……………………………………………..</p>
                    <p>Prénom………………….……………………………………………………….</p>
                    <p>Adresse ……………………………………………………………………….</p>
                    <p>Tél………………………………………………………………………….</p>
                    <p>Mail…………………………………………………………………………...</p>
                </form>
                <h3>Remplissez ce formulaire et envoyez le à notre <a href="mailto:larbredelespoir@gmail.com"> larbredelespoir@gmail.com</a></h3>
            </div>
            <div className={ styles.card }>
                <h1>Faire un don</h1>
                <h2>Vous pouvez faire un don à l'association en nous faisant à virement au RIB ci-dessous :  </h2>
                <a href={rib} download={rib}>Télécharger le RIB</a>
                <h2>Toute l'équipe vous remercie.</h2>
            </div>
        </div>
    );
}

export default Dons;
