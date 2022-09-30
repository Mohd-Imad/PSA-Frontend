import { Link } from 'react-router-dom'
function Navbar(){

    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="#" className="navbar-brand">React Axios Example</a>
        <ul className="navbar-nav ml-auto">
            <li className="nav-list"><Link to="/users" className="nav-link">Users</Link></li>          {/* Link--instead of a & to--instaed of href */}
           <li className="nav-list"><Link to="/products" className="nav-link">Products</Link></li>
           <li className="nav-list"><Link to="/productstable" className="nav-link">ProductsTable</Link></li>
           <li className="nav-list"><Link to="/employees" className="nav-link">Employees</Link></li>
        </ul>
    </nav>
}

export default Navbar