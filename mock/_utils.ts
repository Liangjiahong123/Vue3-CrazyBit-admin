import { ResultEnum } from "@/enums/httpEnum";

export function resultSuccess<T = Recordable>(result: T, { message = "ok" } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    result,
    message,
    type: "success"
  };
}
