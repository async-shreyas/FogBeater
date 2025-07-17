// app/components/game/phases/FocusPhase.tsx
import React from 'react'

interface FocusPhaseProps {
  currentWord: string
  correctResponses: number
}

export function FocusPhase({ currentWord, correctResponses }: FocusPhaseProps) {
  return (
    <div className="text-center">
      <div className="mb-8">
        <h3 className="text-2xl font-light text-gray-800 mb-4">Type the Word</h3>
        <p className="text-gray-600">Type each letter of the word as it appears</p>
      </div>
      <div className="text-4xl font-light text-blue-600 mb-8 min-h-[3rem] flex items-center justify-center">
        {currentWord}
      </div>
      <div className="text-center">
        <div className="text-lg text-gray-600">Words completed: {correctResponses}/8</div>
      </div>
    </div>
  )
}