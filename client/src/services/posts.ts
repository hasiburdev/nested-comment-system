import { makeRequest } from "./makeRequest.js";

export const getPosts = () => {
  return makeRequest("/posts");
};
