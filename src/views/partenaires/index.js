import React from 'react';
import avatar from "../presentation/img/img_avatar.png";

const Partenaire = () => {
    return (
        <div className="partenaires">
            <h1>Nos partenaires</h1>
            <h2>### PARTENAIRE 1 ###</h2>
            <h2>### PARTENAIRE 2 ###</h2>
            <h2>### PARTENAIRE 3 ###</h2>

            <div className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img  src={ avatar } alt="Avatar"/>
                        <h4><b>ADJOVI BOCO Jimmy</b></h4>
                        <p>Ex footballeur professionnel, Président d'association & Membre du CPA</p>
                    </div>
                    <div className='flip-card-back'>
                        <h4><b>ADJOVI BOCO Jimmy</b></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

            <div className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img  src={ avatar } alt="Avatar"/>
                        <h4><b>BLOQUET Gabin</b></h4>
                        <p>Chargé de communication externe & Développeur</p>
                    </div>
                    <div className='flip-card-back'>
                        <h4><b>BLOQUET Gabin</b></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partenaire;
