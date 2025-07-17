import { useState, useEffect, useCallback } from 'react'
import { GameState, GamePhase } from '~/types/game'

export function useGameLogic() {
  const [gameState, setGameState] = useState<GameState>('menu')
  const [phase, setPhase] = useState(0)
  const [level, setLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [currentSequence, setCurrentSequence] = useState<string[]>([])
  const [playerSequence, setPlayerSequence] = useState<string[]>([])
  const [currentKey, setCurrentKey] = useState('')
  const [feedback, setFeedback] = useState('')
  const [sessionTime, setSessionTime] = useState(0)
  const [breathingPhase, setBreathingPhase] = useState('inhale')
  const [breathingTimer, setBreathingTimer] = useState(0)
  const [currentWord, setCurrentWord] = useState('')
  const [wordTimer, setWordTimer] = useState(0)
  const [correctResponses, setCorrectResponses] = useState(0)

  const phases: GamePhase[] = [
    { name: 'Warm-up', description: 'Simple key presses to get started' },
    { name: 'Pattern Building', description: 'Remember and repeat sequences' },
    { name: 'Focus Challenge', description: 'Type words as they appear' },
    { name: 'Breathing Sync', description: 'Sync your breathing with keypresses' },
    { name: 'Cool-down', description: 'Gentle finish to clear your mind' }
  ]

  const calmingWords = [
    'peace', 'calm', 'clear', 'focus', 'breathe', 'relax', 'center', 'flow',
    'bright', 'light', 'soft', 'gentle', 'quiet', 'still', 'pure', 'fresh'
  ]

  // Timer for session tracking
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (gameState === 'playing') {
      interval = setInterval(() => {
        setSessionTime(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [gameState])

  // Breathing timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (phase === 3 && gameState === 'playing') {
      interval = setInterval(() => {
        setBreathingTimer(prev => {
          if (prev >= 4) {
            setBreathingPhase(current => {
              if (current === 'inhale') return 'hold'
              if (current === 'hold') return 'exhale'
              return 'inhale'
            })
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [phase, gameState])

  // Word timer for focus challenge
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (phase === 2 && gameState === 'playing') {
      interval = setInterval(() => {
        setWordTimer(prev => {
          if (prev >= 3) {
            setCurrentWord(calmingWords[Math.floor(Math.random() * calmingWords.length)])
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [phase, gameState])

  const generateSequence = useCallback(() => {
    const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    const length = Math.min(3 + Math.floor(level / 2), 8)
    const sequence: string[] = []
    for (let i = 0; i < length; i++) {
      sequence.push(keys[Math.floor(Math.random() * keys.length)])
    }
    setCurrentSequence(sequence)
    setPlayerSequence([])
  }, [level])

  const startGame = () => {
    setGameState('playing')
    setPhase(0)
    setLevel(1)
    setScore(0)
    setSessionTime(0)
    setCorrectResponses(0)
    setFeedback('Press any arrow key or spacebar to begin...')
  }

  const resetGame = () => {
    setGameState('menu')
    setPhase(0)
    setLevel(1)
    setScore(0)
    setCurrentSequence([])
    setPlayerSequence([])
    setCurrentKey('')
    setFeedback('')
    setSessionTime(0)
    setCorrectResponses(0)
    setCurrentWord('')
  }

  return {
    gameState,
    phase,
    level,
    score,
    currentSequence,
    playerSequence,
    currentKey,
    feedback,
    sessionTime,
    breathingPhase,
    breathingTimer,
    currentWord,
    wordTimer,
    correctResponses,
    phases,
    calmingWords,
    startGame,
    resetGame,
    generateSequence,
    setGameState,
    setPhase,
    setLevel,
    setScore,
    setCurrentSequence,
    setPlayerSequence,
    setCurrentKey,
    setFeedback,
    setSessionTime,
    setBreathingPhase,
    setBreathingTimer,
    setCurrentWord,
    setWordTimer,
    setCorrectResponses
  }
}