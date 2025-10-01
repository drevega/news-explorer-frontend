//  Basic function to handle requests to the API
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_URL = import.meta.env.VITE_NEWS_API_URL;

const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    // if server returns an error, reject the promise
    return Promise.reject(`Error: ${res.status}`);
};

export const searchNews = (query) => {
  return fetch(
    `${API_URL}/everything?q=${query}&apiKey=${API_KEY}`
  ).then(handleResponse);
};
