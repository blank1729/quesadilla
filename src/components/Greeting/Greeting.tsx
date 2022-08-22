import React from 'react'
import './Greeting.css'
import Background from '../../assets/bg.jpg'

function Greeting() {
  return (
    <div className='greeting'>
        <div>
            <h1>Welcome to Quesadilla</h1>
            <div>
                <button>Visit Offline</button>
                <button>Order Online</button>
            </div>
        </div>
    </div>
  )
}

export default Greeting