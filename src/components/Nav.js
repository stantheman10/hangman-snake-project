import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='navContainer'>
        <div>
            <h1>Welcome to GameZone</h1>
            <p>Please select your game</p>
        </div>
        
        <div>
        <Link className="nav" to="/hangman">Hangman</Link>   
        <Link className="nav" to="/snake">Snake Eater</Link>    
        </div>
    </div>
  )
}

export default Nav
