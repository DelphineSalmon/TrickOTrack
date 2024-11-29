import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './connexion.scss'

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
      
        <div className='identification'>
              <div className='welcome'>
            <h1 className='title-welcome'>Ravie de vous revoir ! 🧶</h1>
            <p className='text-welcome'>Connectez-vous pour retrouver :<br/>
✨ Vos projets en cours et terminés,<br/>
🧵 Votre inventaire de laines et d'aiguilles,<br/>
📋 Vos envies et idées de futurs ouvrages,<br/>
📊 Votre compteur de rang toujours à jour.<br/>

Prêt(e) à continuer votre aventure tricot ? 💖</p>
        </div>
        <div className='login'>
            <h2 className='title-login'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mail-login'>
                    <label className='email' htmlFor="email">Email</label>
                    <input className='input'
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='psd-login'>
                    <label className='password' htmlFor="password">Mot de passe</label>
                    <input className='input'
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='btn-login' type="submit">S'inscrire</button>
            </form>
            <p className='no-account'>
                Je n'ai pas de compte <Link className='link-noaccount' to="/login">Créer un compte</Link>
            </p>
            </div>
        </div>
    );
}

export default SignupForm;
