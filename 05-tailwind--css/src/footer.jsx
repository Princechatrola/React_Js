import React from 'react'

const footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 flex justify-between">
            
            <div className="w-[30%]">
            <h1 className="text-xl font-semibold">About Us</h1>
            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>

            <div className="flex gap-50">
            <ul>
                <li className='font-bold text-lg'>Solutions</li>
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
            </ul>

            <ul>
                <li className='font-bold text-lg'>Support</li>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Guides</li>
                <li>API Status</li>
            </ul>

            <ul>
                <li className='font-bold text-lg'>Company</li>
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Careers</li>
            </ul>
            <ul>
                <li className='font-bold text-lg'>Legal</li>
                <li>Claim</li>
                <li>Policy</li>
                <li>Terms</li>
            </ul>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default footer
