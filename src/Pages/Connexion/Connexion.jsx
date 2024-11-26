import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Ajoute ici la logique pour envoyer les données au backend ou valider l'inscription
    };

    return (
      
        <div>
              <div>
            <h1>Ravie de vous revoir ! 🧶</h1>
            <p>Connectez-vous pour retrouver :<br/>
✨ Vos projets en cours et terminés,<br/>
🧵 Votre inventaire de laines et d'aiguilles,<br/>
📋 Vos envies et idées de futurs ouvrages,<br/>
📊 Votre compteur de rang toujours à jour.<br/>

Prêt(e) à continuer votre aventure tricot ? 💖</p>
        </div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
            <p>
                Je n'ai pas de compte <Link to="/login">Créer un compte</Link>
            </p>
        </div>
    );
}

export default SignupForm;
