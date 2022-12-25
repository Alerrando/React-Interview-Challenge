import { useState, MouseEvent } from 'react'
import './App.css'

export function App() {

  return (
    <div className="container" onClick={ e => addCircle(e) }>
      <h1>Hello World</h1>
    </div>
  )

  function addCircle(e: MouseEvent){
    console.log(e.clientX, e.clientY);
  }
}