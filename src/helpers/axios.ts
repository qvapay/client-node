import axios from 'axios';

const qvapayAPI = axios.create({
  baseURL: 'https://qvapay.com/api',
  headers: {
    Accept: 'application/json',
  },
});

export default qvapayAPI;
