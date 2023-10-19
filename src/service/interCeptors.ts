import type { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestOptions extends AxiosRequestConfig {
  interceptors?: RequestInterCeptors;
}

export interface RequestInterCeptors {
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
  requestInterceptor: (
    config: InternalAxiosRequestConfig,
    options: RequestOptions
  ) => InternalAxiosRequestConfig;

  // 响应拦截
  responseInterceptor: (
    config: InternalAxiosRequestConfig,
    options: RequestOptions
  ) => InternalAxiosRequestConfig;
}
