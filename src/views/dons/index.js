import React from 'react';
import rib from "../../assets/img/rib.jpg";
import './dons.css';
import { useForm } from "react-hook-form";

const Dons = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
  }

  return (
      <div className="cards">
          <div className="card">
              <h1>Nous rejoindre</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__group field">
                  <input type="text" className="form__field" placeholder="Nom" name="nom" ref={register({ required: true })}/>
                  <label htmlFor="nom" className="form__label">Nom</label>
                </div>
                {errors.nom && <span>This field is required</span>}

                <div className="form__group field">
                  <input type="text" className="form__field" placeholder="Prénom" name="prenom" ref={register({ required: true })}/>
                  <label htmlFor="prenom" className="form__label">Prénom</label>
                </div>
                {errors.prenom && <span>This field is required</span>}

                <div className="form__group field">
                  <input type="text" className="form__field" placeholder="Adresse" name="adresse" ref={register}/>
                  <label htmlFor="adresse" className="form__label">Adresse</label>
                </div>

                <div className="form__group field">
                  <input type="text" className="form__field" placeholder="Telephone" name="telephone" ref={register}/>
                  <label htmlFor="telephone" className="form__label">Telephone</label>
                </div>

                <div className="form__group field">
                  <input type="email" className="form__field" placeholder="Email" name="Email" ref={register}/>
                  <label htmlFor="mail" className="form__label">Email</label>
                </div>
                {errors.mail && <span>This field is required</span>}

                <button type="submit" id="btn">
                  <span className="noselect">Valider</span>
                  <div id="circle"/>
                </button>

              </form>
              <h3>Remplissez ce formulaire et envoyez le à notre <a href="mailto:larbredelespoir@gmail.com"> larbredelespoir@gmail.com</a></h3>
          </div>
          <div className="card">
              <h1>Faire un don</h1>
              <h2>Vous pouvez faire un don à l'association en nous faisant à virement au RIB ci-dessous :  </h2>
              <a href={rib} download={rib}>Télécharger le RIB</a>
              <h2>Toute l'équipe vous remercie.</h2>
          </div>
      </div>
  );
}

export default Dons;
