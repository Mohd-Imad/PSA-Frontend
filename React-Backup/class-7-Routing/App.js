// React Routing Example using react-router-dom version-6.4.1

import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import About from './Components/About'
import Services from "./Components/Services";
import Contact from './Components/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </Router>
    </div>
  )
}
export default App