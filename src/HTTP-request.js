import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const AUTH_KEY = "tZ9CtY3F4rbId8LSGRH1L5iGu2UZ3C8cJSq6YiPz3e0";

export default async function fetchImages(searchQuery, currentPage) {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: AUTH_KEY,
      query: searchQuery,
      page: currentPage,
    },
  });
  return response.data.results;
}
