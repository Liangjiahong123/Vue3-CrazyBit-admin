import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
    message: "hello"
  }),
  actions: {
    increment(number: number) {
      this.counter = number;
    }
  }
});

export default useCounterStore;
