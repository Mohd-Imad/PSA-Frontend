// This is react application's main file

import React from 'react';
import ReactDOM from 'react-dom';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'             //enabling bootstrap using bootstrap pacakages from node_modules
// import bootstrap from './assets/css/styles.css' 
import App from './App';                                     //enabling bootstrap by creating our own styles.css in src



//ReactDOM.render(1,2);                      //here 1 argument--what to render    2 argument--where to render

// ReactDOM.render("Hello, Good Evening", document.getElementById('test-1'))                                    //passing argument as a string
// ReactDOM.render(<h1>Welcome To React</h1> , document.getElementById('test-1'))                               //passing argument as a tag
// ReactDOM.render(<div><h1>Welcome To React</h1><h2>React </h2></div> , document.getElementById('test-1'))     //passing argument as an element having number of tags
ReactDOM.render(<App />, document.getElementById('test-1'))                                                      //passing argument as function component

