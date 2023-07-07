import React from "react";
import Colors from "../constants/colors";
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <section className= "home-section">

      <div className="home-container">
        
        <div >
          <img
           id="home-image"
            src={require("../images/home.png")}
            alt="Home"
            
          />
        </div>
      </div>

      <div className="home-container">
        
        
          <h2 >
            Order Your Favourite Food Now
          </h2>
          <p>  Lorem ipsum uod exercitationem, explicabo sit amet consectetur, adipisicing elit. Inventore quo quod exercitationem, explicabo tenetur repudiandae tenetur repudiandae </p>
          <div style={{backgroundColor:Colors.orange1,marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",width:"150px", height:"40px",borderRadius:"10px"}}>
          <Link 
           style={{textDecoration:"none", color:"white"}}
           to="/restuarant-view">
            Order Now
          </Link>
          </div>
        
      </div>

    </section>
  );
}

export default Home;

