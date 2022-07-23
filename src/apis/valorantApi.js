import axios from "axios";

const baseUrl = "https://valorant-api.com/v1/";

const valorantApi = axios.create({
  baseURL: baseUrl,
});

export default valorantApi;
