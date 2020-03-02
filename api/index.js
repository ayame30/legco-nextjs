const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.g0vhk.io',
  timeout: 1000,
});

export function delayResponse(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, Math.floor(Math.random() * 500) + 500);
  });
}

export default instance;
