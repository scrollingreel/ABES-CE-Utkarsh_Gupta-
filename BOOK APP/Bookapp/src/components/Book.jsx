import React, { useState } from 'react'
import "./book.css"

function Book(props) {
  const [count, setCount] = useState(0)

  function add() {
    if (count >= 10) {
      alert("Maximum limit reached! You can only go up to 10.")
    } else {
      setCount(count + 1)
    }
  }

  function remove() {
    if (count <= 0) {
      alert("Minimum limit reached! You cannot go below 0.")
    } else {
      setCount(count - 1)
    }
  }
  

  return (
    <div id="book">
      <img src={props.img} alt="" height={100} width={100} />
      <h1>Title: {props.name}</h1>
      <h1>{props.price}</h1>
      <div>
        <button onClick={add}>+</button>
        <span>{count}</span>
        <button onClick={remove}>-</button>
      </div>
      
      <button>Add to Cart</button>
    </div>
  )
}

export default Book
