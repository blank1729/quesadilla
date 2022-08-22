import './App.css'
import Navbar from './components/Navbar/Navbar'
import Greeting from './components/Greeting/Greeting'
import Item from './components/Item/Item'
import Menu from './pages/Menu/Menu'

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
    </div>
  )
}

export default App
