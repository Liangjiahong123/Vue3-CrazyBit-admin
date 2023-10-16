import { UnwrapRef } from "vue";

interface ProviderOptions {
  isReadonly?: boolean;
}

type ShallowUnwrap<T> = {
  [P in keyof T]: UnwrapRef<T[P]>;
};

export const createProvider = <T>(
  key: InjectionKey<T> = Symbol(),
  value: any,
  options: ProviderOptions = {}
) => {
  const { isReadonly = true } = options;
  const state = reactive(value);
  const provideValue = isReadonly ? readonly(state) : state;
  provide(key, provideValue);
};
export const useProvider = <T>(
  key: InjectionKey<T> = Symbol(),
  defaultValue?: any
): ShallowUnwrap<T> => {
  return inject(key, defaultValue || {});
};
