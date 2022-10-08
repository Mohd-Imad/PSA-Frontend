import react from 'react'
import {Link} from 'react-router-dom'

let Navbar = ()=>{
    return <nav className='navbar navbar-dark bg-danger text-white navbar-expand-lg'>
        <Link to="#" className='navbar-brand'>React Hooks- useEffect Example</Link>
        <ul className='navbar-nav ml-auto'>
            {/* <li className='nav-list'><Link className='nav-link' to="/">useState</Link></li> */}
        </ul>
    </nav>
}

export default Navbar