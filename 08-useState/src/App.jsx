/* 
import React, { useState } from 'react'
const App = () => {
  // const [ReadOnly,WriteOnly] = useState(10);
  const [num,setNum] = useState("prince");
  const [user,setUser] = useState([10,20,30]);

  function changeNum()
  {
    setNum("prince Nileshbhai Chatrola");
    setUser([20," ",40," ",60]);
  }

  return (
    <div>
      <h1>Value of num is {num} and user is this {user}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}
export default App
*/

/* import React, { useState } from 'react'
import { useActionState } from 'react'
const App = () => {
  // const [ReadOnly,WriteOnly] = useState(10);

  const [num,setNum] = useState(0);

  function valueincrease(){
    setNum(num+1);
  }

  function valuedecrease(){
    setNum(num-1);
  }

  function jumpby5(){
    setNum(num+5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={valueincrease}>increase</button>
      <button onClick={valuedecrease}>decrease</button>
      <button onClick={jumpby5}>jump by 5</button>
    </div>
    
  )
}
export default App */


// useEffect
/* import { useEffect, useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect executed");
    },[count]);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </>
    );
}

export default App */

// useEffect with API

/* 
import { useEffect, useState } from "react";

function App(){
  const[users,setUser] = useState([]);

  useEffect(()=>{
    const fetchuses = async () => {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        setUser(data);
      }
      catch(error)
      {
        console.log(error);
      }
    };
    fetchuses();
  },[]
);
    

  return(
    <div>
      <h1>users</h1>
      {users.map(user=>(
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
 */

// useEffect with state
import {useEffect, useState} from "react";
 function App() {
  
}
