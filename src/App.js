import React,{useState} from 'react';
import './App.css';
import MovieList from './MovieList/MovieList';
import Search from './MovieCard/Search';
import Add from './MovieCard/Add';
import Trailer from './Trailer';
import {Routes,Route } from 'react-router-dom';

function App() {
const [movies,setMovies]=useState([
  {
    name:  "TOM and JERRY Cowboy Up!",
    poster:"https://i.pinimg.com/564x/d9/24/c6/d924c6103ec1d01637f2c2ba9fb5a636.jpg",
    description:"The film finds the duo in the Wild West where they help save a ranch from the hands of a villain. The rivals team up to help a cowgirl and her brother save their homestead from a greedy land-grabber.",
    traile:"https://youtu.be/CpriMEmXeQk",
    rate:5,
    id:1
  },
  {
    name:  "Vaillante",
    poster:"https://media.services.cinergy.ch/media/box1600/2a6980cd30a8d549eb5459c88a7e75c02c898381.jpg",
    description:"Since she was a child, Georgia Nolan has had only one ambition: to become a firefighter like her father! Unfortunately, in New York in 1932, women were not allowed to practice this profession. When the city's firefighters disappear one-by-one in mysterious fires in Broadway theaters, Georgia sees a golden opportunity: she disguises herself as a man and joins the team of rookie firefighters tasked with stopping the arsonist! This is the beginning of an adventure as hilarious as it is breathtaking!",
    traile:"https://youtu.be/5tD3FX2POQ0",
    rate:"3",
    id:2
  },
  {
    name:  "Les BAD GUYS",
    poster:"https://www.ecranlarge.com/uploads/image/001/425/pwp4upxfq0sikunhp51grnwyuev-781.jpg",
    description:"After a lifetime of legendary heists, notary criminals Mr. Wolf, Mr. Snake, Mr. Shark and Mrs. Tarantula are finally captured. To avoid jail time, the outlaw animals must pull off their biggest scam: becoming model citizens. Under the tutelage of their mentor, Professor Marmalade, the gang sets out to make the world believe that they are becoming honest.",
    traile:"https://youtu.be/ijjpgw0eqy8",
    rate:"3.5",
    id:3
  },
  
  {
    name:  "Alerte Rouge",
    poster:"https://fr.web.img6.acsta.net/pictures/22/02/28/10/29/1493029.jpg",
    description:"The adventures of Meilin Lee, a 13-year-old teenager, full of confidence, but torn between her image as a model little girl in the eyes of her overprotective mother and the chaos of adolescence. And as if all the changes taking place inside her weren't enough, whenever she's overwhelmed by her emotions - which, for a teenager, happens almost all the time - she transforms into a giant red panda!",
    traile:"https://youtu.be/41pXKTSrC_g",
    rate:"4",
    id:4
  },
  {
    name:  "L'âge de glace",
    poster:"https://www.cinezik.org/critiques/jaquettes/2022012402.jpg",
    description:"Eager for independence and always in search of thrills, the opossum brothers Crash and Eddie decide to look for a habitat just for them, but will quickly find themselves trapped under the ice, in a huge underground cave inhabited by dinosaurs. Rescued by their buddy Buck Wild, an eccentric one-eyed weasel, they go together and with the help of new friends embark on a mission to save the lost world from dinosaur domination.",
    traile:"https://youtu.be/ZEwj4NDWJNc",
    rate:"5",
    id:5
  },
  {
    name:  "Marmaduke",
    poster:"https://www.murphysmultiverse.com/wp-content/uploads/2022/05/Review_Marmaduke.jpg",
    description:"Messy and mischievous, Marmaduke has a huge heart but can't stay out of trouble. Will he have enough dog to succeed in the posh world of dog shows?",
    traile:"https://youtu.be/CcvJVnXm6nY",
    rate:"1",
    id:6
  },

]);
const[search,setSearch]=useState("")
const searchMovies=(name)=>{
  setSearch(name);
}
const [rating,setRating]=useState(1);



const handleRating = (number) => {console.log(number)
  setRating(number)
};
const adding =(movie)=>{
 /*  console.log(movie) */
  setMovies([...movies , movie])
};


  return (
   
    <div className="App">
   
    
        <Search keySearch={searchMovies} handleRating={handleRating} />
        <Add  adding={adding}  />
        
        <h1 className="logo">welcome to space kids</h1>

        
        
        <Routes>
          <Route path='/' element={<MovieList movies={movies.filter(
          (el)=>
          el.name.toUpperCase().includes(search.toUpperCase().trim())&&el.rate>=rating)}/>}/>
          <Route  path='/Trailer/description/:id' element={<Trailer movies={movies}/>}/>

        </Routes>
        
       
      

        </div>
        

  );
}

export default App;
