import React from 'react';
import classeConnectee from '../../assets/img/projets/classe_uni.PNG'
import sante from '../../assets/img/projets/poste de sante-min.jpg'
import soutienScolaire from '../../assets/img/projets/soutien_scolaire.jpg'
import daaras from '../../assets/img/projets/daaras.jpg'
import './home.scss'

const Home = () => {
    return (
        <section className="home">
            <div className='banner'>
                <div className='banner-title'>
                    <h1>Accueil</h1>
                    <h3><i>On ne peut pas aider tout le monde, mais tout le monde peut aider quelqu'un.</i></h3>
                </div>
            </div>
            <h2>Nos projets à venir</h2>
            <div className='cards'>

                <figure className='card'>
                    <img src={ classeConnectee } alt="Classe connectée"/>
                    <div className='date'>
                        <span>Fin</span>
                        <span>2019</span>
                    </div>
                    <figcaption>
                        <h3>Classe universelle connectée (Sénégal)</h3>
                        <p><i>Construction d'un espace numérique connecté dans l'école élémentaire SBM Gossas.</i></p>
                        <p><b>Objectifs : </b> Offrir une éducation de qualité avec l'initiation au développement durable et encourager la scolarisation des filles.</p>
                    </figcaption>
                    <div className='hover'>
                        <i className="ion-android-open"/>
                    </div>
                </figure>

                <figure className='card'>
                    <img src={ soutienScolaire } alt="Soutien scolaire"/>
                    <div className='date'>
                        <span>Courant</span>
                        <span>2020</span>
                    </div>
                    <figcaption>
                        <h3>Soutien scolaire et action contre le décrochage scolaire</h3>
                        <p><i>A REVOIR</i></p>
                        <p><b>Objectifs : </b> Lutter contre les échecs / abandons scolaire. Donner de l'ambition professionnel aux enfants en difficulté.</p>
                    </figcaption>
                    <div className='hover'>
                        <i className="ion-android-open"/>
                    </div>
                </figure>


                <figure className='card'>
                    <img src={ daaras } alt="Daaras"/>
                    <div className='date'>
                        <span>Courant</span>
                        <span>2020</span>
                    </div>
                    <figcaption>
                        <h3>Daara's school (Sénégal)</h3>
                        <p><i>Modernisation et daaras grace à une education inclusive</i></p>
                        <p><b>Objectifs : </b> Offrir un avenir meilleur aux jeunes talibés, leur permettre de bénéficier d'une formation complète pour s'insérer facilement dans le monde du travail.</p>
                    </figcaption>
                    <div className='hover'>
                        <i className="ion-android-open"/>
                    </div>
                </figure>


                <figure className='card'>
                    <img src={ sante } alt="Prévention santé"/>
                    <div className='date'>
                        <span>Courant</span>
                        <span>2020</span>
                    </div>
                    <figcaption>
                        <h3>Prévention santé</h3>
                        <p><i>Campagnes de prévention contre les maladies chroniques non transmissibles et la malnutrition</i></p>
                        <p><b>Objectifs : </b> Lutter contre les maladies chroniques et la malnutrition</p>
                    </figcaption>
                    <div className='hover'>
                        <i className="ion-android-open"/>
                    </div>
                </figure>
            </div>
        </section>
    );
}

export default Home;
