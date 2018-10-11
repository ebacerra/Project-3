import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav>

      <div className="navbar" id="navbargroup" herf="/">
      <div className="logoname">
      <p id="logo">
      Flashii
    </p>

      </div>
    
  
      <a href="#">Newsfeed</a>
    
  
      <a href="#">Rooming</a>  
   
      <a href="#">Roaster</a>  
  
          <a href="#">Add New Participant</a>  
          <button type="button" class="btn btn-outline-primary">Logout</button>    

  </div>

</nav>

);

export default Nav;
