import React, { useState } from "react";

const Newdesire = () => {
  const [formData, setFormData] = useState({
    title: "",
    designer: "",
    categorie: "",
    fil: "",
    langue: "",
    challenge: "",
    difficulté: "debutant",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData((prevData) => ({ ...prevData, image: file }));
      setPreview(URL.createObjectURL(file)); // aperçu de l’image
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
        <h1 className="title-welcome">Enregistrer une envie ! 🧶✨</h1>
        <p className="text-welcome"></p>
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
            Challenge :
            <input
              className="input"
              type="text"
              name="challenge"
              value={formData.challenge}
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

export default Newdesire;
