import { createProvider, useProvider } from "@/hooks/basic/useProvider";

interface AppProviderProps {
  prefixCls: Ref<string>;
}

const key: InjectionKey<AppProviderProps> = Symbol();

export function createAppProvider(props: AppProviderProps) {
  return createProvider<AppProviderProps>(key, props);
}

export function useAppProvider() {
  return useProvider<AppProviderProps>(key);
}
