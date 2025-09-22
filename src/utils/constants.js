const API_URL = 'http://localhost:3000';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  PROJECT: `${API_URL}/api/projets`,
};

export const APP_ROUTES = {
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  ADD_PROJECT: '/Ajouter',
  PROJECT: '/project/:id',
  UPDATE_PROJECT: 'project/modifier/:id',
};
