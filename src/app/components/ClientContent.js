'use client'

import { useState } from 'react'

export default function ClientSideActions() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn)

  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100">Create Your Bento</button>
      <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100" onClick={toggleLogin}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      <button className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100">📍</button>
    </div>
  )
}