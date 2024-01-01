<template>
  <form @submit.prevent.once="onSubmit">
    <div class="flex items-center mb-8">
      <label for="height" class="flex flex-1 flex-col font-semibold mr-6 text-lg">
        Height
        <small class="text-gray-400 text-sm">Must be between 15 and 25</small>
      </label>
      <input
        id="height"
        v-model="form.height"
        type="number"
        class="appearance-none bg-gray-200 block border flex-1 py-3 px-4 rounded text-gray-700 focus:bg-white focus:outline-none"
        placeholder="15"
        min="15"
        max="25"
        step="1"
        required
      >
    </div>
    <div class="flex items-center mb-8">
      <label for="width" class="flex flex-1 flex-col font-semibold mr-6 text-lg">
        Width
        <small class="text-gray-400 text-sm">Must be between 15 and 25</small>
      </label>
      <input
        id="width"
        v-model="form.width"
        type="number"
        class="appearance-none bg-gray-200 block border flex-1 py-3 px-4 rounded text-gray-700 focus:bg-white focus:outline-none"
        placeholder="15"
        min="15"
        max="25"
        step="1"
        required
      >
    </div>
    <div class="flex items-center mb-8">
      <label for="difficulty" class="flex flex-1 flex-col font-semibold mr-6 text-lg">
        Difficulty
        <small class="text-gray-400 text-sm">Must be between 0 and 10</small>
      </label>
      <input
        id="difficulty"
        v-model="form.difficulty"
        type="number"
        class="appearance-none bg-gray-200 block border flex-1 py-3 px-4 rounded text-gray-700 focus:bg-white focus:outline-none"
        placeholder="0"
        min="0"
        max="10"
        step="1"
        required
      >
    </div>
    <div class="flex justify-end">
      <button
        type="submit"
        class="bg-gradient-to-r from-green-500 to-blue-500 font-semibold px-4 py-3 rounded-lg shadow-md text-white hover:from-blue-500 hover:to-purple-500"
        :class="{ 'opacity-50 pointer-events-none': form.submitted }"
        :disabled="form.submitted"
      >
        Generate a new maze
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { GenerateMazeData } from '../types'

const emit = defineEmits<{ submit: [data: GenerateMazeData] }>()

const form = reactive({
  height: 15,
  width: 15,
  difficulty: 0,
  submitted: false,
})

function onSubmit() {
  form.submitted = true

  emit('submit', form)
}
</script>
