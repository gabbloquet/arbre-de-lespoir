import React from 'react';
import { useForm } from "react-hook-form";
import { sendMail } from "../../services/mail/mailSender";
import rib from "../../assets/img/rib.jpg";
import './dons.scss';

const Dons = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = formData => {
    sendMail(formData);
  }

  return (
    <section className="dons">
      <div className="cards">
          <div className="card">
              <h1>Nous rejoindre</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__group field">
                  <input type="text" className="form__field" placeholder="Nom" name="nom" ref={register({ required: true })}/>
                  <label htmlFor="nom" className="form__label">Nom</label>
                </div>
                {errors.nom && <span className="required-field">Veuillez renseigner cette information</span>}

                <div className="form__group field">
                  <input type="text" className="form__field" placeholder="Prénom" name="prenom" ref={register({ required: true })}/>
                  <label htmlFor="prenom" className="form__label">Prénom</label>
                </div>
                {errors.prenom && <span className="required-field">Veuillez renseigner cette information</span>}

                <div className="form__group field">
                  <input type="text" className="form__field" placeholder="Adresse" name="adresse" ref={register({ required: true })}/>
                  <label htmlFor="adresse" className="form__label">Adresse</label>
                </div>
                {errors.adresse && <span className="required-field">Veuillez renseigner cette information</span>}

                <div className="form__group field">
                  <input type="text" className="form__field" placeholder="Telephone" name="telephone" ref={register({ required: true })}/>
                  <label htmlFor="telephone" className="form__label">Telephone</label>
                </div>
                {errors.telephone && <span className="required-field">Veuillez renseigner cette information</span>}

                <div className="form__group field">
                  <input type="email" className="form__field" placeholder="Email" name="email" ref={register({ required: true })}/>
                  <label htmlFor="mail" className="form__label">Email</label>
                </div>
                {errors.email && <span className="required-field">Veuillez renseigner cette information</span>}

                <div className="form__group field">
                  <textarea className="form__field" placeholder="Laissez noius un message si vous le souhaitez" name="message" ref={register()}/>
                  <label htmlFor="message" className="form__label">Message</label>
                </div>

                <button type="submit" id="validate-button">
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
    </section>
  );
}

export default Dons;
