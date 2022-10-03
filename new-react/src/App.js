import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Components/Message'
import MessageComponent from './Components/MessageComponent'
import Counter from './Components/Counter'
import CounterClass from './Components/CounterClass'
import Product from './Components/Product'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App () {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/message' element={<Message />} />
                <Route exact path='/messagecomponent' element={<MessageComponent />} />
                <Route exact path='/counter' element={<Counter />} />
                <Route exact path='/counterclass' element={<CounterClass />} />
                <Route exact path='/product' element={<Product />} />
            </Routes> 
        </Router>
    </div>
  )
}

export default App
