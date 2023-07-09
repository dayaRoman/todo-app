import { defineStore } from "pinia";
import { ref } from "vue";

import { useLocalStorage } from "@/helpers/localStorage";

export const useTodos = defineStore("todos", () => {
    const fromLocalStorage = useLocalStorage();

    const todos = ref(fromLocalStorage.todos);

    function addTodo(text) {
        todos.value.push({ text });
        fromLocalStorage.setTodoToLocalStorage({ text });
    }

    return { todos, addTodo };
});
