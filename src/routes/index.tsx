import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-6">
          Welcome to TanStack Start
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A modern React framework with TanStack Router
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">
              Mind Clearing Game
            </h3>
            <p className="text-gray-600 mb-4">
              A gentle game designed to help clear brain fog through progressive focus exercises.
            </p>
            <a
              href="/games"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Play Game
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">
              Posts
            </h3>
            <p className="text-gray-600 mb-4">
              Explore sample posts and content management features.
            </p>
            <a
              href="/posts"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              View Posts
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">
              Users
            </h3>
            <p className="text-gray-600 mb-4">
              Browse user profiles and management interface.
            </p>
            <a
              href="/users"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              View Users
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}