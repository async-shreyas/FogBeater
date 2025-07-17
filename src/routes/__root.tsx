/// <reference types="vite/client" />

import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import appCss from '../styles/app.css?url'



export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  component: () => (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FogBeater</title>
      </head>
      <body>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center space-x-8">
                  <Link to="/" className="text-xl font-semibold text-gray-900">
                    Start App
                  </Link>
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      activeProps={{
                        className: "text-blue-600 hover:text-blue-700"
                      }}
                    >
                      Home
                    </Link>
                    <Link
                      to="/games"
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      activeProps={{
                        className: "text-blue-600 hover:text-blue-700"
                      }}
                    >
                      Mind Clearing Game
                    </Link>
                    <Link
                      to="/posts"
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      activeProps={{
                        className: "text-blue-600 hover:text-blue-700"
                      }}
                    >
                      Posts
                    </Link>
                    <Link
                      to="/users"
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                      activeProps={{
                        className: "text-blue-600 hover:text-blue-700"
                      }}
                    >
                      Users
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main>
            <Outlet />
          </main>
        </div>
        <TanStackRouterDevtools />
      </body>
    </html>
  ),
})