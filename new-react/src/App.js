import ReactDOM  from "react-dom"
import Navbar from './Navbar/Navbar'
    import Message from "../../React-Backup/class-4-State/State Ex-2-success/Message"
    // import Message from "./State/Message-Error"
    // import Message from "./State/MessageClass-ForceUpdate"
function App(){
    return <div>
        <Navbar />
        <Message />
        {/* <Message-Error /> */}
        {/* <MessageClass-ForceUpdate /> */}
    </div>
}

export default App