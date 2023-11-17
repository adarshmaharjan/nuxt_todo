<template>
  <div class="w-1/2 p-4 border rounded-md border-teal-500">
    <form @submit.prevent="onSubmit">
      <span>
        <InputText
          id="value"
          v-model="value"
          type="text"
          aria-describedby="text-error"
          :pt="{
            root: {
              class: 'w-1/2 mr-4'
            }
          }"
        />
        <div id="text-error" class="p-error">
          {{ errorMessage || "&nbsp;" }}
        </div>
      </span>

      <Button type="submit" label="Create" />
    </form>
  </div>
</template>

<script setup lang="ts">
const todoStore = useTodoStore();
const { createTodo } = todoStore;
const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField("value", validateField);
function validateField(value: string) {
  if (!value) {
    return "Please add a value in your todo";
  }

  return true;
}
const onSubmit = handleSubmit.withControlled((values) => {
  if (values.value && values.value.length > 0) {
    createTodo({
      task: value.value
    });
    showToastMessage("Todo Created");
    resetForm();
  }
});

const notify = () => {};
</script>

<style scoped></style>
