import axios from "axios";

const MovieCards= async (title) =>{

    const response = await axios.get(
    "http://www.omdbapi.com/?i=tt3896198&apikey=3e13533c");

    const result = response?.result
    
    return(
        <>
        <div>
            <h1>Movie 1</h1>
        </div>
        <div>
            <h1>Movie 2</h1>
        </div>
        <div>
            <h1>Movie 1</h1>
        </div>
        <div>
            <h1>Movie 2</h1>
        </div>
        <div>
            <h1>Movie 1</h1>
        </div>
        <div>
            <h1>Movie 2</h1>
        </div>
        <div>
            <h1>Movie 1</h1>
        </div>
        <div>
            <h1>Movie 2</h1>
        </div>
        <div>
            <h1>Movie 1</h1>
        </div>
        <div>
            <h1>Movie 2</h1>
        </div>
        </>
    )
}

export default MovieCards