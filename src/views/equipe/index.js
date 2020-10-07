import React from 'react';
import styles from './equipe.module.css';
import Fatoumata from "../../assets/img/portraits/FIFI-min.JPG";
import Aly from "../../assets/img/portraits/ALY-min.JPG";
import Issa from "../../assets/img/portraits/ISSA-min.JPG";
import Moustapha from "../../assets/img/portraits/MOUSTAPHA-min.JPG";

const Equipe = () => {
    return (
        <div className={ styles.equipe }>
            <h2>Les membres fondateurs de notre association</h2>
            <div className={ styles.cards }>
                <div className={ styles.flipCard }>
                    <div className={ styles.flipCardInner }>
                        <div className={ styles.flipCardFront }>
                            <img  src={ Moustapha } alt="Moustapha"/>
                            <h4><b>LY Moustapha</b></h4>
                            <p>Président</p>
                        </div>
                        <div className={ styles.flipCardBack }>
                            <h4><b>LY Moustapha</b></h4>
                            <p>Je suis arrivé en France en 2002 pour poursuivre mes études ensuite j’ai intégré VINCI en tant qu’Ingénieur structures Chargé d’Etudes. Et je suis gérant de mon Bureau d’Etudes structures depuis 2013. Fonder L’ADE est pour moi l’expression pratique de ma détermination et de ma passion de venir en aide aux personnes démunies en innovant la façon de faire. Bien sûr, le travail collégial en équipe conjugué aux soutiens des sympathisants et donateurs sont indispensables pour la réussite de nos objectifs. Ensemble repoussons les inerties de la pauvreté.</p>
                        </div>
                    </div>
                </div>
                <div className={ styles.flipCard }>
                    <div className={ styles.flipCardInner }>
                        <div className={ styles.flipCardFront }>
                            <img  src={ Issa } alt="Issa"/>
                            <h4><b>SANKARA Issa</b></h4>
                            <p>Secrétaire général</p>
                        </div>
                        <div className={ styles.flipCardBack }>
                            <h4><b>SANKARA Issa</b></h4>
                            <p>Ne pas rester spectateur face à la détresse, la souffrance et l’injustice, où qu’elles soient dans le monde, c’est le moteur qui a guidé ma participation à la fondation de l’Arbre de l’Espoir.
                                Dès l’âge de 14ans, j’ai commencé à militer dans des associations pour l’aide sociale. J’ai été bénévole et occupé des postes de président ou secrétaire général au cours de ces dernières années.
                                Né en 1988, j’ai vécu 11ans en Libye, 7 ans au Burkina Faso avant d’arriver en France en 2007. Diplômé en Master Génie Civil, je suis actuellement Chef de projets en Ouvrage d’art à la SNCF.
                                « L’esprit de liberté, de dignité, de compter sur ses propres forces doit souffler du Nord au Sud, du Sud au Nord et franchir allègrement les frontières. » Thomas SANKARA</p>
                        </div>
                    </div>
                </div>
                <div className={ styles.flipCard }>
                    <div className={ styles.flipCardInner }>
                        <div className={ styles.flipCardFront }>
                            <img  src={ Fatoumata } alt="Fatoumata"/>
                            <h4><b>KABA Fatoumata</b></h4>
                            <p>Trésorière</p>
                        </div>
                        <div className={ styles.flipCardBack }>
                            <h4><b>KABA Fatimata</b></h4>
                            <p>La lutte contre la précarité et les difficultés sociales partout dans le monde sont les raisons principales qui m’ont poussé à m’engager pour d'autres au nom de la solidarité. Traductrice trilingue (EN-FR-ESP) de formation, j’ai choisi d’être utile à autrui et à la société grâce à un engagement associatif qui repose sur des valeurs essentielles telles que la fraternité et la solidarité, valeurs que j’ai pu promouvoir au sein de l’Arbre de l’Espoir. A l’aube de mes 28 ans, je suis de plus en plus persuadée qu’il est du devoir de chacun(e) d’agir, selon ses capacités, en faveur de ceux et celles qui ont besoin d’aide partout dans le monde en prenant part à tout type de décisions et d’actions visant notamment à favoriser la santé, l’éducation, la protection sociale, particulièrement pour les jeunes, les migrants et autres personnes vulnérables.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2>L'icône de l'association</h2>
            <div className={ styles.cards }>
                <div className={ styles.flipCard }>
                    <div className={ styles.flipCardInner }>
                        <div className={ styles.flipCardFront }>
                            <img  src={ Aly } alt="Aly"/>
                            <h4><b>LY Aly Sileymane</b></h4>
                            <p>Chargé de communication</p>
                        </div>
                        <div className={ styles.flipCardBack }>
                            <h4><b>LY Aly Sileymane</b></h4>
                            <p>J’ai démarré mon apprentissage du français et ma scolarité à l’âge de 13 ans, lors de mon admission à l’Institut Diambars de Sally au Sénégal. Avant cette date j’étais un talibé (enfant de la rue). Lorsque j’intègre le centre diambars, je ne savais ni lire ni écrire. Diambars est un centre de formation de sport et études qui trouve au Sénégal. L’association a été créée par les anciens footballeurs professionnels Jimmy ADJOVI-BOCO, Bernard LAMA,Patrick VIEIRA et Saer Seck. A force de détermination et grâce à l’encadrement des équipes de l’Institut et à l’attention des fondateurs, j'ai su passer les épreuves pour me retrouver aujourd'hui en école d'ingénieur en informatique.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equipe;
