import React, { useState } from 'react'

function CartItemDetails(props) {

  
  return (
   
    
    <div className="cart-item-details">

     <div className="item-image-container">
     <img   className="img"
           src= {props.menuImg}
           alt="img" />
     </div>

     <div className="item-data-container">

      <div className="item-data">
       <div className="item-type-container"> 
       <img   className="img"
           src={require("../../images/veg.png")}
           alt="Veg" />
       </div>

       <div className="item-name"> 
         <span>{props.menuName}</span>
       </div>
       </div>

       <div className="item-data">
       

       <div className="customize"> 
         <span>Customize</span>
         <div className="customize-img-container"> 
       <img   className="img"
           src={require("../../images/right-arrow.png")}
           alt="" />
       </div>
       </div>
       
       </div>
     </div>



     <div className="quantity-container">

     <button
      onClick={()=>{
        
      //  props.setQuantity(props.quantity-1)
      }}
      className="add-container"> 
     <img className="img"
           src={require("../../images/minus.png")}
           alt="" />
       </button>
       <div>
        <span>{props.itemQuantity}</span>
       </div>


       <button
         onClick={()=>{
       
      //  props.setQuantity(props.quantity+1)
     }}
        className="add-container"> 
       <img  className="img"  
           src={require("../../images/plus.png")}
           alt="" />
       </button>

     
     </div>
     <div className="menu-price">
       <p> <span>&#8377;</span>{props.price}</p>
     </div>
         
     </div>
   
  )
}

export default CartItemDetails
