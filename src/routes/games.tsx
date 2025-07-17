import { createFileRoute } from '@tanstack/react-router'
import { MindClearingGame } from '../components/MindClearingGame'

export const Route = createFileRoute("/games")({
  component: GamePage,
})

function GamePage() {
  return (
    <div className="min-h-screen">
      <MindClearingGame />
    </div>
  )
}