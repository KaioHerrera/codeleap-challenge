import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

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
