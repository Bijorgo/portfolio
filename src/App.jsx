import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import NavBar from './componenets/NavBar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
//import { BrowserRouter, Routes } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar /> {/* Display nav bar at top of page*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Detail />} />
        <Route path="error" element={<Error />} /> {/*Change this path to * when complete */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
