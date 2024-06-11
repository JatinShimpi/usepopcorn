import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from "./StaarRating"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxrating={5}/>
    <StarRating maxrating={10} color="red" className="test"/>
  </React.StrictMode>
);


