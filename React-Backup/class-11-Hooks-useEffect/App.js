import react from 'react'
import Navbar from './Navbar/Navbar'
import Products from './Products/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
let App = ()=>{
    return <div>
        <Router>
        <Navbar />
            <Products />
        </Router>
    </div>
}

export default App