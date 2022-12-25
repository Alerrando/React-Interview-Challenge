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
      <div className='container-buttons'>
        <button onClick={e => handleUndo(e)}>Desfazer</button>
        <button>Refazer</button>
      </div>
      {listCircle.map((circle: AppProps, index: number) => {
        return(
          <>
            <span className='circle' key={index} style={{left: `${circle.left}px`, top: `${circle.top}px`}}></span>
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

  function handleUndo(e: MouseEvent){
    e.stopPropagation();
    setListRecover(listCircle);

    const remove = listCircle.filter((circle: AppProps, index: number) => index !== listCircle.length - 1);
    console.log(remove, listCircle)
    setListCircle(remove);
  }
}