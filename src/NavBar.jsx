import React from "react";
import './nav.css';

const NavBar = ({ onMoviesClick, onSeriesClick }) => {
  const handleClickMovies = () => {
    onMoviesClick();
  }

  const handleClickSeries = () => {
      onSeriesClick()
    
  }
    return (
      
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" onClick={handleClickMovies}>
          <a className="nav-link " aria-current="page" href="#">Movies</a>
        </li>
        
        <li className="nav-item" onClick={handleClickSeries}>
          <a className="nav-link" href="#">Series</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
};

export default NavBar;