import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({movies}) =>{
    
    return(
        <div className="List">
            
  
 
  <div className="list">
           {movies.map(el=><div><MovieCard movie={el}/></div>)}
           {/* {movies.map((movie,key)=>(<MovieCard movie={movie} key={key}/>))} */}
</div>
        </div>
    )
}
export default MovieList;