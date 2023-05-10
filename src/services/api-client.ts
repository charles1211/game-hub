import axios, { AxiosRequestConfig } from 'axios';

export interface Fetchresponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bc79af1972c7480baaa7279dc55c4abf',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<Fetchresponse<T>>(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
