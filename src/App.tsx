import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)
  

  return(
    <div className="container">
      <Navbar />
      <div className="main-section">
        {/* <img src="https://source.unsplash.com/900x400/?restaurant" alt=""/> */}
        <div>
          <h1 className='heading'>QUASEDILLA HOME KITCHEN</h1>
          <p className='sub-heading'><i>Open on Thursdays and Fridays</i></p>
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default App
