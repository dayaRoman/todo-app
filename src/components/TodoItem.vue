<template>
    <div class="Todo">
        {{ text }}
    </div>
</template>
<script setup>
defineProps({
    text: {
        type: String,
        require: true,
    },
});
</script>

<style lang="scss" scoped>
.Todo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 1px solid aqua;
}
</style>
