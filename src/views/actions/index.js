import React from 'react';
import classNames from 'classnames'
import './actions.scss';

const Actions = () => {
    const containerLeft = classNames('container', 'left');
    const containerRight= classNames('container', 'right');

    return (
        <section className='actions'>
            <h1>Actions</h1>
            <div className='timeline'>
                <div className={ containerLeft }>
                    <div className='content'>
                        <h2>Juillet 2019 : Opération Clos- couverts</h2>
                        <p>500€</p>
                        <p>Réfection de la toiture et des fenêtre d’une école privée au village de Daboura (Burkina Faso).</p>
                        <h1>!! METTRE LES PHOTOS !!</h1>
                    </div>
                </div>
                <div className={ containerRight }>
                    <div className='content'>
                        <h2>Juin 2019 : Dons de matériels médicaux</h2>
                        <p>500€</p>
                        <p>Envois de matériels médicaux d’un dispensaire au village de Daboura.</p>
                        <h1>!! METTRE LES PHOTOS !!</h1>
                    </div>
                </div>
                <div className={ containerLeft }>
                    <div className='content'>
                        <h2>Mai 2019 : Opération Panier Humanitaire</h2>
                        <p>1200€</p>
                        <p>Distribution de panier (riz, laits, eaux, sucres, dattes, huiles).</p>
                        <h1>!! METTRE LES PHOTOS !!</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Actions;
