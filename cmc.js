require('dotenv').config();

// eslint-disable-next-line node/no-extraneous-require
const axios = require('axios');
const http = axios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
});

// Add a response interceptor
http.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

async function main() {
  const option = {
    method: 'GET',
    url: 'v1/exchange/info?id=2',
    headers: {
      'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
    },
  };

  console.log('option :>> ', option);
  const { status, data } = await http.request(option);
  console.log('result :>> ', status, data);
}

main();
