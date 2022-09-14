// How to read class component data?

import React from "react";
class MovieClass extends React.Component{
    movie_Name = "KGF Chapter-2";
    movie_Image = "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/04/15/1032229-kgf-1.jpg"

    render(){
        return <div>
            <h1>Movie Name:{this.movie_Name}</h1>           {/* here, {}--this is react expression, this keyword--pointing to the class variable*/ }
            <img src={this.movie_Image} alt="pic is missing"/>
            <button className="btn btn-warning">Watch</button>
            <button className="btn btn-success">Download</button>
        </div>
    }
}

export default MovieClass