import { InjectionKey } from "vue";

export const createProvider = <T>(key: InjectionKey<T> = Symbol(), value: T) => {
  provide(key, value);
};
export const useProvider = <T>(key: InjectionKey<T> = Symbol(), defaultValue?: T) => {
  return inject(key, defaultValue);
};
