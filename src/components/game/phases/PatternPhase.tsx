// app/components/game/phases/PatternPhase.tsx
import React from 'react'

interface PatternPhaseProps {
  currentSequence: string[]
  playerSequence: string[]
  level: number
}

export function PatternPhase({ currentSequence, playerSequence, level }: PatternPhaseProps) {
  return (
    <div className="text-center">
      <div className="mb-8">
        <h3 className="text-2xl font-light text-gray-800 mb-4">Remember the Pattern</h3>
        <p className="text-gray-600">Watch the sequence, then repeat it using arrow keys</p>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        {currentSequence.map((key, index) => (
          <div
            key={index}
            className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-200 ${
              playerSequence[index] === key ? 'bg-green-200' : 
              playerSequence[index] ? 'bg-red-200' : 'bg-gray-100'
            }`}
          >
            {key === 'ArrowUp' && '↑'}
            {key === 'ArrowDown' && '↓'}
            {key === 'ArrowLeft' && '←'}
            {key === 'ArrowRight' && '→'}
          </div>
        ))}
      </div>
      <div className="text-center">
        <div className="text-lg text-gray-600">Level {level} • {playerSequence.length}/{currentSequence.length}</div>
      </div>
    </div>
  )
}