import react from 'react'
import {Link} from 'react-router-dom'

let Navbar = ()=>{
    return <nav className='navbar navbar-warning bg-warning text-black navbar-expand-lg'>
        <Link to="/" className='navbar-brand'>Contact App using Function Component</Link>
        <ul className='navbar-nav ml-auto'>
            <li className='nav-list'><Link className='nav-link' to="/contactApp">ContactApp</Link></li>
        </ul>
    </nav>
}

export default Navbar