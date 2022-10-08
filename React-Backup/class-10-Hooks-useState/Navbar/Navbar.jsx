import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
          <Link to="#" className='navbar-brand'>React Hooks useState Example</Link>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-list'><Link to="/message" className='nav-link'>Message</Link></li>
                <li className='nav-list'><Link to="/messagecomponent" className='nav-link'>MessageComponent</Link></li>
                <li className='nav-list'><Link to="/counter" className='nav-link'>Counter</Link></li>
                <li className='nav-list'><Link to="/counterclass" className='nav-link'>CounterClass</Link></li>
                <li className='nav-list'><Link to="/product" className='nav-link'>Product</Link></li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar