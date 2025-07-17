import React from 'react'

interface GameMenuProps {
  onStart: () => void
}

export function GameMenu({ onStart }: GameMenuProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-light text-gray-800 mb-6">Mind Clearing Game</h1>
        <p className="text-gray-600 mb-8">
          A gentle game designed to help clear brain fog through progressive focus exercises.
        </p>
        <button
          onClick={onStart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Start Session
        </button>
        <div className="mt-6 text-sm text-gray-500">
          <p>Use arrow keys, spacebar, and letter keys</p>
          <p>Take your time • No pressure • Just focus</p>
        </div>
      </div>
    </div>
  )
}
