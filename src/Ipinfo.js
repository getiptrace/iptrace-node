import ipRegex from "ip-regex";

export default class IPinfo {
  constructor(client) {
    this.httpClient = client;
  }

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
  getIpInfo(ip) {
    if (
      !ipRegex({
        exact: true
      }).test(ip)
    ) {
      return Promise.reject(new Error("ip is required"));
    }

    return this.httpClient
      .get(`/ip/${ip}/json`)
      .then(response => response.data)
      .catch(() =>
        Promise.reject(new Error("Request failed with status code 400"))
      );
  }
}
