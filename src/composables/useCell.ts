import { computed } from 'vue'

import type { Direction, Maze } from '../types'

export default function useCell(maze: Maze) {
  const cellsCount = computed(() => maze.dimensions.height * maze.dimensions.width)

  function getAdjacentCellPosition(position: number, direction: Direction) {
    switch (direction) {
      case 'north':
        return position - maze.dimensions.width
      case 'south':
        return position + maze.dimensions.width
      case 'west':
        return position - 1
      case 'east':
        return position + 1
      default:
        return position
    }
  }

  function isFirstColumn(position: number) {
    return position % maze.dimensions.width === 0
  }

  function isLastColumn(position: number) {
    return (position + 1) % maze.dimensions.width === 0
  }

  function isFirstRow(position: number) {
    return position < maze.dimensions.width
  }

  function isLastRow(position: number) {
    return cellsCount.value - position <= maze.dimensions.width
  }

  return {
    getAdjacentCellPosition,
    isFirstColumn,
    isLastColumn,
    isFirstRow,
    isLastRow,
  }
}
