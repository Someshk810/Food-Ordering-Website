import React from "react";
import Colors from "../constants/colors";
import {MdOutlineStarOutline,MdOutlineCircle} from "react-icons/md";


function RestaurantCard(props){
  const{id,name,desc,isPureVeg,image,rating,deliveryTime,cost,offer}=props;
    return(
       
       <div className="restaurant-card-container">
        
        <div className="image-container">
        <img
           
            src={require("../images/pizza1.jpg")}
            alt="Home"
          />

        </div>

        <div  className="restaurant-name-container">
            <span className="restaurant-name">{name}</span>
            <div className="restaurant-type"> 
            <div style={{ display:"flex",flexDirection:"column",backgroundColor:"#3AB757", borderRadius:"50%",marginRight:"3px" }}>
            
           { isPureVeg === true ?  <MdOutlineCircle style={{color:"#3AB757" ,height:"10px",width:"10px" }} />:null}
             </div>
             { isPureVeg ===true?   <span >Pure-Veg</span>:null}
           
            </div>
            

                       
        </div>

        <div className="restaurant-category">
          <p>{desc}</p>
        </div>

        <div className="restaurant-info-container">

        <div 
        className="restaurant-info rating"
        style={rating >3?{backgroundColor:"#3AB757"}:{backgroundColor:"orange"}}>
        <span> {rating}</span> 
        <div style={{ display:"flex",flexDirection:"column"  ,padding:"0px 3px 0px 3px"}}> 
       <MdOutlineStarOutline
       style={{color:"black" ,height:"15px",width:"15px"  }} />
       </div>
        </div>

        <div className="vertical-hr">

        </div>

        <div className="restaurant-info time">
        <p>{deliveryTime}</p> 

        </div>

        <div className="vertical-hr">

        </div>

        <div className="restaurant-info price">
          
          <p> &#8377;{cost} For Two</p> 
        </div>  
        </div>
        <hr  className="hr-tag"/>

        <div className="offers">
        <p>50% off | use <span>{offer}</span></p>
        </div>
        <hr  className="hr-tag"/>

        <div className="quick-view">
        <p>Quick View</p>
     
        </div>
       </div>
      
    )
};


export default RestaurantCard;


