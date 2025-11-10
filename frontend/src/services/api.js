import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na chamada da API:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
