const BASE_API_URL = 'https://swapi.co/api';

export const get = (url, params = {}) => {
  return fetch(BASE_API_URL + url)
    .then(response => response.json())
};

export const getUrl = (fullUrl) => fullUrl.replace(BASE_API_URL, '');