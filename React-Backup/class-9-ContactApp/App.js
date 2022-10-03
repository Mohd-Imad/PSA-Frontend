import React from 'react'
import Navbar from './Navbar/Navbar'
import ContactApp from '../../React-Backup/class-9-ContactApp/Contact/ContactApp/ContactApp'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App () {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/contactapp' element={<ContactApp />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
