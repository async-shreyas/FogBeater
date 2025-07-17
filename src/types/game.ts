export interface GamePhase {
  name: string
  description: string
}

export type GameState = 'menu' | 'playing' | 'paused' | 'complete'

export interface GameConfig {
  gameState: GameState
  phase: number
  level: number
  score: number
  sessionTime: number
  correctResponses: number
  feedback: string
}
