import { ResultEnum } from "@/enums/httpEnum";

export const resultSuccess = <T = Recordable>(result: T, { message = "ok" } = {}) => ({
  code: ResultEnum.SUCCESS,
  result,
  message,
  type: "success"
});

export const resultError = (result = null, { message = "request failed" } = {}) => ({
  code: ResultEnum.ERROR,
  result,
  message,
  type: "error"
});
