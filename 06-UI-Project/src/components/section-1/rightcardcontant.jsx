import React from 'react'

const rightcardcontant = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between text-white'>
        <h2 className='bg-white text-1xl text-black font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <p className='text-lg leading-relaxed mt-50'>{props.intro}</p>
        <div className='flex justify-between'>
            <button className='bg-blue-600 font-medium px-8 py-2 rounded-full hover:bg-gray-200'>{props.tag}</button>
            <button className='bg-blue-600 font-medium px-3 py-2 rounded-full hover:bg-gray-200 ml-4'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
  )
}

export default rightcardcontant
