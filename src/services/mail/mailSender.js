import * as emailjs from "emailjs-com";

export const mailFormatinginformations = (formData) => {
  return "<p>Voici les informations de la personne souhaitant nous rejoindre : </p>" +
    "<p>Nom : " + formData.nom + "</p>" +
    "<p>Prenom : " + formData.prenom + "</p>" +
    "<p>Adresse : " + formData.adresse + "</p>" +
    "<p>Telephone : " + formData.telephone + "</p>" +
    "<p>Mail : " + formData.email + "</p><br/>" +
    "<p>Avec le message suivant : " + formData.message+ "</p>";
}

export const sendMail = (formData) => {
  emailjs.init("user_MK9Az5kguMKH2q49QqzwJ");
  emailjs
    .send("adesiteweb_gmail_com", "template_nuRdr9Y8", {"from":formData.nom + " " +formData.prenom,"content":mailFormatinginformations(formData)})
    .then(res => {alert('Votre mail a bien été envoyé, nous vous recontacterons dans les plus bref délais.')})
    .catch(err => {alert("Une erreur est survenue lors de l'envoi de l'email, vous pouvez envoyer vos informations directement à notre adresse mail larbredelespoir@gmail.com")});
}
