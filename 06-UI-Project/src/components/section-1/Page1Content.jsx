import React from 'react'
import Leftcontant from './leftcontant.jsx'
import RightContant from './rightcontant.jsx'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex items-center gap-10 justify-between h-[90vh]  px-18'>
      <Leftcontant />
      <RightContant users={props.users} />
    </div>
  )
}

export default Page1Content
