import react from 'react'
import Navbar from './Navbar/Navbar'
import ContactApp from './Contact/ContactApp'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

let App = ()=>{
    return <div>
        <Router>
        <Navbar />
            <Routes>
                <Route exact path="/contactApp" element={<ContactApp />} />
            </Routes>
        </Router>
    </div>
}

export default App