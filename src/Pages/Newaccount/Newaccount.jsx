import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    password: "",
    knittingLevel: "debutant",
    instagramLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Formulaire soumis !");
  };

  return (
    <div>
      <h1 className="title-welcome">Bienvenue dans l'univers du tricot ! 🧶✨</h1>
      <p className="text-welcome">
        Créez votre compte dès maintenant pour :<br />
        ✔️ Enregistrer vos projets terminés et en cours 🧵<br />
        ✔️ Suivre votre inventaire de laine et d'aiguilles 🧺<br />
        ✔️ Gérer vos envies de futurs projets 🌟<br />
        ✔️ Utiliser un compteur de rang pratique 🧮<br />
        <br />
        👉 Rejoignez notre communauté passionnée et partagez votre amour du tricot,
        quel que soit votre niveau : débutant, intermédiaire ou expert ! 💡💛
        <br />
        <br />
        Prêt(e) à vous lancer ? Remplissez le formulaire ci-dessous pour
        commencer votre aventure tricotée ! 🖱️
      </p>

      <form onSubmit={handleSubmit}>
        <h2>Créer un compte</h2>

        <label>
          Prénom :
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Nom :
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Ville :
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Mot de passe :
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Niveau en tricot :
          <select
            name="knittingLevel"
            value={formData.knittingLevel}
            onChange={handleChange}
            required
          >
            <option value="debutant">Débutant</option>
            <option value="intermediaire">Intermédiaire</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <br />

        <label>
          Lien Instagram :
          <input
            type="url"
            name="instagramLink"
            value={formData.instagramLink}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Créer mon compte</button>
      </form>
    </div>
  );
};

export default SignupForm;
