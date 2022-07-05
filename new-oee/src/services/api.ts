import axios from 'axios';

// export const socketServer = "http://senaisolucoes.com.br:2034";
// const baseURL = 'http://senaisolucoes.com.br:2033';


// export const socketServer = "http://192.168.1.191:2034";
const baseURL = 'http://192.168.1.191:2033'; 


// cria uma conexão
const api = axios.create({
    baseURL,
    timeout: 1000 * 10,
    
  });

api.interceptors.request.use(
    function (config) {
      if (config.method === 'post') {
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
);


api.interceptors.response.use(
    function (response) {

      return response;
    },
    function (error) {

      return Promise.reject(error);
    },
  );


export default api;