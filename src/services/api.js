import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3d24-46-109-190-129.ngrok.io/',
});

export default api;
