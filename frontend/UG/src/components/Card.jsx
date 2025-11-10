import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div id="adi">
        <img src="https://tse3.mm.bing.net/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" height={100} width={100} />
        <h1>{props.name} </h1>
        <h3>{props.edu}</h3>
    </div>
  )
}

export default Card