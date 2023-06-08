import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const CancelToken = axios.CancelToken;
export let canceler: any;

export const baseAPI = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export const request = ({ ...options }: AxiosRequestConfig) => {
  baseAPI.defaults.headers.common.token =
    window.localStorage.getItem("accessToken") || "";
  const onSuccess = (response: AxiosResponse) => response.data;
  const onError = (error: any) => {
    return null;
  };

  return baseAPI({
    ...options,
    cancelToken: new CancelToken(function executor(c) {
      // An executor function receives a cancel function as a parameter
      canceler = c;
    }),
  })
    .then(onSuccess)
    .catch(onError);
};
