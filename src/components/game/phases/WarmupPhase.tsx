import React from 'react'

interface WarmupPhaseProps {
  currentKey: string
  score: number
}

export function WarmupPhase({ currentKey, score }: WarmupPhaseProps) {
  const keyColors = {
    'ArrowUp': 'bg-blue-200 hover:bg-blue-300',
    'ArrowDown': 'bg-green-200 hover:bg-green-300',
    'ArrowLeft': 'bg-purple-200 hover:bg-purple-300',
    'ArrowRight': 'bg-orange-200 hover:bg-orange-300',
    ' ': 'bg-gray-200 hover:bg-gray-300'
  }

  return (
    <div className="text-center">
      <div className="mb-8">
        <h3 className="text-2xl font-light text-gray-800 mb-4">Let's Start Gently</h3>
        <p className="text-gray-600">Press any arrow key or spacebar to begin warming up your mind</p>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        {(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'] as const).map(key => (
          <div
            key={key}
            className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-200 ${
              currentKey === key ? 'scale-110 shadow-lg' : ''
            } ${keyColors[key]}`}
          >
            {key === 'ArrowUp' && '↑'}
            {key === 'ArrowDown' && '↓'}
            {key === 'ArrowLeft' && '←'}
            {key === 'ArrowRight' && '→'}
          </div>
        ))}
        <div
          className={`w-20 h-16 rounded-lg flex items-center justify-center transition-all duration-200 ${
            currentKey === ' ' ? 'scale-110 shadow-lg' : ''
          } ${keyColors[' ']}`}
        >
          Space
        </div>
      </div>
      <div className="text-center">
        <div className="text-lg text-gray-600">{score}/10 key presses</div>
      </div>
    </div>
  )
}