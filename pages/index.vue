<template>
  <section class="container mx-auto">
    <h2 class="mb-4 text-2xl">Create New Todo</h2>
    <NewTodo />
  </section>

  <section class="container mx-auto mt-4">
    <h2 class="text-2xl">Todo Content</h2>
    <div class="w-1/2">
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <TodoTile
            :todo="todo"
            :delete-todo="deleteTodo"
            :update-todo="updateTodo"
          />
        </li>
      </ul>
      <div>
        <Button
          v-if="todos.length !== 0"
          label="Clear All"
          @click.prevent="deleteAllTodo"
        />
        <h3 v-else class="2xl">The todos are not present</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NewTodo from "~/components/Todo/NewTodo.vue";
import TodoTile from "~/components/Todo/TodoTile.vue";

const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
const { deleteTodo, updateTodo, deleteAllTodo } = todoStore;
</script>

<style scoped></style>
