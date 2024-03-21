import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
  return (

    <>
     <header className="header-area">
     <div className="navbar-area">
    <div className="container">
      <nav className="site-navbar">
        
        <a href="#home" className="site-logo">Mes Tâches</a>

       
        <ul>
       <li><Link to="/">Home</Link></li> 
        <li><Link to="/add">Add Task</Link></li>
        <li><Link to="/tasks">View Tasks</Link></li>
        </ul>

        
        <button className="nav-toggler">
          <span></span>
        </button>
      </nav>
    </div>
  </div>
 </header>
    </>

   
  )
}

export default Nav