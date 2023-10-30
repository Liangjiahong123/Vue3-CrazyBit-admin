import type { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from "axios";
import { RequestOptions } from "#/http";
import { ResultCodeEnum } from "@/enums/httpEnum";
import { useMessage } from "@/hooks/web/useMessage";

const { createNotify } = useMessage();

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
    const { getResponseCode, getNativeRes } = options;
    // 如果需要响应头，则不作处理
    if (getNativeRes) return res;
    // 如果需要响应状态,则返回响应体
    if (getResponseCode) return res.data;
    // 否则根据数据和状态码进行处理
    if (!res.data) Promise.reject(new Error("请求失败"));
    // 请求成功并返回数据
    const { code, result, message } = res.data;
    const getSuccess = res.data && Reflect.has(res.data, "code") && code === ResultCodeEnum.SUCCESS;
    if (getSuccess) {
      if (message) {
        return result;
      }
    }
    const errorMsg = handleErrorCode(code, message);
  }
};

function handleErrorCode(code: number, defaultMsg: string) {
  // switch (code) {
  //   case ResultCodeEnum.TIMEOUT:
  //     createNotify.error("登录超时");
  //     break;
  //   default:
  //     createNotify.error(defaultMsg);
  //     break;
  // }
}
