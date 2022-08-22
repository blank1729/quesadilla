import React, { useState } from 'react'
import Item from './Item/Item'

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
    <div className="menu">
        {menu.map(item => <Item item={item} key={item.name}/>)}
      </div>
  )
}

export default Menu