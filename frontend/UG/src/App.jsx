import React, { useEffect, useState } from 'react'
import Fashion from './components/Fashion'
import './App.css'
function App() {
  const[books,setBooks]=useState([])
  useEffect(()=>{
    fetch('https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=e36fa31ee1f0aac4dc37b0c4d1b938e5')
    .then(res=>res.json())
    .then(data=>{
      setBooks(data);
    })
  },[])

  return (
    <div>
      <div id="adi">     {
        books.map((b,i)=>(
          <Fashion key={i} props={b}/>
        ))
          
      }
      </div>
 
    </div>
  )
}

export default App