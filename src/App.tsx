import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Item from './components/Item/Item'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const menu = [
    {
      name : "Coffee",
      image : "https://source.unsplash.com/300x200/?coffee",
      rating : 4.9,
      price : 200,
    },
    {
      name : "Burger",
      image : "https://source.unsplash.com/300x200/?burger",
      rating : 4.4,
      price : 90,
    },
    {
      name : "Milk",
      image : "https://source.unsplash.com/300x200/?milk",
      rating : 4.4,
      price : 90,
    },
    {
      name : "Tea",
      image : "https://source.unsplash.com/300x200/?tea",
      rating : 4.1,
      price : 90,
    },
    {
      name : "Spagetti",
      image : "https://source.unsplash.com/300x200/?spagetti",
      rating : 4.7,
      price : 60,
    },
  ]

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
      <div className="menu">
        {menu.map(item => <Item item={item} key={item.name}/>)}
      </div>
    </div>
  )
}

export default App
