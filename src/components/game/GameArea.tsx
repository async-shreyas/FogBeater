import React from 'react'
import { WarmupPhase } from './phases/WarmupPhase'
import { PatternPhase } from './phases/PatternPhase'
import { FocusPhase } from './phases/FocusPhase'
import { BreathingPhase } from './phases/BreathingPhase'
import { CooldownPhase } from './phases/CooldownPhase'

interface GameAreaProps {
  phase: number
  currentKey: string
  currentSequence: string[]
  playerSequence: string[]
  currentWord: string
  breathingPhase: string
  correctResponses: number
  level: number
  score: number
  feedback: string
}

export function GameArea({ 
  phase, 
  currentKey, 
  currentSequence, 
  playerSequence, 
  currentWord, 
  breathingPhase, 
  correctResponses, 
  level, 
  score, 
  feedback 
}: GameAreaProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
      {phase === 0 && <WarmupPhase currentKey={currentKey} score={score} />}
      {phase === 1 && <PatternPhase currentSequence={currentSequence} playerSequence={playerSequence} level={level} />}
      {phase === 2 && <FocusPhase currentWord={currentWord} correctResponses={correctResponses} />}
      {phase === 3 && <BreathingPhase breathingPhase={breathingPhase} correctResponses={correctResponses} />}
      {phase === 4 && <CooldownPhase correctResponses={correctResponses} />}
      
      {feedback && (
        <div className="text-center mt-8">
          <div className="text-lg text-green-600 font-light">{feedback}</div>
        </div>
      )}
    </div>
  )
}