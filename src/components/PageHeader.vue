<template>
    <div class="mx-auto w-11/12 flex justify-between items-center pt-4">
        <div>
            <h1>NASA</h1>
            <p>Space photos</p>
        </div>
        <div>
            <input class="border-solid border-4 border-light-blue-500" type="text"
                @input="emit('handleSearch', ($event.target as HTMLInputElement).value)">
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
const emit = defineEmits<{ (e: 'handleSearch', value: string): void }>()
</script>

<style lang="scss" scoped></style>