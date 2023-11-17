export type TodoType = {
  id: string;
  createdAt?: number;
  isCompleted?: boolean;
  task: string;
  description?: string;
};
export type TodoListType = {
  todo: TodoType;
  deleteTodo?: (id: string) => void;
  updateTodo?: (todo: TodoType) => void;
};
