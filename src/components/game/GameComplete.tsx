import React from 'react'

interface GameCompleteProps {
  score: number
  sessionTime: number
  onReset: () => void
}

export function GameComplete({ score, sessionTime, onReset }: GameCompleteProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-light text-gray-800 mb-6">Session Complete</h1>
        <p className="text-gray-600 mb-4">
          Congratulations! You've completed your mind clearing session.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-2xl font-light text-gray-800 mb-2">{formatTime(sessionTime)}</div>
          <div className="text-sm text-gray-600">Session Duration</div>
          <div className="text-2xl font-light text-blue-600 mt-2">{score}</div>
          <div className="text-sm text-gray-600">Focus Points</div>
        </div>
        <button
          onClick={onReset}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          New Session
        </button>
      </div>
    </div>
  )
}