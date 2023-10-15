import { createProvider, useProvider } from "@/hooks/web/useProvider";

interface AppProviderProps {
  prefixCls: Ref<string>;
}

const key: InjectionKey<AppProviderProps> = Symbol();

export const createAppProvider = (props: AppProviderProps) => {
  return createProvider<AppProviderProps>(key, props);
};

export const useAppProvider = () => {
  return useProvider<AppProviderProps>(key);
};
