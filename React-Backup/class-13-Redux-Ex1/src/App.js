import react from 'react'
// import Navbar from './Navbar/Navbar'
// import ContactApp from './Contact/ContactApp'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import Message from './Message/Message'
import {store} from './redux/store'

let App = ()=>{
    return <div>
        <Provider store={store}>
            <Message />
        </Provider>
    </div>
}

export default App