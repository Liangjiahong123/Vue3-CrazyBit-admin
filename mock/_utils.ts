import { ResultEnum } from "@/enums/httpEnum";

export const resultSuccess = <T = Recordable>(result: T, { message = "ok" } = {}) => ({
  code: ResultEnum.SUCCESS,
  result,
  message,
  type: "success"
});

export const resultError = (
  message = "request failed",
  { result = null, code = ResultEnum.ERROR } = {}
) => ({
  code,
  result,
  message,
  type: "error"
});

export const getReqToken = (req: RequestParams): string | undefined => req.headers?.authorization;

export interface RequestParams {
  method: string;
  body: any;
  query: any;
  headers?: { authorization?: string };
}
