import { describe, expect, it } from 'vitest'

import useMovement from '../../src/composables/useMovement'
import { Maze } from '../../src/types'

describe('useMovement composable function', () => {
  const maze: Maze = {
    uuid: 'cd0c2dad-7327-44e6-92e8-72393de079b4',
    dimensions: {
      height: 15,
      width: 20,
    },
    positions: {
      domokun: 291,
      end: 299,
      pony: 275,
    },
    structure: [
      ['west', 'north'],
      ['north'],
      ['west', 'north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      ['west', 'north'],
      ['north'],
      ['north'],
      ['west', 'north'],
      ['north'],
      ['west', 'north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      ['west', 'north'],
      ['west'],
      ['north'],
      ['west'],
      ['west', 'north'],
      ['north'],
      ['west'],
      ['west'],
      ['west', 'north'],
      ['west'],
      ['west'],
      ['west'],
      ['west', 'north'],
      ['north'],
      ['north'],
      ['north'],
      ['west'],
      ['north'],
      ['west'],
      ['west'],
      ['west'],
      ['north'],
      ['west'],
      [],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      [],
      ['west'],
      [],
      ['west', 'north'],
      ['north'],
      [],
      ['west', 'north'],
      ['north'],
      [],
      ['west'],
      ['west'],
      ['west', 'north'],
      ['north'],
      ['north'],
      ['west'],
      ['north'],
      [],
      ['west'],
      ['west'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      ['west'],
      ['north'],
      ['west', 'north'],
      [],
      ['west', 'north'],
      ['west', 'north'],
      [],
      ['west'],
      [],
      ['west'],
      ['north'],
      ['west'],
      ['north'],
      ['west', 'north'],
      [],
      ['west'],
      ['west'],
      ['west', 'north'],
      [],
      ['west', 'north'],
      ['north'],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      ['west', 'north'],
      ['west'],
      ['west', 'north'],
      ['north'],
      ['west'],
      ['north'],
      [],
      ['west'],
      ['north'],
      ['west'],
      ['west'],
      ['north'],
      ['west', 'north'],
      [],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      [],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      ['north'],
      ['north'],
      ['north'],
      [],
      ['west'],
      ['west'],
      ['north'],
      ['west'],
      [],
      ['west', 'north'],
      ['west'],
      ['west'],
      ['west', 'north'],
      [],
      ['west'],
      ['west', 'north'],
      [],
      ['west'],
      ['west'],
      ['west', 'north'],
      ['north'],
      ['west', 'north'],
      ['north'],
      ['north'],
      [],
      ['west', 'north'],
      ['north'],
      ['north'],
      ['west'],
      [],
      ['west'],
      [],
      [],
      ['west', 'north'],
      ['west'],
      ['north'],
      [],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      [],
      ['west', 'north'],
      ['north'],
      ['north'],
      ['west'],
      ['west', 'north'],
      [],
      ['west', 'north'],
      ['north'],
      ['north'],
      ['west', 'north'],
      ['north'],
      ['west'],
      ['north'],
      ['north'],
      [],
      ['west'],
      ['north'],
      ['west'],
      ['north'],
      ['north'],
      [],
      ['north'],
      ['west'],
      ['west'],
      ['west'],
      ['north'],
      ['west'],
      ['north'],
      ['west'],
      [],
      ['west'],
      ['north'],
      ['west', 'north'],
      ['north'],
      ['west'],
      ['west', 'north'],
      ['west'],
      ['north'],
      ['west'],
      ['north'],
      ['west', 'north'],
      ['north'],
      ['west'],
      [],
      ['west', 'north'],
      ['west'],
      ['north'],
      [],
      ['north'],
      ['north'],
      ['north'],
      ['west'],
      [],
      ['west'],
      ['west'],
      ['west'],
      ['north'],
      ['west'],
      ['north'],
      ['north'],
      [],
      ['west'],
      ['west'],
      ['west', 'north'],
      [],
      ['west', 'north'],
      ['north'],
      ['west', 'north'],
      ['west', 'north'],
      ['north'],
      ['west'],
      ['west', 'north'],
      ['north'],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      ['north'],
      ['north'],
      ['west', 'north'],
      ['north'],
      [],
      ['west'],
      ['north'],
      [],
      ['west'],
      ['west'],
      ['west'],
      [],
      ['west'],
      [],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      ['west'],
      ['west', 'north'],
      ['north'],
      ['west'],
      [],
      ['west', 'north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      [],
      ['west'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      [],
      ['west'],
      ['west'],
      ['north'],
      ['west'],
      [],
      ['west'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      [],
      ['west', 'north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      ['north'],
      [],
      ['north'],
      [],
    ],
  }

  const { getPossibleMovements, getShortestPath } = useMovement(maze)

  describe('getPossibleMovements', () => {
    it('should return possible movements when no specific condition is applied', () => {
      expect(getPossibleMovements(275)).toStrictEqual([
        { direction: 'west', newPosition: 274 },
        { direction: 'east', newPosition: 276 },
      ])
    })

    it('should return possible movements when against the top wall', () => {
      expect(getPossibleMovements(1)).toStrictEqual([
        { direction: 'south', newPosition: 21 },
        { direction: 'west', newPosition: 0 },
      ])
    })

    it('should return possible movements when against the left and bottom walls', () => {
      expect(getPossibleMovements(280)).toStrictEqual([
        { direction: 'north', newPosition: 260 },
        { direction: 'east', newPosition: 281 },
      ])
    })

    it('should return possible movements when against the right wall', () => {
      expect(getPossibleMovements(279)).toStrictEqual([
        { direction: 'south', newPosition: 299 },
        { direction: 'west', newPosition: 278 },
      ])
    })
  })

  describe('getShortestPath', () => {
    it('should order the pony to stay on the same cell when it is spawning on the same cell as the end', () => {
      const maze2 = {
        ...maze,
        positions: {
          domokun: 291,
          end: 275,
          pony: 275,
        },
      }

      expect(useMovement(maze2).getShortestPath(maze.positions.pony)).toStrictEqual([
        { direction: 'stay', newPosition: 275 },
      ])
    })

    it('should return the shortest path with the given initial position', () => {
      expect(getShortestPath(maze.positions.pony)).toHaveLength(9)
    })
  })
})
