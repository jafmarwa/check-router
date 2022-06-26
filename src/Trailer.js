import React from "react";
import { useParams} from "react-router-dom";
import ReactPlayer from "react-player";

const Trailer=({movies})=>{
const {id} = useParams()
console.log(id);
const desk = movies.find(el=>el.id==id)
    console.log(desk)

return(
   
   <div>
     <h1>Description</h1>

  <p> {desk.description}   </p>   

  <ReactPlayer url={desk.traile}/>

    </div>
    );
}

export default Trailer ;