import http from "@/service";
import type { LoginParams } from "./types/userType";

enum Api {
  Login = "/login"
}

export const loginApi = (params: LoginParams) => {
  return http.post({ url: Api.Login, params });
};
