import React from "react";
import {Link} from "react-router-dom"
import "./assets/Navbar.css"

function Navbar() {
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

  <div className="intro-area">
    <div className="container">
      <h2>Streamline Your Tasks with Mes Tâches</h2>
      <p>Tasks Made Simple, Results Made Remarkable.</p>

      <Link to="add"><button class="custom-btn btn"><span>Add Task</span></button></Link>
      <Link to="tasks"><button class="custom-btn btn"><span>View Task</span></button></Link>  
    </div>
  </div>
</header>
    </>
  );
}
export default Navbar