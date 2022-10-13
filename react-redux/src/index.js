// React version-17
/* import React from "react";
import ReactDOM  from "react-dom";
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root')) */

//React version-18
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
) 