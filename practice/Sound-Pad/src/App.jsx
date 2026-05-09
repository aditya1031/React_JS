import { useState } from 'react'
import './App.css'

import padsData from './pads'
import Pad from './Pad';
function App(props) {

  const [pads, setPads] = useState(padsData);

  const bgColor = props.darkMode ? "#222222" : "#cccccc";

  const buttonElements = pads.map(pad => {
    return (
      <Pad
        key={pad.id}
        color={pad.color}
        on={pad.on}
        toggle={toggle}
        id={pad.id}
      />
    )
  })

  function turnAllOff() {
    setPads(prevPads => prevPads.map(pad => ({
      ...pad,
      on: false
    })))
  }

  function toggle(id) {
    // map over the pads array if the current item has
    // the same id as the one passed in this function , 
    // then flip it's 'on' value.
    setPads(prevPads =>
      prevPads.map(item => {
        if (item.id === id) {
          return {
            ...item,
            on: !item.on
          }
        }
        else {
          return item
        }
      }
      ))
  }


  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
      <button
        onClick={turnAllOff}
        style={{ backgroundColor: "red", opacity: 1 }
        }>Turn Off</button>

    </main>

  )
}

export default App
