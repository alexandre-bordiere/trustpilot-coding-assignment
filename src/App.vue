<template>
  <main id="app" class="bg-white p-4 rounded-lg w-92">
    <div v-if="hiddenImageUrl === ''">
      <div v-if="maze.uuid !== ''">
        <Maze :maze="maze" />
      </div>
      <div v-else>
        <Form @submit="generateAndSolveMaze" />
      </div>
    </div>
    <div v-else>
      <img :src="hiddenImageUrl" alt="" height="500" width="750">
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import Form from './components/Form.vue'
import useMaze from './composables/useMaze'
import useMovement from './composables/useMovement'
import { http } from './http'
import type { GenerateMazeData, MovePlayerResponse } from './types'
import Maze from './components/Maze.vue'

const hiddenImageUrl = ref('')

const { maze, fetchMaze, generateMaze } = useMaze()
const { getShortestPath } = useMovement(maze)

async function generateAndSolveMaze(data: GenerateMazeData) {
  await generateMaze(data)

  const shortestPath = getShortestPath(maze.positions.pony) ?? []

  for (const { direction } of shortestPath) {
    const { data } = await http.post<MovePlayerResponse>(`/maze/${maze.uuid}`, { direction })

    await fetchMaze(maze.uuid)

    if (data['hidden-url'])
      hiddenImageUrl.value = `https://ponychallenge.trustpilot.com/${data['hidden-url']}`

    if (data.state === 'over')
      break
  }
}
</script>
