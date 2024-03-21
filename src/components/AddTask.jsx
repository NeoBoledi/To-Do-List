import React from 'react'
import {Link} from 'react-router-dom'
import "./assets/AddTask.css"

function AddTask() {
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
     <h3>Add New Task</h3>

     <form>
        <input type="text" placeholder="Task Name"/>
        <input type="text" placeholder="Task Description"/>
        <input type="date" placeholder="Task Start Date"/>
        <input type="date" placeholder="Task End Date"/>
        <input type="date" placeholder="Created Date"/>
     </form>
     <button class="custom-btn btn"><span>Add Task</span></button>
     </div>
   </div>
 </div>
</header>
   </>
  )
}

export default AddTask