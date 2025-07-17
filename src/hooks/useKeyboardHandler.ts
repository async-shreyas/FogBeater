import { useEffect, useCallback } from 'react'
import { GameState } from '~/types/game'

interface UseKeyboardHandlerProps {
  gameState: string
  phase: number
  level: number
  score: number
  currentSequence: string[]
  playerSequence: string[]
  currentWord: string
  breathingPhase: string
  correctResponses: number
  setCurrentKey: (key: string) => void
  setScore: (score: number | ((prev: number) => number)) => void
  setPhase: (phase: number) => void
  setLevel: (level: number | ((prev: number) => number)) => void
  setPlayerSequence: (sequence: string[] | ((prev: string[]) => string[])) => void
  setCorrectResponses: (count: number | ((prev: number) => number)) => void
  setCurrentWord: (word: string | ((prev: string) => string)) => void
  setFeedback: (feedback: string) => void
  setGameState: (state: GameState) => void
  generateSequence: () => void
  calmingWords: string[]
}

export function useKeyboardHandler({ 
  gameState, 
  phase, 
  level, 
  score, 
  currentSequence, 
  playerSequence, 
  currentWord, 
  breathingPhase, 
  correctResponses,
  setCurrentKey,
  setScore,
  setPhase,
  setLevel,
  setPlayerSequence,
  setCorrectResponses,
  setCurrentWord,
  setFeedback,
  setGameState,
  generateSequence,
  calmingWords
}: UseKeyboardHandlerProps) {
  
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (gameState !== 'playing') return
    
    const key = event.key
    
    // Phase 0: Warm-up - any key press
    if (phase === 0) {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(key)) {
        setCurrentKey(key)
        setScore(prev => prev + 1)
        setFeedback('Great! Keep going...')
        
        setTimeout(() => {
          setCurrentKey('')
          setFeedback('')
        }, 500)
        
        if (score >= 9) {
          setPhase(1)
          setLevel(1)
          generateSequence()
          setFeedback('Moving to pattern building...')
        }
      }
    }
    
    // Phase 1: Pattern Building
    else if (phase === 1) {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        const newPlayerSequence = [...playerSequence, key]
        setPlayerSequence(newPlayerSequence)
        
        if (newPlayerSequence.length === currentSequence.length) {
          const correct = newPlayerSequence.every((k, i) => k === currentSequence[i])
          if (correct) {
            setScore(prev => prev + 10)
            setCorrectResponses(prev => prev + 1)
            setFeedback('Perfect! Well done!')
            setLevel(prev => prev + 1)
            
            setTimeout(() => {
              if (correctResponses >= 4) {
                setPhase(2)
                setCurrentWord(calmingWords[Math.floor(Math.random() * calmingWords.length)])
                setFeedback('Moving to focus challenge...')
              } else {
                generateSequence()
                setFeedback('')
              }
            }, 1000)
          } else {
            setFeedback('Try again - take your time')
            setTimeout(() => {
              setPlayerSequence([])
              setFeedback('')
            }, 1000)
          }
        }
      }
    }
    
    // Phase 2: Focus Challenge
    else if (phase === 2) {
      if (currentWord && key === currentWord[0]) {
        setCurrentWord(prev => prev.slice(1))
        setScore(prev => prev + 5)
        
        if (currentWord.length === 1) {
          setCorrectResponses(prev => prev + 1)
          setFeedback('Word completed!')
          
          if (correctResponses >= 7) {
            setPhase(3)
            setFeedback('Moving to breathing sync...')
          }
        }
      }
    }
    
    // Phase 3: Breathing Sync
    else if (phase === 3) {
      if (key === ' ' && breathingPhase === 'inhale') {
        setScore(prev => prev + 3)
        setCorrectResponses(prev => prev + 1)
        setFeedback('In sync with your breath...')
        
        if (correctResponses >= 10) {
          setPhase(4)
          setFeedback('Moving to cool-down...')
        }
      }
    }
    
    // Phase 4: Cool-down
    else if (phase === 4) {
      if (key === ' ') {
        setScore(prev => prev + 1)
        setCorrectResponses(prev => prev + 1)
        setFeedback('Mind cleared. Well done.')
        
        if (correctResponses >= 5) {
          setGameState('complete')
        }
      }
    }
  }, [gameState, phase, level, score, currentSequence, playerSequence, currentWord, breathingPhase, correctResponses, setCurrentKey, setScore, setPhase, setLevel, setPlayerSequence, setCorrectResponses, setCurrentWord, setFeedback, setGameState, generateSequence, calmingWords])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])
}