import React, { useState, useEffect } from 'react'
import { GameMenu } from './game/GameMenu'
import { GameComplete } from './game/GameComplete'
import { GameHeader } from './game/GameHeader'
import { GameArea } from './game/GameArea'
import { ProgressBar } from './game/ProgressBar'
import { useGameLogic } from '~/hooks/useGameLogic'
import { useKeyboardHandler } from '../hooks/useKeyboardHandler'
import { GameState, GamePhase } from '../types/game'

export function MindClearingGame() {
  const {
    gameState,
    phase,
    level,
    score,
    sessionTime,
    correctResponses,
    feedback,
    currentSequence,
    playerSequence,
    currentKey,
    currentWord,
    breathingPhase,
    startGame,
    resetGame,
    phases,
    calmingWords,
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
  } = useGameLogic()

  useKeyboardHandler({ 
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
  })

  if (gameState === 'menu') {
    return <GameMenu onStart={startGame} />
  }

  if (gameState === 'complete') {
    return <GameComplete score={score} sessionTime={sessionTime} onReset={resetGame} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <GameHeader 
          phase={phase}
          phases={phases}
          sessionTime={sessionTime}
          score={score}
          onReset={resetGame}
        />
        <GameArea 
          phase={phase}
          currentKey={currentKey}
          currentSequence={currentSequence}
          playerSequence={playerSequence}
          currentWord={currentWord}
          breathingPhase={breathingPhase}
          correctResponses={correctResponses}
          level={level}
          score={score}
          feedback={feedback}
        />
        <ProgressBar phase={phase} />
      </div>
    </div>
  )
}