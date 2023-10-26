import type { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestOptions extends AxiosRequestConfig {
  interceptors?: InterCeptors;
}

export interface InterCeptors {
  // 用于请求发送之前的处理
  handleConfigHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  // 用于处理响应的数据
  handleResponseHook?: (res: AxiosResponse, options: RequestOptions) => any;

  // 用于请求拦截的错误处理
  handleReqInterceptorErrHook?: (error: Error) => void;

  // 用于响应拦截的错误处理
  handleResInterceptorErrHook?: (error: Error) => void;

  // 请求失败的处理
  handleRequestFailedHook?: (error: Error, options: RequestOptions) => Promise<any>;

  // 请求拦截
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;

  // 响应拦截
  responseInterceptor?: (res: AxiosResponse<any>) => AxiosResponse<any>;
}

export const interceptors: InterCeptors = {
  requestInterceptor: (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },

  responseInterceptor: (res) => res,

  handleReqInterceptorErrHook: (error) => Promise.reject(error),

  handleResInterceptorErrHook: (error) => Promise.reject(error)
};
