import React from 'react'
import RightCard from './rightcard.jsx'

const RightContant = (props) => {
  return (
    <div id='right' className='h-full flex overflow-x-auto flex-nowrap gap-10 w-2/3 p-6'>
      {props.users.map(function(elem,idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />
      })}
    </div>
  )
}

export default RightContant