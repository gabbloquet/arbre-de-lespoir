import React from "react";
import {useHistory} from "react-router-dom"
import { Heading, Link } from "@chakra-ui/react";
import Item from "./item";
import "./navigation.css";

const Navbar = () => {

  const history = useHistory();

  return (
      <div className="top-menu">
          <Heading as="h1" size="lg" color="white">
            <Link onClick={() => history.push("/")}>L'arbre de l'espoir</Link>
          </Heading>
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
      </div>
  );
}

export default Navbar;
