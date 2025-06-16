import React, { useState } from "react";

const Currentproject = () => {
  const [formData, setFormData] = useState({
    title: "",
    designer: "",
    categorie: "",
    fil: "",
    langue: "",
    aiguilles: "",
    taille: "",
    échantillon: true,
    difficulté: "debutant",
    image: null,
    note: ""
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData((prevData) => ({ ...prevData, image: file }));
      setPreview(URL.createObjectURL(file)); // aperçu de l’image
    } else if (type === "checkbox") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Formulaire soumis !");
  };

  return (
    <div className="createdesire">
      <div className="welcome">
        <h1 className="title-welcome">Enregistrer un nouveaux projet ! </h1>
      </div>

      <div className="create">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>
            Titre :
            <input
              className="input"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Designer :
            <input
              className="input"
              type="text"
              name="designer"
              value={formData.designer}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Catégorie :
            <input
              className="input"
              type="text"
              name="categorie"
              value={formData.categorie}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Fil :
            <input
              className="input"
              type="text"
              name="fil"
              value={formData.fil}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Langue :
            <input
              className="input"
              type="text"
              name="langue"
              value={formData.langue}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Aiguilles :
            <input
              className="input"
              type="text"
              name="aiguilles"
              value={formData.aiguilles}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Taille :
            <input
              className="input"
              type="text"
              name="taille"
              value={formData.taille}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className="title-level">
            Difficulté :
            <select
              className="input-level"
              name="difficulté"
              value={formData.difficulté}
              onChange={handleChange}
              required
            >
              <option className="option" value="debutant">
                Débutant
              </option>
              <option className="option" value="intermediaire">
                Intermédiaire
              </option>
              <option className="option" value="expert">
                Expert
              </option>
            </select>
          </label>
          <br />

          <label>
            Echantillon ?
            <input
              type="checkbox"
              name="échantillon"
              checked={formData.échantillon}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Ajouter une image :
            <input
              className="input"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
          <br />

          <label className="title-statut">
            Statut:
            <select
              className="input-statut"
              name="statut"
              value={formData.statut}
              onChange={handleChange}
              required
            >
              <option className="option" value="envie">
                Envie
              </option>
              <option className="option" value="encours">
                En cours
              </option>
              <option className="option" value="fini">
                Terminé
              </option>
            </select>
          </label>
          <br/>

          <label>
            Notes :
            <input
              className="input"
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          {preview && (
            <div style={{ margin: "10px 0" }}>
              <p>Aperçu :</p>
              <img
                src={preview}
                alt="aperçu"
                style={{ maxWidth: "200px", borderRadius: "8px" }}
              />
            </div>
          )}

          <button className="btn-create" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Currentproject;
