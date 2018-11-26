const axios = require("axios");
const ipRegex = require("ip-regex");

const getIpInfo = (ip, apikey) => {
  if (!apikey) return Promise.reject(new Error("api key is required"));

  if (
    !ipRegex({
      exact: true
    }).test(ip)
  ) {
    return Promise.reject(new Error("ip is required"));
  }

  return axios
    .get(`https://api.clearip.io/ip/${ip}/json?apikey=${apikey}`)
    .then(response => response.data)
    .catch(() =>
      Promise.reject(new Error("Request failed with status code 400"))
    );
};

module.exports = getIpInfo;
