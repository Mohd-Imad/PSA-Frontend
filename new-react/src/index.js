// This is react application's main file

import React from 'react';
import ReactDOM from 'react-dom';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'             //enabling bootstrap using bootstrap pacakages from node_modules
// import bootstrap from './assets/css/styles.css'                                      //enabling bootstrap by creating our own styles.css in src
// import AppClass from './AppClass';
// import Movie from './Movie';
import MovieClass from './MovieClass';
// import App from './App';
//ReactDOM.render(1,2);                      //here 1 argument--what to render    2 argument--where to render

// ReactDOM.render("Hello, Good Evening", document.getElementById('test'))                                    //passing argument as a string
// ReactDOM.render(<h1>Welcome To React</h1> , document.getElementById('test'))                               //passing argument as a tag
// ReactDOM.render(<div><h1>Welcome To React</h1><h2>React </h2></div> , document.getElementById('test'))     //passing argument as an element having number of tags
// ReactDOM.render(<App />, document.getElementById('test'))                                                      //passing argument as function component
//ReactDOM.render(<AppClass />, document.getElementById('test'))                                                      //passing argument as class component
// ReactDOM.render(<Movie />, document.getElementById('test'))                                                      //passing argument as function component
ReactDOM.render(<MovieClass />, document.getElementById('test'))                                                      //passing argument as class component
