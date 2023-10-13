// import { createProvider } from "./useProvider";

// const key: InjectionKey<string> = Symbol();
const prefixName = "crazybit";

export const useClassName = (scope: string) => {
  // createProvider(key, prefixName);

  return { prefixCls: `${prefixName}-${scope}`, prifixKey: prefixName };
};
