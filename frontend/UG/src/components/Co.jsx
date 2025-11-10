import React, { useState } from 'react'

function Co() {
    const [count, setCount]=useState(0);
    function inc(){
           setCount(count+1)
    }
    function dec(){
          setCount(count-1)
    }
  return (
    <div>
        <button OnCLick={inc}>+</button>
        <span>{count}</span>
        <button OnCLick={dec}>-</button>
    </div>
  )
}

export default Co