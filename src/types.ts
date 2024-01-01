export type Direction = 'east' | 'north' | 'south' | 'stay' | 'west'

export interface Maze {
  uuid: string
  dimensions: {
    height: number
    width: number
  }
  positions: {
    domokun: number
    end: number
    pony: number
  }
  structure: ('north' | 'west')[][]
}

export interface FetchMazeResponse {
  'data': ('north' | 'west')[][]
  'domokun': [number]
  'end-point': [number]
  'pony': [number]
  'size': [number, number]
}

export interface GenerateMazeData {
  difficulty: number
  height: number
  width: number
}

export interface GenerateMazeResponse {
  maze_id: string
}

export interface MovePlayerResponse {
  'state': 'active' | 'over'
  'hidden-url'?: string
}

export interface Movement {
  direction: Direction
  newPosition: number
}
