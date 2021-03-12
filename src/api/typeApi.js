import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/typeDevice/";

export function getTypes() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
