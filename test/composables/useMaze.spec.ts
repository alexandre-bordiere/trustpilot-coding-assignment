import { afterEach, describe, expect, it, vi } from 'vitest'

import useMaze from '../../src/composables/useMaze'
import http from '../../src/http'

vi.mock('../../src/http', () => ({
  default: {
    get: vi.fn().mockResolvedValue({
      data: {
        'end-point': [21],
        'domokun': [12],
        'pony': [25],
        'size': [15, 15],
        'data': [],
      },
    }),
    post: vi.fn().mockResolvedValue({
      data: {
        maze_id: 'cd0c2dad-7327-44e6-92e8-72393de079b4',
      },
    }),
  },
}))

describe('useMaze', () => {
  const { fetchMaze, generateMaze } = useMaze()

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('fetchMaze', () => {
    it('returns the maze', async () => {
      await expect(fetchMaze('cd0c2dad-7327-44e6-92e8-72393de079b4')).resolves.toStrictEqual({
        uuid: 'cd0c2dad-7327-44e6-92e8-72393de079b4',
        dimensions: {
          height: 15,
          width: 15,
        },
        positions: {
          domokun: 12,
          end: 21,
          pony: 25,
        },
        structure: [],
      })

      expect(http.get).toHaveBeenCalledOnce()
      expect(http.get).toHaveBeenCalledWith('/maze/cd0c2dad-7327-44e6-92e8-72393de079b4')
    })
  })

  describe('generateMaze', () => {
    it('test', async () => {
      await expect(generateMaze()).resolves.toStrictEqual({
        uuid: 'cd0c2dad-7327-44e6-92e8-72393de079b4',
        dimensions: {
          height: 15,
          width: 15,
        },
        positions: {
          domokun: 12,
          end: 21,
          pony: 25,
        },
        structure: [],
      })

      expect(http.get).toHaveBeenCalledOnce()
      expect(http.get).toHaveBeenCalledWith('/maze/cd0c2dad-7327-44e6-92e8-72393de079b4')
      expect(http.post).toHaveBeenCalledOnce()
      expect(http.post).toHaveBeenCalledWith('/maze', {
        'maze-player-name': 'Pinkie Pie',
        'maze-height': 15,
        'maze-width': 15,
        'difficulty': 0,
      })
    })
  })
})
