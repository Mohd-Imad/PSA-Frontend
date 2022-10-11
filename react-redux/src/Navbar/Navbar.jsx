import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark text-white'>
        <a href="/" className='navbar-brand'>React Redux Counter-Example</a>
        <ul className="ml-auto">
          <li className="nav-list"><a href="#" className="nav-link">Counter</a></li>
          <li className="nav-list"><a href="#" className="nav-link">CounterTable</a></li>
        </ul>
    </nav>
  )
}

export default Navbar