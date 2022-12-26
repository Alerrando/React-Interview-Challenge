import { useState, MouseEvent, useEffect } from 'react'
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
        <button onClick={e => handleUndo(e)} disabled={listCircle.length == 0 ? true : false}>Desfazer</button>
        <button onClick={e => handleRedo(e)} disabled={listRecover.length <= listCircle.length}>Refazer</button>
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
    
    setListRecover([...listRecover ,coordinates]);
    setListCircle([...listCircle ,coordinates]);
  }

  function handleUndo(e: MouseEvent){
    e.stopPropagation();

    const remove = listCircle.filter((circle: AppProps, index: number) => index !== listCircle.length - 1);
    setListCircle(remove);
  }

  function handleRedo(e: MouseEvent){
    e.stopPropagation();

    const recoverInfo = listRecover[listCircle.length];
    const recover = {
      top: recoverInfo.top,
      left: recoverInfo.left
    }
    console.log(listRecover, listCircle);
    setListCircle([...listCircle , recover]);
  }
}