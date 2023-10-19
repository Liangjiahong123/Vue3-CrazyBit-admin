export interface ResponseData<T = any> {
  code: number;
  type: "success" | "error" | "warning";
  message: string;
  result: T;
}
