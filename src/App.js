import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Aboutme/> } />
      <Route path="/projects" element={ <Projects/> }/>
    </Routes>
  );
}

export default App;
