export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // Server side validation returns a string error message, so parse as text instead of json. if error
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
