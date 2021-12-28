require('dotenv').config();
// const httpsProxyAgent = require('https-proxy-agent');

// eslint-disable-next-line node/no-extraneous-require
const axios = require('axios');
const http = axios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 10000,
  // httpsAgent: new httpsProxyAgent('http://localhost:7890'),
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

const fixPrice = (price: number): string => {
  if (price > 100) {
    return price.toFixed();
  } else if (price > 10) {
    return price.toFixed(1);
  } else if (price > 1) {
    return price.toFixed(2);
  }
  else if (price > 0.1) {
    return price.toFixed(3);
  }
  else if (price > 0.001) {
    return price.toFixed(4);
  } else {
    return price.toFixed(8);
  }
}

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
    url: 'v1/cryptocurrency/quotes/latest',
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
    url: 'v1/cryptocurrency/map',
    params: {
      start,
      limit,
      sort: 'id',
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
    },
  };
  const { data } = await http.request(option);
  data.map((item: any) => {
    if (item.platform) {
      item.platform = JSON.stringify(item.platform);
    }
  });
  return data;
};

const CMC_queryAllPortfolio = async (cmc_jwt: string) => {
  const option = {
    url: 'https://api.coinmarketcap.com/asset/v3/portfolio/group/queryAll',
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + cmc_jwt,
    },
    data: {},
  };
  const { data } = await axios.request(option);
  return data;
};

const CMC_queryStatistics = async (cmc_jwt: string, portfolioSourceId: string, cryptoUnit=2781, fiatUnit=2781) => {
  const option = {
    url: 'https://api.coinmarketcap.com/asset/v3/portfolio/queryStatistics',
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + cmc_jwt,
    },
    data: {
      portfolioSourceId,
      cryptoUnit,
      fiatUnit
    },
  };
  const { data } = await axios.request(option);
  return data;
}

const CMC_queryPortfolio = async (cmc_jwt: string, portfolioSourceId: string, cryptoUnit=2781, currentPage=1, pageSize=1000) => {
  const option = {
    url: 'https://api.coinmarketcap.com/asset/v3/portfolio/query',
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + cmc_jwt,
    },
    data: {
      portfolioSourceId,
      cryptoUnit,
      currentPage,
      pageSize,
    },
  };
  const { data } = await axios.request(option);
  return data;
}


export { fixPrice, exchange, currency, getAllCoins, CMC_queryAllPortfolio, CMC_queryStatistics, CMC_queryPortfolio };
