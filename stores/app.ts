import { defineStore } from "pinia";
import { appStore } from "../config/constants";
export const useAppStore = defineStore(appStore, () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
