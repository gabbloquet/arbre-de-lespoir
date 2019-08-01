import React, {Component} from 'react';
import styles from './missions.module.css';

class Missions extends Component {
    render() {
        return (
            <div className="missions">
                <h1>Missions de l'arbre de l'espoir</h1>
                <div className={ styles.cards }>
                    <div className={ styles.card }>
                        <h3>AGIR</h3>
                        <p>pour le respect du droit à une éducation et l’accès aux soins.</p>
                    </div>
                    <div className={ styles.card }>
                        <h3>SENSIBILISER</h3>
                        <p>mobiliser et influer pour que l’éducation soit un droit acquis.</p>
                    </div>
                    <div className={ styles.card }>
                        <h3>ACCOMPAGNER</h3>
                        <p>les populations, maîtres d’œuvre de leurs projets éducatifs.</p>
                    </div>
                    <div className={ styles.card }>
                        <h3>PARTICIPER</h3>
                        <p>à l’éducation et l’émancipation des populations.</p>
                    </div>
                    <div className={ styles.card }>
                        <h3>CREER</h3>
                        <p>les conditions d’une croissance économique pour l’amélioration des conditions de vie.</p>
                    </div>
                    <div className={ styles.card }>
                        <h3>PROMOUVOIR</h3>
                        <p>une éducation ouverte sur le monde, sa diversité et ses cultures.</p>
                    </div>
                    <div className={ styles.card }>
                        <h3>DÉVELOPPER</h3>
                        <p>le principe de solidarité et d’échanges.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Missions;
