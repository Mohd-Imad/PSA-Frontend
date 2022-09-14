// How to read function component data?

function Movie(){
    let movie_Name = "Vikram";
    let movie_Image = "https://m.timesofindia.com/photo/91660096.jpeg"

    return <div>
            <h1>Movie Name:{movie_Name}</h1>            {/* {}---this is react expression, which access to the variable */} 
            <img src={movie_Image} alt=""/>
            <button className="btn btn-warning">Watch</button>
            <button className="btn btn-success">Download</button>
    </div>
}

export default Movie