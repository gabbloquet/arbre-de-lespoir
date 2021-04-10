import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import Item from "./item";
import Lead from "./lead";
import "./navigation.css";

const Navbar = ({menu_class}) => {
    const setToggleTopMenuClass = () => {
        if (menu_class === '') {
            menu_class= 'toggled'
        } else {
            menu_class= ''
        }
    };

    let top_menu_class = `top-menu ${menu_class}`;

    return (
        <div className={top_menu_class}>
            <Lead text="L'arbre de l'espoir" />
            <div className="right">
                <Item link='/' name='Accueil'/>
                <Item link='/presentation' name='Presentation'/>
                {/*<Item link='/demarche' name='Notre demarche'/>*/}
                <Item link='/equipe' name="L'équipe"/>
                {/*<Item link='/actions' name='Nos actions'/>*/}
                {/*<Item link='/partenaires' name='Nos partenaires'/>*/}
                <Item link='/dons' name='Nous rejoindre / Faire un don'/>
                <Item link='/contact' name='Contactez-nous'/>
            </div>
            <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={setToggleTopMenuClass}/>
            <div className='clear-fix' />
        </div>
    );
}

export default Navbar;
