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

const exchange = async function (id: string): Promise<any> {
  const option = {
    method: 'GET',
    url: `v1/exchange/info?id=${id}`,
    headers: {
      'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
    },
  };
  // const { status, data } = await http.request(option);
  return await http.request(option);
};

const currency = async function (coins: string): Promise<any> {
  const option = {
    method: 'GET',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
    params: {
      symbol: coins,
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
    },
  };
  const { status, data } = await http.request(option);
  console.log('status :>> ', status, Object.keys(data));
  const result = {};
  for (const key in data) {
    result[key] = data[key].quote['USD'];
  }
  return result;
};

const getAllCoins = async function ({ start, limit }): Promise<any> {
  const option = {
    method: 'GET',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
    params: {
      start,
      limit,
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
    },
  };
  const { status, data } = await http.request(option);
  console.log('{ status, data }  :>> ', { status, data });
  return data;
};

export { exchange, currency, getAllCoins };
