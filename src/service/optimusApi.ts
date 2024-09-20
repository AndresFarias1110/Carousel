// eslint-disable-next-line import/order
import axios from "axios";
// import Cookies from "universal-cookie";

// import { descifrar } from "../utils";

import Cookies from "universal-cookie";

import { LoaderOptimus } from "./loaderService";

const cookies = new Cookies();
const baseURL = process.env.REACT_APP_BACKEND_URL;
const Token = cookies.get("Token");
export const optimusApi = axios.create({
  baseURL,
  headers: {
    Toke: Token,
  },
});
optimusApi.interceptors.request.use((config) => {
  // const cookies = new Cookies();
  LoaderOptimus.loader$.next({ loader: true, error: false });
  return config;
});

optimusApi.interceptors.response.use(
  (response) => {
    LoaderOptimus.loader$.next({ loader: false, error: false });
    return response;
  },
  (error) => {
    LoaderOptimus.loader$.next({
      loader: false,
    });
    if (
      error.response.status === 404 ||
      error.response.status === 500 ||
      error.code === "ERR_NETWORK"
    ) {
      LoaderOptimus.loader$.next({
        errorStatus: error.response.status,
      });
    }
    return Promise.reject(error);
  },
);

export default optimusApi;
