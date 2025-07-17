import React from 'react'

interface ProgressBarProps {
  phase: number
}

export function ProgressBar({ phase }: ProgressBarProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600">Progress</span>
        <span className="text-sm text-gray-600">{phase + 1}/5 phases</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${((phase + 1) / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}