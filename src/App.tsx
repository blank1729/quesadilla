import './App.css'
import Navbar from './components/Navbar/Navbar'
import Greeting from './components/Greeting/Greeting'
import Item from './components/Item/Item'
import Menu from './pages/Menu/Menu'
import { FaSearch } from 'react-icons/fa'

function App() {
  const item = {
    name: "Biryani",
    price: 450,
    rating: 4.8,
    img: "https://source.unsplash.com/300x200/?Biryani"
  }
  


  return(
    <div className="container">
      <Navbar />
      <Greeting/>
      <Menu/>
        {/* <form action="">
          <label htmlFor="available" className='switch'>
            <input type="checkbox" name="available" id="available"/>
          </label>
        </form> */}
        <div className="search">
          <form action="">
            <label htmlFor="search" className='search-input'>
              <input type="email" id='search' />
            </label>
            <label htmlFor="search-btn">
              <input type="button"/>
            </label>
          </form>

        <div className='prof-menu'>
          <div className='icon'><FaSearch/></div>
          <div className='dropdown'>
            <ul>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>
        </div>

        </div>
      </div>
  )
}

export default App
