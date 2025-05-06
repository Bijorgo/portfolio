import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css';
import Home from './pages/Home'
import Error from './pages/Error'
//import { BrowserRouter, Routes } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
