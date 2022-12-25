import { useState, MouseEvent } from 'react'
import './App.css'

type AppProps = {
  top: number;
  left: number;
}

export function App() {
  const [listCircle, setListCircle] = useState<any[]>([]);
  const [listRecover, setListRecover] = useState<any[]>([]);

  return (
    <div className="container" onClick={ e => addCircle(e) }>
      {listCircle.map((circle: AppProps) => {
        return(
          <>
            <span className='circle' style={{left: `${circle.left}px`, top: `${circle.top}px`}}></span>
          </>
        )
      })}
    </div>
  )

  function addCircle(e: MouseEvent){
    const coordinates: AppProps = {
      top: e.clientY,
      left: e.clientX
    } 
    
    setListCircle([...listCircle ,coordinates]);
  }
}