/* import React from 'react'

const App = () => {

  function clicktab(){
    console.log("clicked button");
  }

  function mouseclick1() {
    console.log("MouseClick");
  }


  return (
    <div>
      <button onClick={clicktab}>Click You</button>
      <button onMouseEnter={mouseclick1}>explore You</button>
    </div>
  )
}

export default App */

/* import React from 'react'

const App = () => {

  function clicktab(elem){
    console.log(elem.target.value);
  }

  return (
    <div>
      <input onChange={clicktab} type="text" placeholder='Enter Name' />
    </div>
  )
}

export default App
 */

import React from 'react'

const App = () => {

  function clicktab(elem){
    console.log(elem.target.value);
  }

  return (
    <div onWheel={function pagescrolling(elem){
      console.log(elem.deltaY);
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App
