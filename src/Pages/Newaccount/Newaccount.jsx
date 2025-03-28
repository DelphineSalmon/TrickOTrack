import React, { useState } from "react";
import './newaccount.scss'

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
    <div className="createaccount">
        <div className="welcome">
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
      </div>
      <div className="create">
      <form onSubmit={handleSubmit}>
        <h2 className='title-create'>Créer un compte</h2>

        <label>
          Prénom :
          <input className='input'
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
          <input className='input'
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
          <input className='input'
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
          <input className='input'
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
          <input className='input'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label className='title-level'>
          Niveau en tricot :
          <select className='input-level'
            name="knittingLevel"
            value={formData.knittingLevel}
            onChange={handleChange}
            required
          >
            <option className="option" value="debutant">Débutant</option>
            <option className="option" value="intermediaire">Intermédiaire</option>
            <option className="option" value="expert">Expert</option>
          </select>
        </label>
        <br />

        <label>
        Instagram :
          <input className='input'
            type="url"
            name="instagramLink"
            value={formData.instagramLink}
            onChange={handleChange}
          />
        </label>
        <br />

        <button className='btn-create' type="submit">Créer mon compte</button>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;
