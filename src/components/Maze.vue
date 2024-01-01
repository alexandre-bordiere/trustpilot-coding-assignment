<template>
  <h1 class="mb-4 text-2xl text-center">
    {{ maze.uuid }}
  </h1>
  <div
    class="grid"
    :style="[
      `grid-template-columns: repeat(${maze.dimensions.width}, 1fr)`,
      `grid-template-rows: repeat(${maze.dimensions.height}, 1fr)`,
    ]"
  >
    <div
      v-for="(cell, position) in maze.structure"
      :key="position"
      class="border border-transparent flex items-center justify-center p-2"
      :class="{
        'border-t-[#000]': cell.includes('north'),
        'border-l-[#000]': cell.includes('west'),
        'border-r-[#000]': isLastColumn(position),
        'border-b-[#000]': isLastRow(position),
      }"
    >
      <span v-if="position === maze.positions.domokun">👹</span>
      <span v-else-if="position === maze.positions.end">🚪</span>
      <span v-else-if="position === maze.positions.pony">🐴</span>
      <span v-else>•</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useCell from '../composables/useCell'
import type { Maze } from '../types'

const props = defineProps<{ maze: Maze }>()

const { isLastColumn, isLastRow } = useCell(props.maze)
</script>
