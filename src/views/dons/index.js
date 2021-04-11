import React from 'react';
import { Heading, Link, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { sendMail } from '../../services/mail/mailSender';
import rib from '../../assets/img/rib.jpg';
import './dons.scss';

const Dons = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formData) => {
    sendMail(formData);
  };

  return (
    <section className="dons">
      <div className="cards">
        <div className="card">
          <Heading as="h2" size="lg" textAlign="center">
            Nous rejoindre
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Nom"
                name="nom"
                ref={register({ required: true })}
              />
              <label htmlFor="nom" className="form__label">
                Nom
              </label>
            </div>
            {errors.nom && (
              <span className="required-field">Veuillez renseigner cette information</span>
            )}

            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Prénom"
                name="prenom"
                ref={register({ required: true })}
              />
              <label htmlFor="prenom" className="form__label">
                Prénom
              </label>
            </div>
            {errors.prenom && (
              <span className="required-field">Veuillez renseigner cette information</span>
            )}

            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Adresse"
                name="adresse"
                ref={register({ required: true })}
              />
              <label htmlFor="adresse" className="form__label">
                Adresse
              </label>
            </div>
            {errors.adresse && (
              <span className="required-field">Veuillez renseigner cette information</span>
            )}

            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Telephone"
                name="telephone"
                ref={register({ required: true })}
              />
              <label htmlFor="telephone" className="form__label">
                Telephone
              </label>
            </div>
            {errors.telephone && (
              <span className="required-field">Veuillez renseigner cette information</span>
            )}

            <div className="form__group field">
              <input
                type="email"
                className="form__field"
                placeholder="Email"
                name="email"
                ref={register({ required: true })}
              />
              <label htmlFor="mail" className="form__label">
                Email
              </label>
            </div>
            {errors.email && (
              <span className="required-field">Veuillez renseigner cette information</span>
            )}

            <div className="form__group field">
              <textarea
                className="form__field"
                placeholder="Laissez noius un message si vous le souhaitez"
                name="message"
                ref={register()}
              />
              <label htmlFor="message" className="form__label">
                Message
              </label>
            </div>

            <button type="submit" id="validate-button">
              <span className="noselect">Valider</span>
              <div id="circle" />
            </button>
          </form>
        </div>
        <div className="card">
          <Heading as="h2" size="lg" textAlign="center">
            Faire un don
          </Heading>
          <Text mt="1em" mb="1em">
            Vous pouvez faire un don à l'association en nous faisant à virement au RIB ci-dessous :{' '}
          </Text>
          <Link href={rib} download={rib} textAlign="center" color="blue">
            Télécharger le RIB
          </Link>
          <Text fontSize="md" mt="1em">
            Toute l'équipe vous remercie.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Dons;
