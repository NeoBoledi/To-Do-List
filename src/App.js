import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"

function App() {
  return (
    <Router>
     <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/add" element={<AddTask/>}/>
      <Route path="/tasks" element={<TaskList/>}/>
     </Routes>
    </Router>
  );
}

export default App;
