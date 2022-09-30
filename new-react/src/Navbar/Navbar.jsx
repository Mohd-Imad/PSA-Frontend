import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark'>
          <a href="#" className='navbar-brand'>React Contact App</a>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-list'><Link to="/contactapp" className='nav-link'>Contact App</Link></li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar