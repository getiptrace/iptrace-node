import axios from "axios";
import Ipinfo from "./Ipinfo";

export class Client {
  constructor(apiKey) {
    if (!apiKey) throw new Error("api key is required");

    this.apiKey = apiKey;
    this.httpClient = axios.create({
      baseURL: "https://api.clearip.io",
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.httpClient.interceptors.request.use(
      config => ({
        ...config,
        params: {
          ...config.params,
          ...(!!this.apiKey && {
            apikey: this.apiKey
          })
        }
      }),
      error => {
        throw new Error(error);
      }
    );

    this.Ipinfo = new Ipinfo(this.httpClient);
  }
}
