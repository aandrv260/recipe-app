// Constants
export const API_ROOT_URL = 'https://recipe-app-backend-v1.herokuapp.com/api/v1';

// Functions

/**
 * Fetches data from the API based on the provided endpoint.
 * API ROOT URL: https://recipe-app-backend-v1.herokuapp.com/api/v1
 * @param endpoint API endpoint (for example: '/recipes')
 * @returns API response from the server with recipe data
 */
export async function fetchRecipeData<T>(endpoint: string): Promise<T> {
  const resp = await fetch(`${API_ROOT_URL}${endpoint}`);
  const data = await resp.json();

  return data;
}
