// Routing Example using react-router-dom version 5.3.3
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from "./Components/Services";
import Contact from './Components/Contact'
function App() {
    return <div>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    </div>
    
}

export default App