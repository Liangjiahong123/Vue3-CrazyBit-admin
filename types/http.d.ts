export interface ResponseData<T = any> {
  code: number;
  type: "success" | "error" | "warning";
  message: string;
  result: T;
}

export interface RequestOptions {
  getNativeRes?: boolean; // 是否需要请求头数据
  getResponseCode?: boolean; // 是否需要响应状态
  showMessage?: boolean; // 是否需要消息提示
}
