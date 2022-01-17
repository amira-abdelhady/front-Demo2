import axios from "axios";
import store from './../store/index';
import { setLoading } from './../store/actions/loading';

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   function (config) {
//     console.log("Interceptor request", config);
//     store.dispatch(setLoading(true))
//     config.params = {
//       apiKey: 'sd5asd46a5sd4a5sd4s5'
//     };
//     config.headers = {
//       ...config.headers,
//       access_token  : 'da23sd5asd4as21d3as2d1'
//     }
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
// axiosInstance.interceptors.response.use(
//   function (response) {
//     console.log("Interceptor response", response);
//     store.dispatch(setLoading(false))
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );
