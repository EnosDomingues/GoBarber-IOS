import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333', // IOS URL
  // baseURL: 'http://10.0.2.2:3333', // Android URL
  baseURL: 'http://192.168.0.4:3333', // Android / IOS IP local
});

export default api;
