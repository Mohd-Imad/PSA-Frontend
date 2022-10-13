import React from 'react'
import Counter from '../Counter/Counter'
import CounterTable from '../Counter/CounterTable'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark text-white navbar-expand-lg'>
        <a href="/" className='navbar-brand'>React Redux Counter-Example</a>
    </nav>
  )
}

export default Navbar