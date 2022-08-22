import React, { useState } from 'react'
import Item from '../../components/Item/Item'
import './Menu.css'

function Menu() {
  const [menu, setMenu] = useState([
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
  ])
  return (
    <div className='menu' id="menu">
      <h1>MENU</h1>
      <div className="menu-items">
        {menu.map(item => <Item item={item} key={item.name}/>)}
      </div>
    </div>
  )
}

export default Menu