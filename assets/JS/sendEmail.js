document.addEventListener("DOMContentLoaded", function () {
    // Initialisation de EmailJS avec ta Public Key
    emailjs.init("FPeLLPxXyAlys4pOi"); // Remplace par ta vraie Public Key

    // Sélection du formulaire
    document.getElementById("contact__form").addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche le rechargement de la page

      // Récupération des valeurs du formulaire
      let user_name = document.getElementById("contact__form-name").value;
      let user_email = document.getElementById("contact__form-email").value;
      let user_project = document.getElementById("contact__project").value;

      // Vérification que tous les champs sont remplis
      if (!user_name || !user_email || !user_project) {
        alert("Merci de remplir tous les champs !");
        return;
      }

      // Objet contenant les valeurs du formulaire, en lien avec ton template EmailJS
      let templateParams = {
        to_name: "Marius",  // Remplace "Destinataire" par le nom de la personne à qui tu envoies
        from_name: user_name,
        message: user_project,
        reply_to: user_email
      };

      // Envoi de l'email via EmailJS
      emailjs.send("service_n5f1u29", "template_kump4qt", templateParams)
        .then(function (response) {
          alert("Email envoyé avec succès !");
          document.getElementById("contact__form").reset(); // Réinitialiser le formulaire
        }, function (error) {
          alert("Erreur lors de l'envoi : " + JSON.stringify(error));
        });
    });
  });