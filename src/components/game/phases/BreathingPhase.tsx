// app/components/game/phases/BreathingPhase.tsx
import React from 'react'

interface BreathingPhaseProps {
  breathingPhase: string
  correctResponses: number
}

export function BreathingPhase({ breathingPhase, correctResponses }: BreathingPhaseProps) {
  return (
    <div className="text-center">
      <div className="mb-8">
        <h3 className="text-2xl font-light text-gray-800 mb-4">Breathe in Sync</h3>
        <p className="text-gray-600">Press spacebar when the circle shows "inhale"</p>
      </div>
      <div className="flex flex-col items-center mb-8">
        <div 
          className={`w-32 h-32 rounded-full transition-all duration-1000 flex items-center justify-center text-white font-medium ${
            breathingPhase === 'inhale' ? 'bg-blue-500 scale-110' :
            breathingPhase === 'hold' ? 'bg-purple-500 scale-105' :
            'bg-green-500 scale-90'
          }`}
        >
          {breathingPhase === 'inhale' && 'Inhale'}
          {breathingPhase === 'hold' && 'Hold'}
          {breathingPhase === 'exhale' && 'Exhale'}
        </div>
        <div className="mt-4 text-lg text-gray-600">
          {breathingPhase === 'inhale' ? 'Press spacebar now' : 'Just breathe...'}
        </div>
      </div>
      <div className="text-center">
        <div className="text-lg text-gray-600">Breaths synced: {correctResponses}/10</div>
      </div>
    </div>
  )
}