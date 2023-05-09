import axios from 'axios';

export interface Fetchresponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bc79af1972c7480baaa7279dc55c4abf',
  },
});
