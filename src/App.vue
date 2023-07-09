<template>
    <h1>ToDo's</h1>

    <TodoItem></TodoItem>

    <input v-model="inputText" type="text" />
    <button @click="onClick">Add ToDo</button>
</template>

<script setup>
import { ref } from "vue";
import { useTodos } from "@/store/todos.js";

import TodoItem from "@/components/TodoItem.vue";

const inputText = ref("");

const todoList = useTodos();

function onClick() {
    if (!inputText.value) return;

    todoList.addTodo(inputText.value);
    inputText.value = "";
}
</script>
