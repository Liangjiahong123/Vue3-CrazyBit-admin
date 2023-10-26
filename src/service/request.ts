import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios";

import type { RequestOptions } from "./interCeptors";
import { ResponseData } from "#/http";
import { isFunction } from "@/utils/vaildate";

export class HttpRequest {
  private instance: AxiosInstance;
  private readonly options: RequestOptions;

  constructor(options: RequestOptions) {
    this.options = options;
    this.instance = axios.create(options);

    this.setupInterceptors();
  }

  private setupInterceptors() {
    const { interceptors } = this.options;
    if (!interceptors) return;
    const {
      requestInterceptor,
      responseInterceptor,
      handleReqInterceptorErrHook,
      handleResInterceptorErrHook
    } = interceptors;

    this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (isFunction(requestInterceptor)) {
        config = requestInterceptor(config);
      }
      return config;
    });

    isFunction(handleReqInterceptorErrHook) &&
      this.instance.interceptors.request.use(undefined, handleReqInterceptorErrHook);

    this.instance.interceptors.response.use((res: AxiosResponse<any>) => {
      if (isFunction(responseInterceptor)) {
        res = responseInterceptor(res);
      }
      return res.data;
    });

    isFunction(handleResInterceptorErrHook) &&
      this.instance.interceptors.request.use(undefined, handleResInterceptorErrHook);
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, ResponseData<T>>(config)
        .then((res) => {
          resolve(res.result);
        })
        .catch((e: Error | AxiosError) => {
          reject(e);
        });
    });
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }
}
