import React from "react";
import './nav.css';

const NavBar = ({ onMoviesClick, onSeriesClick }) => {
  const handleMoviesClick = () => {
    console.log('Movies clicked');
    onMoviesClick(); // Call the onMoviesClick function if provided
};

const handleSeriesClick = () => {
    console.log('Series clicked');
    onSeriesClick(); // Call the onSeriesClick function if provided
};
    return (
      
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" onClick={handleMoviesClick}>
          <a className="nav-link " aria-current="page" href="#">Movies</a>
        </li>
        
        <li className="nav-item" onClick={handleSeriesClick}>
          <a className="nav-link" href="#">Series</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
};

export default NavBar;