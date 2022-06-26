import React from "react";
import StarRatingComponent from 'react-star-rating-component';


const Search=({keySearch , handleRating} )=>{

    return(
<div>
 
<div className="btn-search">
<input type="text" placeholder="Enter Movie Name" className="inputtext" onChange={(e)=>keySearch(e.target.value)}></input>


<StarRatingComponent  
          name="rate" 
          starCount={5}
          onStarClick={(value)=>handleRating(value)}
          starColor={"#ff8c00"}
          emptyStarColor={"#ffffff"}
        />
</div>
</div>
    )
}
export default Search;

