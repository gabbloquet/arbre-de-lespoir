import React from "react";
import arbreLogo from "../../assets/img/arbre_logo.png";
import "./contact.scss";

const Contact = () => {
  return (
    <section className='contact'>
      <h1>Nous contactez</h1>
      <div className='card'>
        <img className='logo' src={arbreLogo} alt="Arbre de l'espoir"/>
        <div className='informations'>
          <h2>Courriel : <a href="mailto:larbredelespoir@gmail.com">larbredelespoir@gmail.com</a></h2>
          <h2>Numero du secrétaire générale : +33 6 42 55 83 49</h2>
          <h2>Numero de téléphone : +33 7 82 94 62 13</h2>
          <h2>Website : <a href="https://www.larbredelespoir.fr/">Arbre de l'espoir</a></h2>
        </div>
      </div>
    </section>

  );
};

export default Contact;
