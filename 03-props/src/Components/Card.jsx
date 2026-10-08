import React from 'react'

const Card = (prop) => {
  return (
    <div className='card'>
      <img src="https://images.unsplash.com/photo-1778100207121-2ee237397a43?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      <h1>{prop.user}</h1>
      <p>{prop.pt}</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
