<template>
    <div class="Todos">
        <h1>ToDo's</h1>
        <div class="Todos__wrapper">
            <TodoItem
                v-for="(todo, index) of todoList.todos"
                :key="index"
                :text="todo.text"
            >
            </TodoItem>
        </div>

        <input v-model="inputText" type="text" />
        <button @click="onClick">Add ToDo</button>
    </div>
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

<style scoped lang="scss">
.Todos {
    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin-bottom: 25px;
    }
}
</style>
