import { toast } from "vue3-toastify";

export const showToastMessage = (value: string) => {
  toast.info(value);
};
