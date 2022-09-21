import ReactDOM  from "react-dom"
// import Registration from "./Form/Reg Form/Registration"
import Navbar from './Navbar/Navbar'
// import Login from "./Form/Login Form/Login"
// import LoginBootstrap from "./Form/Login Form/LoginBootstrap"
import Register from "./Form/Reg Form/Register"


function App(){
    return <div>
        <Navbar />
        {/* <Login />
        <LoginBootstrap /> */}
        {/* <Registration /> */}
        <Register />
    </div>
}

export default App