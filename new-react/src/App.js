import react from 'react'
// import Navbar from './Navbar/Navbar'
// import ContactApp from './Contact/ContactApp'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import ContactApp from './Contact/ContactApp'


let App = ()=>{
    return <div>
        <Provider>
            <ContactApp />
        </Provider>
    </div>
}

export default App