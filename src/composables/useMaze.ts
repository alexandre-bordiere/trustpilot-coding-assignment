import { reactive } from 'vue'

import { http } from '../http'
import type { FetchMazeResponse, GenerateMazeData, GenerateMazeResponse, Maze } from '../types'

export default function useMaze() {
  const maze = reactive<Maze>({
    uuid: '',
    dimensions: {
      height: 0,
      width: 0,
    },
    positions: {
      domokun: 0,
      end: 0,
      pony: 0,
    },
    structure: [],
  })

  async function fetchMaze(uuid: string): Promise<Maze> {
    const { data } = await http.get<FetchMazeResponse>(`/maze/${uuid}`)

    maze.uuid = uuid
    maze.dimensions.height = data.size[1]
    maze.dimensions.width = data.size[0]
    maze.positions.pony = data.pony[0]
    maze.positions.domokun = data.domokun[0]
    maze.positions.end = data['end-point'][0]
    maze.structure = data.data

    return maze
  }

  async function generateMaze(data: GenerateMazeData): Promise<Maze> {
    const res = await http.post<GenerateMazeResponse>('/maze', {
      'maze-player-name': 'Pinkie Pie',
      'maze-height': data.height,
      'maze-width': data.width,
      'difficulty': data.difficulty,
    })

    return fetchMaze(res.data.maze_id)
  }

  return { maze, fetchMaze, generateMaze }
}
