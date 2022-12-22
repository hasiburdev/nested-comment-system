import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3001`,
  withCredentials: true,
});

export const makeRequest = (url: string, options?: any) => {
  return api({
    url,
    options,
  })
    .then((res) => res.data)
    .catch((error) =>
      Promise.reject(error?.response?.data?.message ?? error.message)
    );
};
