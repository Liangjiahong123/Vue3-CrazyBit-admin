import { useAppProvider } from "@cpns/Application/useAppProvider";

export const useClassName = (scope: string) => {
  const values = useAppProvider();
  return { prefixCls: `${values.prefixCls}-${scope}`, prifixKey: values.prefixCls };
};
