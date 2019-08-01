import React, { Component } from 'react';
import  styles from './home.module.css'

class Home extends Component {

    render() {

        return (
            <div className="Home">
                <div className={  styles.banner }>
                    <div className= {  styles.bannerTitle }>
                        <h1>L'arbre de l'espoir</h1>
                        <h2>Association à but non lucratif. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ligula, luctus eu odio ut, accumsan vehicula est. Integer ullamcorper interdum ligula nec mollis. Pellentesque id magna ante. </h2>
                    </div>
                </div>
                <div className= {  styles.cards }>

                    <figure className={  styles.card }>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample13.jpg" alt="pr-sample13"/>
                        <div className={  styles.date }>
                            <span>Fin</span>
                            <span>2019</span>
                        </div>
                        <figcaption>
                            <h3 className={  styles.h3 }>Classe universelle connectée</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ligula, luctus eu odio ut.</p>
                        </figcaption>
                        <div className={  styles.hover }>
                            <i className="ion-android-open"/>
                        </div>
                    </figure>


                    <figure className={  styles.card }>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample13.jpg" alt="pr-sample13"/>
                        <div className={  styles.date }>
                            <span>Courant</span>
                            <span>2020</span>
                        </div>
                        <figcaption>
                            <h3 className={  styles.h3 }>Tournée médicale de sensibilisation sur les maladies chroniques</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ligula, luctus eu odio ut.</p>
                        </figcaption>
                        <div className={  styles.hover }>
                            <i className="ion-android-open"/>
                        </div>
                    </figure>


                    <figure className={  styles.card }>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample13.jpg" alt="pr-sample13"/>
                        <div className={  styles.date }>
                            <span>Courant</span>
                            <span>2020</span>
                        </div>
                        <figcaption>
                            <h3 className={  styles.h3 }>Tournoi de foot migrants</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ligula, luctus eu odio ut.</p>
                        </figcaption>
                        <div className={  styles.hover }>
                            <i className="ion-android-open"/>
                        </div>
                    </figure>


                    <figure className={  styles.card }>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample13.jpg" alt="pr-sample13"/>
                        <div className={  styles.date }>
                            <span>Courant</span>
                            <span>2020</span>
                        </div>
                        <figcaption>
                            <h3 className={  styles.h3 }>Construction de puits  en milieu rural</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ligula, luctus eu odio ut.</p>
                        </figcaption>
                        <div className={  styles.hover }>
                            <i className="ion-android-open"/>
                        </div>
                    </figure>


                    <figure className={  styles.card }>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample13.jpg" alt="pr-sample13"/>
                        <div className={  styles.date }>
                            <span>Courant</span>
                            <span>2020</span>
                        </div>
                        <figcaption>
                            <h3 className={  styles.h3 }>Réfection de latrines</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ligula, luctus eu odio ut.</p>
                        </figcaption>
                        <div className={  styles.hover }>
                            <i className="ion-android-open"/>
                        </div>
                    </figure>


                    <figure className={  styles.card }>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample13.jpg" alt="pr-sample13"/>
                        <div className={  styles.date }>
                            <span>Date</span>
                            <span>à venir</span>
                        </div>
                        <figcaption>
                            <h3 className={  styles.h3 }>Soutien scolaire</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ligula, luctus eu odio ut.</p>
                        </figcaption>
                        <div className={  styles.hover }>
                            <i className="ion-android-open"/>
                        </div>
                    </figure>

                    <figure className={  styles.card }>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample13.jpg" alt="pr-sample13"/>
                        <div className={  styles.date }>
                            <span>Date</span>
                            <span>à venir</span>
                        </div>
                        <figcaption>
                            <h3 className={  styles.h3 }>Opération auprès des talibés au Sénégal</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis ligula, luctus eu odio ut.</p>
                        </figcaption>
                        <div className={  styles.hover }>
                            <i className="ion-android-open"/>
                        </div>
                    </figure>
                </div>
            </div>
        );
    }
}

export default Home;
