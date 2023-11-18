import { useStorage as useStorageCore } from "@vueuse/core";
import { defineStore } from "pinia";
import { uuid } from "vue-uuid";
import { todoStore } from "~/config/constants";
import type { TodoType } from "~/types";
export const useTodoStore = defineStore(todoStore, () => {
  const getDefaultSettings = (): TodoType[] => [];
  // const getSettings = () => {
  //   const settings = process.client ? localStorage.getItem(todoStore) : null;
  //   return settings ? JSON.parse(settings) : getDefaultSettings();
  // };
  // // const todos = ref<TodoType[]>([]);
  // const todos = ref<TodoType[]>(getSettings());

  const todos = useStorageCore<TodoType[]>(todoStore, [], localStorage, {
    mergeDefaults: true
  });
  const createTodo = ({
    task,
    description,
    isCompleted
  }: {
    task: string;
    description?: string;
    isCompleted?: boolean;
  }) => {
    const newTask: TodoType = {
      id: uuid.v4(),
      createdAt: Date.now(),
      description: description ?? "",
      isCompleted: isCompleted ?? false,
      task
    };
    todos.value = [...todos.value, newTask];
    // useLocalStorage(todoStore, todos.value);
  };
  const getAllTodo = computed<TodoType[]>(() => {
    return todos.value;
  });
  const deleteTodo = (id: string) => {
    todos.value = todos.value.filter((todo: TodoType) => todo.id !== id);
  };
  const updateTodo = (updatedTodo: TodoType) => {
    todos.value = todos.value.map((todo: TodoType) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    showToastMessage("Todo Updated");
  };
  const deleteAllTodo = () => {
    todos.value = [];
  };

  return {
    todos,
    createTodo,
    getAllTodo,
    deleteTodo,
    updateTodo,
    deleteAllTodo
  };
});
