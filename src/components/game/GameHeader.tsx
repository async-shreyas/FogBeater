import React from 'react'
import { GamePhase } from '~/types/game'

interface GameHeaderProps {
  phase: number
  phases: GamePhase[]
  sessionTime: number
  score: number
  onReset: () => void
}

export function GameHeader({ phase, phases, sessionTime, score, onReset }: GameHeaderProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-light text-gray-800">
            {phases[phase].name}
          </h2>
          <p className="text-sm text-gray-600">{phases[phase].description}</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-lg font-light text-gray-800">{formatTime(sessionTime)}</div>
            <div className="text-xs text-gray-500">Time</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-light text-blue-600">{score}</div>
            <div className="text-xs text-gray-500">Points</div>
          </div>
          <button
            onClick={onReset}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}