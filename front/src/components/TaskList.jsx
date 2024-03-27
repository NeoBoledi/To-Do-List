import React from 'react'
import {Link} from "react-router-dom"

function TaskList() {
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
         <span>
         <ul>
      <li><Link to="/">Home</Link></li> 
       <li><Link to="/add">Add Task</Link></li>
       <li><Link to="/tasks">View Tasks</Link></li>
       </ul>
         </span>
       </button>
     </nav>
   </div>
 </div>

 <div className="inner intro-area">
   <div className="inner container">
    
     <div className="form-box">
     <h3>List Of Your Tasks</h3>

    
     <button class="custom-btn btn"><span>Add Task</span></button>
     </div>
   </div>
 </div>
</header>
    </>
  )
}

export default TaskList