import React from 'react'

const rating =3;
const addImage = (rating)=>{
    var imgArr=[];
    
    for(let i=0;i<5;i++){
      if(i<rating){
      imgArr.push(
         <div key={i.toString()}
        style={{flexDirection:"column",alignItems:"center",justifyContent:"center",height:"20px",width:"20px",marginRight:"8px"}}>
        <img
        style={{verticalAlign:"top"}}
            className="img"
          src={require('../../images/star.png')}
          alt=""
        />
        </div>
        );
      }
        else{
          imgArr.push(
        <div key={i.toString()}
          style={{flexDirection:"column",alignItems:"center",justifyContent:"center",height:"20px",width:"20px",marginRight:"8px"}}>
        <img
         style={{verticalAlign:"top"}}
         className="img"
          src={require('../../images/empty-star.png')}
          alt=""
        />
        </div>
        );
        }  
    }
    
    return imgArr;
  }


function RestaurantData(props) {
  return (
    <div className="restaurant-data-rating-container">
      <div className="restaurant-data">
      <h2>{props.name}</h2>
      <p id="restaurant-type">{props.desc}</p>
      <div className="timing-container">
        <div className="clock-img-container">
        <img
           className="img"
           src= {require("../../images/location.png")} 
           alt=""
        />
        </div>
        <div className="timing">
          <span>{props.location}</span>
        </div>

      </div>
      <div className="timing-container">
        <div className="clock-img-container">
        <img
           className="img"
           src= {require("../../images/clock.png")} 
           alt=""
        />
        </div>
        <div className="timing">
          <span> {props.timing}</span>
        </div>

      </div>
      <div className="timing-container">
        <div className="clock-img-container">
          <span>{props.rating}/5</span>
        </div>
        <div className="">
           <div className="rating-images-conatiner">
                    {addImage(props.rating)}
                    </div>
        </div>

      </div>
      
         </div>
             
      </div>

  )
}

export default RestaurantData;
