import type { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from "axios";
import { RequestOptions } from "#/http";
import { ResultCodeEnum } from "@/enums/httpEnum";
import { useMessage } from "@/hooks/web/useMessage";
import { isEmpty, isNull, isUndefined } from "@/utils/vaildate";

const { createMessage } = useMessage();

export interface CreateHttpOptions extends AxiosRequestConfig {
  interceptors?: InterCeptors; // 拦截器
  requestOption?: RequestOptions;
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
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
}

export const interceptors: InterCeptors = {
  // 请求拦截处理
  requestInterceptor: (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  // 响应拦截处理
  responseInterceptor: (res) => res,

  // 请求错误的处理
  handleReqInterceptorErrHook: (error) => Promise.reject(error),

  // 响应错误的处理
  handleResInterceptorErrHook: (error) => Promise.reject(error),

  // 响应数据的处理
  handleResponseHook: (res, options) => {
    const { getResponseCode, getNativeRes, showMessage } = options;
    // 如果需要响应头，则不作处理
    if (getNativeRes) return res;
    // 如果需要响应状态,则返回响应体
    if (getResponseCode) return res.data;
    // 否则根据数据和状态码进行处理
    if (!res.data) throw new Error("请求失败");
    // 请求成功并返回数据
    const { code, result, message } = res.data;

    if (code === ResultCodeEnum.SUCCESS) {
      let successMsg = message;
      if (!message) successMsg = "操作成功";
      if (showMessage) createMessage({ message: successMsg });
      return result;
    }

    let errMsg = message;
    switch (code) {
      case ResultCodeEnum.ERROR:
        !message && (errMsg = "请求失败");
        break;
      case ResultCodeEnum.TIMEOUT:
        !message && (errMsg = "请求超时");
    }
    if (showMessage) createMessage({ type: "error", message: errMsg });
    throw new Error(errMsg || "请求失败");
  }
};
