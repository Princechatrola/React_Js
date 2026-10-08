import React from 'react'

const navbar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyApp</h1>

        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Get Started
          </button>
      </div>
    </nav>
    </div>
  )
}

export default navbar
