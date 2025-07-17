// app/components/game/phases/CooldownPhase.tsx
import React from 'react'

interface CooldownPhaseProps {
  correctResponses: number
}

export function CooldownPhase({ correctResponses }: CooldownPhaseProps) {
  return (
    <div className="text-center">
      <div className="mb-8">
        <h3 className="text-2xl font-light text-gray-800 mb-4">Cool Down</h3>
        <p className="text-gray-600">Press spacebar gently, whenever you feel ready</p>
      </div>
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 mx-auto mb-8 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white opacity-75"></div>
      </div>
      <div className="text-center">
        <div className="text-lg text-gray-600">Gentle presses: {correctResponses}/5</div>
      </div>
    </div>
  )
}