import { defineStore } from "pinia";
import { pinia } from "@/stores";

interface LocaleState {}
export const useLocaleStore = defineStore("locale", {
  state: () => ({
    localInfo: {}
  })
});
