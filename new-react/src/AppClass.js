// React Component--- a piece of reusable UI code, component describes UI

/* React Component rules--- always should start from Uppercase letter 
                            file name and component name should be same either function or class component*/

// 2 ways to create Components-----  1. Function Component    2. Class Component

// class component
import React from 'react'
class AppClass extends React.Component{            //here, AppClass is child class and React.Component is parent class

    render(){                                       //render()---React built in method   //overriding render() method
        return  <div>
                    <h1>Hello, GM</h1>
                    <h1>Hello, GN</h1>
                </div>
    }
}
export default AppClass