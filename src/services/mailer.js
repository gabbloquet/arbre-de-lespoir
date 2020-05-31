import { Email } from "./smtp";

export default function sendEmail(contenu) {
  Email.send({
    Host: "smtp.gmail.com",
    Username : "adenoreplymailer@gmail.com",
    Password : "ArbreDeLespoir",
    To : 'gabbloquet@hotmail.fr',
    From : "adenoreplymailer@gmail.com",
    Subject : "Email provenant du site Web",
    Body : contenu,
  }).then(
    message => alert("mail sent successfully")
  );
}
