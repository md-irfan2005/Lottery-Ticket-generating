import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './Lottery'

function App() {
  let winCondition =(ticket) => {
    return ticket[0] === 0;
  }

  return (
    < div className='app'>
      <Lottery n={3} winCondition={winCondition} />
    </div>
  )
}

export default App
