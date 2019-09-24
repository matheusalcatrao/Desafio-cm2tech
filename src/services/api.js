import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://frontendapi.cm2tech.com.br',
});

export default api;
