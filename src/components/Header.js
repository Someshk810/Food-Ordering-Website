import React from "react";
import { Link } from "react-router-dom"; 



function Header(){
   
    return(
       <header>
       <div className="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      <Link  class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/">About Us</Link>
      </li>
      <li class="nav-item">
      <Link  class="nav-link" to="/cart">Cart</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/signIn">Sign In</Link>
      </li>
      
    </ul>

  </div>
</div>
         

       </header>
    )
};

export default Header; 

const navbar ={ 
    backgroundColor:"blue",
    // display:"flex",
    // alignItems:"center",
    // justifyContent:"center"
};

