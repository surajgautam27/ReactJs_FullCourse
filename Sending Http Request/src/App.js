import React, { useState,useEffect,useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
const [error , setError] = useState(null)


 const  fetchMovieHandler =useCallback( async ()=> {
    setIsLoading(true)
    setError(null)
    try 
    {
      const response = await fetch("https://react-http-b46cd-default-rtdb.firebaseio.com/movies.json");
      
      
     if( !response.ok)
     {
      throw new Error('Something Went Worng')
     }
     const data = await response.json()
  
     const loadedMovies =[];
     for(const key in data){
      loadedMovies.push({
        id:key,
        title:data[key].title,
        openingText:data[key].openingText,
        releaseDate:data[key].releaseDate
      })
     
     }

       
        setMovies(loadedMovies);
            setIsLoading(false) 
    } catch(error){
setError(error.message)
    }
    setIsLoading(false) 
  },[])
  useEffect(()=>{
    fetchMovieHandler()
  },[fetchMovieHandler])


  async function addMovieHandler (movie){
    const response= await fetch('https://react-http-b46cd-default-rtdb.firebaseio.com/movies.json',
    {
      method:'POST',
      body:JSON.stringify(movie),
      headers:{
        'content-type':'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
  }
  let content = <p>Found No Movies..</p>;
  if(movies.length >0){
    content = <MoviesList movies={movies}/>
  }
  if(error)
  {
    content = <p>{error}</p>
  }
  if(isLoading)
  {
    content= <p>Loading...</p>
  }
  return (
    <React.Fragment>
      <section>
      <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length>0 &&<MoviesList movies={movies} />}
        {!isLoading && movies.length ===0 && !error && <p>No movies found..</p>}
        {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>} */}
      {content}
      </section>
    </React.Fragment>
  );
}

export default App;
