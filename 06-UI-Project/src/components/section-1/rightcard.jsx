import React from 'react'
import RightCardContant from './rightcardcontant.jsx'

const rightcard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative    rounded-4xl'>
      <img className='h-full w-full object-cover ' src={props.img} alt="" />

      <RightCardContant id={props.id}tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default rightcard
