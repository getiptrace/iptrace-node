const ipRegex = require("ip-regex");

/**
 * get ip information from clear ip service
 *
 * @param {string} ip
 * @param {string} apikey
 * @param {object} httpClient
 *
 * @returns {Promise} promise results in response object contian ip info
 *
 */
const getIpInfo = (ip, apikey, httpClient) => {
  if (!apikey) return Promise.reject(new Error("api key is required"));

  if (
    !ipRegex({
      exact: true
    }).test(ip)
  ) {
    return Promise.reject(new Error("ip is required"));
  }

  return httpClient
    .get(`/ip/${ip}/json?apikey=${apikey}`)
    .then(response => response.data)
    .catch(() =>
      Promise.reject(new Error("Request failed with status code 400"))
    );
};

module.exports = getIpInfo;
