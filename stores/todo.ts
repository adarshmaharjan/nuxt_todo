import { defineStore } from "pinia";
import { uuid } from "vue-uuid";
import { todoStore } from "~/config/constants";
import type { TodoType } from "~/types";
export const useTodoStore = defineStore(todoStore, () => {
  // let initialValue: TodoType[] = [];
  // if (process.client) {
  //   if (localStorage.getItem("todos")) {
  //     initialValue = [...JSON.parse(localStorage.getItem("todos") ?? "")];
  //   } else {
  //     initialValue = [];
  //   }
  // }

  // console.log(initialValue);
  // const todos = useLocalStorage("todos", computed(() => initialValue).value);
  const todos = ref<TodoType[]>([]);
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
    useLocalStorage("todos", todos.value);
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
