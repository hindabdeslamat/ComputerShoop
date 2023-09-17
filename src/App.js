import Afficher from "./Afficher"
import React from "react"
import About from "./About"
import Blog from "./Blog"
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Details from "./Details";
function App() {
  return (
    <div> <div><ul>   
     <li>  <Link to="/">Afficher</Link> </li> 
     <li>  <Link to="/home">Home</Link> </li> 
     <li>  <Link to="/about">About</Link></li> 
     <li>  <Link to="/blog">Blog</Link> </li>
      </ul>
      </div>
      <div>

        </div>

      <Routes> 
           <Route path="/" element={<Afficher  />} /> 
           <Route path="/about" element={<About />} />
           <Route path="/blog" element={<Blog  />} /> 
           <Route path="/product/:id" element={<Details />} />
      </Routes>  
         </div>
  );
}

export default App;
