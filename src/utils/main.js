import axios from 'axios';
import Cookies from 'js-cookie';

export const apiBaseurl = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 5000,
});

export const saveTokenToBrowserCookies = (token) => {
  Cookies.set('user-token-us', token);
};

export const removeTokenFromBrowserCookies = () => {
  Cookies.remove('user-token-us');
};

apiBaseurl.interceptors.request.use((config) => {
  const token = Cookies.get('user-token-us');

  // eslint-disable-next-line no-param-reassign
  if (token) config.headers.authorization = token;
  return config;
}, (err) => (Promise.reject(err)));
