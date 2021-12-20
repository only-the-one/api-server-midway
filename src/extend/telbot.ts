require('dotenv').config();

// eslint-disable-next-line node/no-extraneous-require
const axios = require('axios');
const http = axios.create({
  timeout: 10000,
});

const api_token = process.env.TEL_BOT_API;
const chat_id = process.env.TEL_CHAT_ID;

const sendMessage = async function (text: string): Promise<any> {
  const options = {
    method: 'POST',
    url: `https://api.telegram.org/bot${api_token}/sendMessage`,
    data: {
      chat_id,
      text,
    },
  };
  console.log('options :>> ', options);
  return await http.request(options);
};

export { sendMessage };
