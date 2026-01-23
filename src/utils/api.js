//  Basic function to handle requests to the API
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_API_URL = import.meta.env.VITE_NEWS_API_URL;
const NEWS_API_PROXY = "https://nomoreparties.co/news/v2/everything";

const BASE_URL =
  import.meta.env.MODE === "production" ? NEWS_API_PROXY : NEWS_API_URL;

// Helper function to handle fetch responses
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // if server returns an error, reject the promise
  return Promise.reject(`Error: ${res.status}`);
};

export const searchNews = (keyword) => {
  const formatDate = (date) => date.toISOString().split("T")[0];

  const currentDate = formatDate(new Date());

  const pastDateObj = new Date();
  pastDateObj.setDate(pastDateObj.getDate() - 7);
  const pastDate = formatDate(pastDateObj);

  return fetch(
    `${BASE_URL}?q=${encodeURIComponent(keyword)}&from=${pastDate}&to=${currentDate}&pageSize=100&apiKey=${NEWS_API_KEY}`,
  ).then(checkResponse);
};
