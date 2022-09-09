// This is react application's main file

import ReactDOM from 'react-dom';
import App from './App';
//ReactDOM.render(1,2);
//ReactDOM.render("what you want to render","where you want to render");
// ReactDOM.render("Hello, Good Evening", document.getElementById('test'))                                    //passing argument as a string
// ReactDOM.render(<h1>Welcome To React</h1> , document.getElementById('test'))                               //passing argument as a tag
// ReactDOM.render(<div><h1>Welcome To React</h1><h2>React </h2></div> , document.getElementById('test'))     //passing argument as an element having number of tags
ReactDOM.render(<App />, document.getElementById('test'))                                                      //passing argument as component