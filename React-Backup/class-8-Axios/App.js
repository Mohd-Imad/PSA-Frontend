// React Routing Example using react-router-dom version-6.4.1

import React from "react";
import Navbar from "./Navbar/Navbar";
import Users from './Components/Users/Users'
import Products from "./Components/Products/Products";
import ProductsTable from "./Components/Products/ProductsTable";
import Employees from './Components/Employees/Employees';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/users" element={<Users />}/>
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/productstable" element={<ProductsTable />}/>
            <Route exact path="/employees" element={<Employees />}/>
          </Routes>
        </Router>
    </div>
  )
}
export default App