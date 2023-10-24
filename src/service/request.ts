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

export class HttpRequest {
  private instance: AxiosInstance;
  private readonly options: RequestOptions;

  constructor(options: RequestOptions) {
    this.options = options;
    this.instance = axios.create(options);

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      return config;
    });

    this.instance.interceptors.response.use((res: AxiosResponse<any>) => {
      return res.data;
    });
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
    return this.request({
      ...config,
      method: "POST",
      headers: { "content-Type": "application/json" }
    });
  }
}
