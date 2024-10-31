import axios from "axios";

/* The line `export const baseUrl = "http://localhost:8000/";` is declaring a constant variable named
`baseUrl` and assigning it the value of the base URL for the local API, which is
"http://localhost:8000/". This variable can be exported and used in other parts of the code to
construct full API endpoints by appending specific paths to it. */
//export const baseUrl = "http://localhost:8000/api";
export const baseUrl = "https://api.moveit.vpsolutions.et/api";

/* The code snippet `export const instance = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
});` is creating an Axios instance named `instance`. This instance is configured with a base URL of
"http://localhost:8000/api/" and the option `withCredentials` set to `true`. */
export const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const instanceWithOutCredential = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
});

/* The code snippet `export const CSRFInstance = axios.create({
  baseURL: `/sanctum/csrf-cookie"`,
});` is creating an Axios instance named `CSRFInstance`. This instance is configured with a base URL
that is constructed by appending the path `/sanctum/csrf-cookie` to the `baseUrl` constant variable
using template literals. */
export const CSRFInstance = axios.create({
  baseURL: `${baseUrl}/sanctum/csrf-cookie`,
});

/* The code snippet `export const apiWithOutCredentials = axios.create({
   baseURL: baseUrl,
  withCredentials: true,
});` is creating an Axios instance named `apiWithOutCredentials`. This instance is configured with a
base URL set to the value of the `baseUrl` constant variable, which is "http://localhost:8000/". */
export const apiWithOutCredentials = axios.create({
  baseURL: baseUrl,
  //baseURL: baseUrl,
  withCredentials: true,
});
