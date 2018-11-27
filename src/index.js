const axios = require("axios");
const GetIpInfoFun = require("./ipinfo");

class Client {
  constructor(apiKey) {
    if (!apiKey)
      throw new Error("api key is required");

    this.apiKey = apiKey;
    this.httpClient = axios.create({
      baseURL: 'https://api.clearip.io',
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }

  /**
   *  fetch user info using the clear ip client
   * @param {string} ip ip used to fetch from  
   */
  getIpinfo(ip) {
    return GetIpInfoFun(ip, this.apiKey, this.httpClient);
  }



}

module.exports = Client;