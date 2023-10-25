import http from "@/service";
import type { LoginParams, LoginResponse } from "./types/userType";

enum Api {
  Login = "/user/login",
  GetUserInfo = "/user/info"
}

export const loginApi = (params: LoginParams) => http.post({ url: Api.Login, params });

export const getUserInfoApi = () => http.get<LoginResponse>({ url: Api.GetUserInfo });
