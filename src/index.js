import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import StarRating from "./StaarRating"

// function Test(){
//   const [movieRating , setMovieRating]=useState(0)
//   return <div>
//     <StarRating color="blue" maxrating={10} onsetRating={setMovieRating}/>
//     <p>the movie was rated {movieRating} stars</p>
//     </div>
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxrating={5} message={["terrible","bad","okay","good","amazing"]} defaultRating={3}/>
    <StarRating maxrating={5} color="red" className="test"/> */}
    {/* <Test></Test> */}
  </React.StrictMode>
);


