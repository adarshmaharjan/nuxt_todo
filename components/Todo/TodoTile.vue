<template>
  <div class="my-2">
    <form class="border-none" @submit.prevent="() => updateTodo(todo)">
      <div class="flex items-center border-none">
        <Checkbox
          v-model="todo.isCompleted"
          :binary="true"
          :pt="{
            root: ({ props, state }) => ({
              class: 'w-8 h-8 mr-4'
            }),
            icon: ({ props, state }) => ({
              class: 'w-8 h-8'
            }),
            input: ({ props, context }) => ({
              class: ['w-8 h-8']
            })
          }"
        />
        <InputText
          v-model="todo.task"
          type="text"
          :pt="{
            root: {
              class: 'w-1/2 mr-4 '
            }
          }"
        />
        <Button
          icon="pi pi-trash"
          aria-label="delete"
          :pt="{
            root: {
              class: ['mr-4']
            }
          }"
          @click.prevent="() => deleteTodo(todo.id)"
        />
        <Button type="submit" label="Update" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { TodoListType, TodoType } from "~/types";

const props = withDefaults(defineProps<TodoListType>(), {
  deleteTodo: () => null,
  updateTodo: () => null
});

const todo = ref<TodoType>(props.todo);
</script>
