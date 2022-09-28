import { Link } from 'react-router-dom'
function Navbar(){

    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="#" className="navbar-brand">React Routing  Example</a>
        <ul className="navbar-nav ml-auto">
            <li className="nav nav-list"><Link to="/home" className="nav nav-link">Home</Link></li>          {/* Link--instead of a & to--instaed of href */}
            <li className="nav nav-list"><Link to="/about" className="nav nav-link">About</Link></li>
            <li className="nav nav-list"><Link to="/services" className="nav nav-link">Services</Link></li>
            <li className="nav nav-list"><Link to="/contact" className="nav nav-link">Contact</Link></li>
        </ul>
    </nav>
}

export default Navbar